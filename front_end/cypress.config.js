const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8xchsb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
