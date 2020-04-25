const { withUnimodules } = require('@expo/webpack-config/addons');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(
      {
        ...env,
        babel: {
          dangerouslyAddModulePathsToTranspile: [
            // Ensure that all packages starting with @evanbacon are transpiled.
            '@kross77',
          ],
        },
      },
      argv
  );
  return config;
};
