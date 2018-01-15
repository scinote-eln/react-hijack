/**
 *
 * @param {string} screenName The screen identifier
 * @returns {Object|null} An object containing the components available
 * on the specified screen or null.
 */
export const getScreenConfig = (screenName = '', config) => {
  if (!screenName || !(screenName in config)) {
    return null;
  }

  return config[screenName];
}
