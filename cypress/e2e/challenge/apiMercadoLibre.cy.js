/// <reference types="Cypress" />

describe("Test API - Mercadolibre", () => {
  const urlBase = "https://www.mercadolibre.com.ar/menu/departments";

  it("Status 200 - GET API testing", function () {
    cy.request({
      method: "GET",
      url: urlBase,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Peticion GET verifico que incluye departamentos ", function () {
    cy.request({
      method: "GET",
      url: urlBase,
    }).then((response) => {
      expect(response.body).to.have.property("departments");
      expect(response.body.departments).to.be.an("array").that.is.not.empty;
    });
  });
});
