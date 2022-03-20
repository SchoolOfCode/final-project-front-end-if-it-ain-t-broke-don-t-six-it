describe("Carries out a search using Derbyshire as location", () => {
  it("visits the app", () => {
    cy.visit("http://localhost:3000");
  });

  it("types Derbyshire into input type text", () => {
    cy.get("input[type=text]").type("Derbyshire");
  });

  it("clicks find new jobs button", () => {
    cy.contains("Find New Jobs").click();
  });

  it("clicks view button to open job detail page", () => {
    cy.contains("View").click();
  });
});
