const webpackMerge = require('webpack-merge')

const buildValidations = require('./build-utils/build-validations')
const commonConfig = require('./build-utils/webpack.common')

// We can include Webpack plugins, through addons, that do 
// not need to run every time we are developing.
// We will see an example when we set up 'Bundle Analyzer'
const addons = (/* string | string[] */ addonsArg) => {
  const addons = [...[addonsArg]]
    .filter(Boolean)
  
  return addons.map(addonName => require(`./build-utils/addons/webpack.${addonName}`))
}

module.exports = env => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG)
  }

  const envConfig = require(`./build-utils/webpack.${env.env}.js`)

  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addons)
  )

  return mergedConfig
}
