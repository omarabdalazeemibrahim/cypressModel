/// <reference types="Cypress"/>

describe("App Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("Typing text and Saving it to the State and make Its Visibility true by Clicking Button", () => {
    cy.get("input").type("Omar");
    cy.get("button").click();
    cy.get("p").should("have.text", "Omar");
  });
});
