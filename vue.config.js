const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'StartLearn',
    themeColor: '#00e600',
    msTileColor: '#ff99ff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      exclude: [/\.gitkeep/],
      skipWaiting: true,
      clientsClaim: true,
      cleanupOutdatedCaches: true
    }
  }
})
