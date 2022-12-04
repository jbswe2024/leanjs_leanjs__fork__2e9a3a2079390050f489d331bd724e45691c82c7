/// <reference types="cypress" />

// TODO assert they all are a soft navigation (no full page reload)

describe("React Router 18 shell: navigation", () => {
  it("navigates to the root path of a remote React app", () => {
    cy.visit("http://localhost:44455/micro");
    cy.contains("h2", "Micro-frontend page (this is not the home page)").should(
      "be.visible"
    );
    cy.contains("h2", "Pets").should("be.visible");
  });

  it("navigates to a sub-path of a remote React app on the initial page load", () => {
    cy.visit("http://localhost:44455/micro/1");
    cy.contains("h2", "Buster is a snake").should("be.visible");
  });

  it.skip("navigates to a sub-path of a remote React app afther the initial page load", () => {
    cy.visit("http://localhost:44455/micro");
    cy.contains("a", "Lola").click();
    cy.contains("h2", "Lola is a cat").should("be.visible");
  });

  it("navigates from a remote React app to another page in the shell", () => {
    cy.visit("http://localhost:44455/micro");
    cy.contains("a", "Link to home shell").click();
    cy.contains("h2", "Home page").should("be.visible");
  });
});