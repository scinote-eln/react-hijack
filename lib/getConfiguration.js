/**
 *
 * @param {string} identifier The area of the application whose addons are required
 * @returns {Object|null} An object containing the components available
 * on the specified screen or null.
 */
export const getConfiguration = (identifier = '', config = null) => {
  if (!identifier || !config || !(identifier in config)) {
    throw new Error(`There's something wrong with your screen configuration`)
  }

  return config[identifier];
}
