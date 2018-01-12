import React from 'react';
import uuidV4 from 'uuid/v4';
import { getScreenConfig } from './getScreenConfig';
import traverse from 'react-traverse';

/**
 * Validates whether or not the provided Argument is a React component which extends
 * from React.Component (is a class) or not.
 *
 * @param {React.Component|null} Component The React component that needs to be validated
 */
const isClass = (Component = null) => Component && Component.prototype.isReactComponent;

const STRATEGY_APPEND = 'append';
const STRATEGY_PREPEND = 'prepend';
const STRATEGY_REPLACE = 'replace';

/**
 * Modifies the list of children it receives as an argument based on the
 * add-on specific strategy.
 *
 * @param {React.Element[]} originalComponentChildren The children of the component
 * we are extending
 * @param {React.Element} addon The enhancement element to be inserted into
 * the application.
 */
const applyStrategy = (originalComponentChildren = [], addon) => {
    switch(addon.strategy) {
        case STRATEGY_PREPEND:
            return [
                addon.component,
                ...originalComponentChildren,
            ];
        case STRATEGY_REPLACE:
            return addon.component;
        case STRATEGY_APPEND:
            return [
                ...originalComponentChildren,
                addon.component,
            ];
        // default is treated through the default strategy value which is 'append'
    }
}

/**
 * Extends the React render tree structure it receives with extra components it also
 * takes as arguments
 *
 * @param {React.Element} tree The render tree obtained from executing the `render()`
 * method of a class-based React component or by executing a stateless, functional
 * React component.
 * @param {Object[]} extras A list of add-ons (React components) used to enhance
 * the original render tree.
 *
 * @returns {React.Element} The initial render tree, enhanced with the extra components
 */
const enhanceTreeStructureWithExtras = (tree, extras) => traverse(tree, {
    ComponentElement(path) {
        return extras.map(e => {
            if (path.node.props.id === e.mountPoint) {
                return React.cloneElement(
                    path.node,
                    path.node.props,
                    ...applyStrategy(path.node.props.children, e)
                )
            }
            return path.node;
        }).pop()
    }
})

const addUniqueKey = (component) => {
    return React.cloneElement(
        component,
        Object.assign({}, component.props, { key: uuidV4() }),
        component.props.children,
    );
};

/**
 *
 * @param {React.Element} tree The render tree resulted from executing
 * `Component.render()` or `Component()` in the case of functional components
 * @param {React.Element[]} extras A list of React components (add-ons) that need to be
 * added to the original tree.
 * @returns {React.Element} A newly generated tree with the add-ons bundled within.
 */
const hijackRendering = (tree, extras = []) => {
    const newProps = Object.assign({}, tree.props);
    const treeWithExtras = enhanceTreeStructureWithExtras(tree, extras);
    return treeWithExtras;
}

/**
 * Enhances class-based React components with the add-ons provided through the
 * `screenConfig` argument.
 *
 * @param {React.Component} Component The original React component which needs
 * to be enhanced. This component is a class.
 * @param {string} screenConfig The configuration object containing the add-ons
 * configuraiton for the specific screen where our component is loaded.
 * @returns {Object} A new React component with the add-ons bundled in.
 */
const enhanceFromComponent = (Component, screenConfig = null) => {
    if (!screenConfig) {
        return Component;
    }

    const RootComponent = isClass(Component) ? Component : React.Component;

    return class Enhancer extends RootComponent {
        static get displayName() {
            return `withExtras(${Component.displayName || Component.name})`
        }

        constructor(props) {
            super(props);
            this.state = {
                isLoaded: false,
                extras: [],
                isClass: isClass(Component),
            };
        }

        componentDidMount() {
            const components = Object.keys(screenConfig);
            const imports = components.map(c => import('' + `${screenConfig[c].modulePath}`));
            const setReferencesOnState = loadedComponents => this.setState({
                extras: loadedComponents.map((LC, i) => ({
                    name: components[i],
                    component: addUniqueKey(LC.default()),
                    mountPoint: screenConfig[components[i]].mountPoint,
                    strategy: screenConfig[components[i]].strategy
                })),
                isLoaded: true,
            });

            return Promise.all(imports).then(setReferencesOnState);
        }

        render() {
            if (!this.state.isLoaded) {
                return null;
            }

            const tree = this.state.isClass ? super.render() : Component();
            const enhancedRenderOutput = hijackRendering(tree, this.state.extras);
            return (
                <div className="react-hijack-enhanced">
                    {enhancedRenderOutput}
                </div>
            )
        }
    }
};

/**
 * Takes care of the delegation of work and retrieves results of the component
 * extension workflow.
 *
 * @param {string} screenName The screen identifier - used to get the components
 * available for the specific screen where the Component is being loaded.
 * @param {React.Component} Component The original React component that needs
 * enhancement.
 * @returns {React.Component} A React component enhanced with add-ons
 */
export const enhanceComponent = (screenName, Component) => {
    if (!screenName) {
        throw new Error(`Invalid argument value for screenName => ${screenName}`)
    }

    const screenConfig = getScreenConfig(screenName);

    return enhanceFromComponent(Component, screenConfig);
};
