import React from 'react';
import { enhanceComponent } from './enhanceComponent';

/**
 *
 * @param {Object}  options The configuration object
 * @param {string} options.screenName The screen identifier used to pull
 * configuration data out of the main config file.
 *
 * @returns {withExtras~enhance} Component manipulator. returns the enhanced component
 */
const withExtras = ({ screenName = '' }) => {

    /**
     *
     * @param {React.Component} EnhancedComponent The component that should
     * be ehnanced / modified
     * @returns {React.Component|null} The enhanced React component (EnhancedComponent)
     */
    const enhance = EnhancedComponent =>
        enhanceComponent(screenName, EnhancedComponent);
    return enhance;
}


export default withExtras;
