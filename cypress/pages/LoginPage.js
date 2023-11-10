class LoginPage {
//fixture selectores?

//botones con cruz

  //Locators
  elements = {
    usernameInput: () => cy.get("[data-test='username']"),
    passwordInput: () => cy.get("[data-test='password']"),
    pageTitle: () => cy.contains("Swag Labs"),
    loginButton: () => cy.get("[data-test='login-button']"),
    errorUserLocked:()=>cy.get("[data-test='error']"),
    circleCross:()=>cy.get("[data-icon='times-circle']")

    
  };

  //Acciones
  typeUsername(type) {
    this.elements.usernameInput().type(type);
  }

  typePassword(type) {
    this.elements.passwordInput().type(type);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  checkUserBlockedMessage(){
    this.elements.errorUserLocked().contains("Epic sadface: Sorry, this user has been locked out?.")
  }

  checkTwoCircleCross(){
    this.elements.circleCross().should("have.length",2)
  }

  //Navegación
  navigateToLogin() {
    cy.visit("/");
  }
}

export default LoginPage;
