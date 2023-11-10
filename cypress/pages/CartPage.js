/// <reference types="Cypress" />

class CartPage {
  //Locators
  elements = {
    itemName: () => cy.get(".inventory_item_name"),
    cartQuantity: () => cy.get(".cart_quantity"),
  };

  //Acciones
  selectedItemName(cardNumber) {
    return this.elements.itemName().eq(cardNumber).invoke("text");
  }

  checkItemQuantity(cardNumber, quantity) {
    this.elements.cartQuantity().eq(cardNumber).should("have.text", quantity);
  }
}

export default CartPage;
