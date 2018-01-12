import config from 'react-global-configuration';

const MODULE_CONFIG_NAME = 'REACT_HIJACK';
/**
 *
 * @param {string} screenName The screen identifier
 * @returns {Object|null} An object containing the components available
 * on the specified screen or null.
 */
export const getScreenConfig = (screenName = '') => {
  if (!screenName) {
    return null;
  }

  const moduleConfig = config.get(MODULE_CONFIG_NAME);
  return config[screenName];
}
