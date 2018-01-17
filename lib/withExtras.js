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
    let componentConfiguration = {};
    /**
     *
     * @param {React.Component} EnhancedComponent The component that should
     * be ehnanced / modified
     * @returns {React.Component|null} The enhanced React component (EnhancedComponent)
     */
    let enhance = EnhancedComponent => EnhancedComponent;

    try {
        componentConfiguration = getConfiguration(identifier, config);
        enhance = EnhancedComponent =>
            enhanceComponent(EnhancedComponent, componentConfiguration, loader);
    } catch (configurationError) {
        // intentionally left blank
    }

    return enhance;
}


export default withExtras;
