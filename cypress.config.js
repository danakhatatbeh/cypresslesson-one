const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    chromeWebSecurity:false,
    specPattern:['./cypress/integration/examples/test1.js','cypress/integration/test2.js']

  },
});
