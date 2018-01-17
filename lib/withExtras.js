import React from 'react';
import { enhanceComponent } from './enhanceComponent';
import { getConfiguration } from './getConfiguration';

/**
 *
 * @param {Object}  options The configuration object
 * @param {string} options.identifier The screen identifier used to pull
 * configuration data out of the main config file.
 *
 * @returns {withExtras~enhance} Component manipulator. returns the enhanced component
 */
const withExtras = ({ identifier = '', config = null }, loader) => {
    const componentConfiguration = getConfiguration(identifier, config);

    if (!componentConfiguration) {
        return Component => Component;
    }

    /**
     *
     * @param {React.Component} EnhancedComponent The component that should
     * be ehnanced / modified
     * @returns {React.Component|null} The enhanced React component (EnhancedComponent)
     */
    const enhance = EnhancedComponent =>
        enhanceComponent(EnhancedComponent, componentConfiguration, loader);
    return enhance;
}


export default withExtras;
