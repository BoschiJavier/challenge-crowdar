/// <reference types="Cypress" />

class InventoryItemPage {
  //Locators
  elements = {
    cart: () => cy.get("#shopping_cart_container"),
    itemName: () => cy.get(".inventory_details_name.large_size"),
    itemDetails: () => cy.get(".inventory_details"),
  };

  //Acciones
  clickAddToCart() {
    this.elements.itemDetails().find('[data-test^="add-to-cart"]').click();
  }

  clickCart() {
    this.elements.cart().click();
  }

  selectedItemName() {
    return this.elements.itemName().invoke("text");
  }

  checkNumberInCart(number) {
    this.elements
      .cart()
      .find(".shopping_cart_badge")
      .should("contain.text", number);
  }

  checkButtonRemove() {
    this.elements
      .itemDetails()
      .find('[data-test^="remove"]')
      .should("have.text", "Remove");
  }
}

export default InventoryItemPage;
