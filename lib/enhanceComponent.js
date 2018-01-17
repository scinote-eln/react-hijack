import React from 'react';
import uuidV4 from 'uuid/v4';
import traverse from 'scinote-react-traverse';

/**
 * Validates whether or not the provided Argument is a React component which extends
 * from React.Component (is a class) or not.
 *
 * @param {React.Component|null} Component The React component that needs to be validated
 */
const isClass = (Component = null) => !!(Component && Component.prototype.isReactComponent);

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

const traverseTreeStructure = (extras, path) => extras.map(e => {
    if (path.node.props.id === e.mountPoint) {
        return React.cloneElement(
            path.node,
            path.node.props,
            ...applyStrategy(path.node.props.children, e)
        )
    }
    return path.node;
}).pop();
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
const enhanceTreeStructureWithExtras = (tree, extras) => {
    return traverse(tree, {
        DOMElement(path) {
            return traverseTreeStructure(extras, path);
        },

        ComponentElement(path) {
            return traverseTreeStructure(extras, path);
        }
    })
};

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
 * `componentConfiguration` argument.
 *
 * @param {React.Component} Component The original React component which needs
 * to be enhanced. This component is a class.
 * @param {string} componentConfiguration The configuration object containing the add-ons
 * configuraiton for the specific screen where our component is loaded.
 * @returns {Object} A new React component with the add-ons bundled in.
 */
const enhanceFromComponent = (Component, componentConfiguration = null, loader) => {
    if (!componentConfiguration) {
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
            const components = Object.keys(componentConfiguration);
            const setReferencesOnState = loadedComponents => this.setState({
                extras: loadedComponents.map((LC, i) => ({
                    name: components[i],
                    component: addUniqueKey(LC.default()),
                    mountPoint: componentConfiguration[components[i]].mountPoint,
                    strategy: componentConfiguration[components[i]].strategy
                })),
                isLoaded: true,
            });

            return loader(componentConfiguration)
                .then(setReferencesOnState);
        }

        render() {
            if (!this.state.isLoaded) {
                return null;
            }
            const tree = this.state.isClass ? super.render() : Component({ ...this.props });
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
 * @param {React.Component} Component The original React component that needs
 * enhancement.
 * @param {Object} componentConfiguration The list of components that need to be rendered within the initial component
 * @param {Function} loader The loader function used to perform the imports for each of the components
 * provided by componentConfiguration - Currently external due to Webpack limitations
 * @returns {React.Component} A React component enhanced with add-ons
 */
export const enhanceComponent = (Component, componentConfiguration, loader) => {
    if (!componentConfiguration) {
        throw new Error(`Invalid argument value for componentConfiguration => ${componentConfiguration}`)
    }

    return enhanceFromComponent(Component, componentConfiguration, loader);
};
