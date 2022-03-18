describe("Navigates from landing page to search page, and then to job detail page", () => {
  it("cypress is working", () => {
    expect(true).to.equal(true);
  });

  it("visits the app", () => {
    cy.visit("http://localhost:3000");
  });

  it("clicks find new jobs button to open searchpage", () => {
    cy.contains("Find New Jobs").click();
  });

  it("clicks view button to open job detail page", () => {
    cy.contains("View").click();
  });
});
