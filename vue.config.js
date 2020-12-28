const ConsoleInfo = require('timi-tools/console/index')
const VuecliConfig = require('timi-tools/vue/vuecliConfig')

const nodeEvnt = require('./src/environment/nodeEvnt.ts')

ConsoleInfo()

// config配置
let config = {
  resolveAlias: {
    '@': 'src',
    '@api': 'src/api',
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@environment': 'src/environment',
    '@plugins': 'src/plugins',
    '@utils': 'src/utils'
  },
  copyFiles: [{
    from: './static',
    to: 'static'
  }],
  postcss: true
}

let newVuecliConfig = new VuecliConfig(config)
let vuecliConfig = newVuecliConfig.getConfig()

vuecliConfig.css.loaderOptions.less = {
  lessOptions: {
    javascriptEnabled: true
  }
}

vuecliConfig.devServer = {
  port: nodeEvnt.port,
  host: '0.0.0.0',
  https: false,
  open: true
}

module.exports = vuecliConfig
