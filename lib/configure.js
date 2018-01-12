import config from 'react-global-configuration';

const DEFAULT_OPTIONS = {};

const configure = (options = DEFAULT_OPTIONS) => {
  return config.set({
    REACT_HIJACK: {
      ...options
    }
  });
};

export default configure;
