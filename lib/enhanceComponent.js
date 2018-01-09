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
const enhanceFromClass = (Component, screenConfig = null) => {
    if (!screenConfig) {
        return Component;
    }

    return class Enhancer extends Component {
        static get displayName() {
            return `withExtras(${Component.displayName || Component.name})`
        }

        constructor(props) {
            super(props);
            this.state = {
                isLoaded: false,
                extras: [],
            };
        }

        componentDidMount() {
            const components = Object.keys(screenConfig);
            const imports = components.map(c => import(`../addons/${screenConfig[c].modulePath}`));
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

            const tree = super.render();
            const enhancedRenderOutput = hijackRendering(tree, this.state.extras);
            return (
                <div className="class-enhanced">
                    {enhancedRenderOutput}
                </div>
            )
        }
    }
}

/**
 * Enhances functional React components with the add-ons provided through the
 * `screenConfig` argument.
 *
 * @param {React.Component} Component The original React component which needs
 * to be enhanced. This component is a function.
 * @param {string} screenConfig The configuration object containing the add-ons
 * configuraiton for the specific screen where our component is loaded.
 * @returns {Object} A new React component with the add-ons bundled in.
 */
const enhanceFromFunction = (Component, screenConfig = null) => {
    if (!screenConfig) {
        return Component;
    }

    return class Enhancer extends React.Component {
        static get displayName() {
            return `withExtras(${Component.displayName || Component.name})`
        }

        constructor(props) {
            super(props);
            this.state = {
                isLoaded: false,
                extras: [],
            };
        }

        componentDidMount() {
            const components = Object.keys(screenConfig);
            const imports = components.map(c => import(`./addons/${screenConfig[c].modulePath}`));
            const setReferencesOnState = loadedComponents => this.setState({
                extras: loadedComponents.map((LC, i) => ({
                    name: components[i],
                    component: LC.default(),
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

            const tree = Component();
            const enhancedRenderOutput = hijackRendering(tree, this.state.extras);
            return (
                <div className="function-enhanced">
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

    return isClass(Component) &&
        enhanceFromClass(Component, screenConfig) ||
        enhanceFromFunction(Component, screenConfig);
};
