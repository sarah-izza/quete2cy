const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e2en4y',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
