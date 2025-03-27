describe('homepage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  it('visits home page', () => {
    cy.get('[title="Practice Software Testing - Toolshop"]').should('exist');
  })

  context('Navigation', () => {
    it('navigates to the contact page', () => {
      cy.get('[data-test="nav-contact"]').click()
      cy.get('h3').contains('Contact')
    })
  })


})