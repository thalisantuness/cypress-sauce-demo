const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/v1/',

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
     
      return config
    },
  },
})
