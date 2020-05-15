describe("pathofexile.com page", (): void => {
  it("Downloads file", (): void => {
    cy.task("cleanDownloadsDirectory");
    cy.visit("/");
    cy.wait(5000);
    cy.contains("HerrLehmann");
    cy.contains("Create File").click();
    cy.wait(3000);
    cy.readFile("cypress/downloads/buyItemsList.txt", "utf-8").then(downloadedFile => {
      console.log(downloadedFile)
    });
  });
});
