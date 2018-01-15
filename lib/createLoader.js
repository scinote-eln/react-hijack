const createLoader = (importer) => (config) => {
  const components = Object.keys(config);
  const imports = components.map(c => importer(config[c].modulePath));
  return Promise
    .all(imports);
};

export default createLoader;
