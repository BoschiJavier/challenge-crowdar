/// <reference types="Cypress" />

class InventoryPage {
  //Locators
  elements = {
    spanTitle: () => cy.get(".title"),
    cart: () => cy.get("#shopping_cart_container"),
    inventoryItem: () => cy.get(".inventory_item"),
  };

  //Acciones
  clickAddToCart(cardNumber) {
    this.elements
      .inventoryItem()
      .eq(cardNumber)
      .find('[data-test^="add-to-cart"]')
      .click();
  }

  checkButtonRemove(cardNumber) {
    this.elements
      .inventoryItem()
      .eq(cardNumber)
      .find('[data-test^="remove"]')
      .should("have.text", "Remove");
  }

  clickCart() {
    this.elements.cart().click();
  }

  clickTitleItem(cardNumber) {
    this.elements
      .inventoryItem()
      .eq(cardNumber)
      .find(".inventory_item_name ")
      .click();
  }

  selectedItemName(numberCard) {
    return this.elements
      .inventoryItem()
      .eq(numberCard)
      .find(".inventory_item_name")
      .invoke("text");
  }

  checkNumberInCart(number) {
    this.elements
      .cart()
      .find(".shopping_cart_badge")
      .should("contain.text", number);
  }

  noItemsInCart() {
    this.elements.cart().find(".shopping_cart_badge").should("not.exist");
  }
}

export default InventoryPage;
