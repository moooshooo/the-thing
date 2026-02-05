
describe("Router test", () => {
  it("Korrekt navigering till Filmer", () => {
    cy.visit("http://localhost:5173/film");
    cy.get("a").contains("Filmer").click();
    cy.url().should("include", "/film");
    cy.get("h1").contains("Filmer").should("exist");
    cy.get(".MovieItem").should("exist");
  });

  it("Korrekt navigering till Serier", () => {
    cy.visit("http://localhost:5173/shows");
    cy.get("a").contains("Serier").click();
    cy.url().should("include", "/shows");
    cy.get("h1").contains("Serier").should("exist");
    cy.get(".ShowItem").should("exist");
  });

  it("Korrekt navigering till Om oss", () => {
    cy.visit("http://localhost:5173/about");
    cy.url().should("include", "/about");
    cy.get(".Main").should("exist");
  });

});

describe("login test", () => {
  it("Du kan komma in till login", () => {
    cy.visit("http://localhost:5173/login");
    cy.url().should("include", "/login");
    cy.get("h2").contains("Välkommen tillbaka").should("exist");
  });
});
