const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  eporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "challenge-crowdar-report",
    embeddedScreenshots: true,
  },
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://www.saucedemo.com",
    trashAssetsBeforeRuns: false,
  },
});
