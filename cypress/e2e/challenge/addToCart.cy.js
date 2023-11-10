/// <reference types="Cypress" />

import CartPage from "../../pages/CartPage";
import InventoryItemPage from "../../pages/InventoryItemPage";
import InventoryPage from "../../pages/InventoryPage";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const inventoryItemPage = new InventoryItemPage();

const { USERNAME_STANDARD, PASSWORD_STANDARD } =
  Cypress.env("USERS").USER_STANDARD;
const { INVENTORY, CART, INVENTORY_ITEM } = Cypress.env("PAGE_PATH");
const { PAGE_INVENTORY_TITLE } = Cypress.env("PAGES").INVENTORY;

describe("Test - Agregado de productos al carrito de compras", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(USERNAME_STANDARD, PASSWORD_STANDARD);
    cy.url().should("contain", INVENTORY);
    inventoryPage.elements.spanTitle().should("contain", PAGE_INVENTORY_TITLE);
  });

  it("001-ADD-CART - Agregar a carrito - Pagina Inventory", function () {
    let numberCard = 0;
    inventoryPage.noItemsInCart();

    inventoryPage.clickAddToCart(numberCard);
    inventoryPage.checkNumberInCart(1);
    inventoryPage.checkButtonRemove(numberCard);
    inventoryPage.checkNumberInCart(1);

    //Comparo item agregado al carrito con item en el carrito
    cy.log("Comparación item agregado al carrito con item en el carrito:");
    inventoryPage.selectedItemName(0).then((itemName) => {
      inventoryPage.clickCart();
      cy.url().should("contain", CART);
      cartPage.selectedItemName(0).should("eq", itemName);
    });
  });

  it("002-ADD-CART - Agregar a carrito - Pagina Inventory item", function () {
    let numberCard = 0;
    inventoryPage.noItemsInCart();

    inventoryPage.clickTitleItem(numberCard);
    cy.url().should("contain", INVENTORY_ITEM);

    inventoryItemPage.clickAddToCart();
    inventoryItemPage.checkNumberInCart(1);
    inventoryItemPage.checkButtonRemove();

    //Comparo item agregado al carrito con item en el carrito
    cy.log("Comparación item agregado al carrito con item en el carrito:");
    inventoryItemPage.selectedItemName().then((item) => {
      inventoryItemPage.clickCart();
      cy.url().should("contain", CART);
      cartPage.checkItemQuantity(numberCard, 1);
      cartPage.selectedItemName(0).should("eq", item);
    });
  });
});
