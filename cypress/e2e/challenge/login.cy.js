/// <reference types="Cypress" />

import InventoryPage from "../../pages/InventoryPage";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

const { USERNAME_STANDARD, PASSWORD_STANDARD } =
  Cypress.env("USERS").USER_STANDARD;
const { USERNAME_LOCKED, PASSWORD_LOCKED } = Cypress.env("USERS").USER_LOCKED;
const { INVENTORY } = Cypress.env("PAGE_PATH");
const { PAGE_INVENTORY_TITLE } = Cypress.env("PAGES").INVENTORY;

describe("Test - Inicio de Sesión", () => {
  beforeEach(() => {
    loginPage.navigateToLogin();
  });

  it("001-LOGIN - Inicio de sesión - Usuario estandar ", function () {
    loginPage.typeUsername(USERNAME_STANDARD);
    loginPage.typePassword(PASSWORD_STANDARD);
    cy.log("Click Login");
    loginPage.clickLogin();

    cy.log("Pagina Inventory");
    cy.url().should("contain", INVENTORY);
    inventoryPage.elements.spanTitle().should("contain", PAGE_INVENTORY_TITLE);
  });

  it("002-LOGIN - Inicio de sesión - Usuario bloqueado ", function () {
    loginPage.typeUsername(USERNAME_LOCKED);
    loginPage.typePassword(PASSWORD_LOCKED);
    cy.log("Click Login");
    loginPage.clickLogin();
    loginPage.checkTwoCircleCross();

    cy.log("Falla intencional");
    loginPage.checkUserBlockedMessage();
    cy.url().should("not.contain", INVENTORY);
    inventoryPage.elements.spanTitle().should("not.exist");
  });
});
