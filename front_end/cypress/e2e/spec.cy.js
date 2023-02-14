describe('login_test', () => {
  it('goes to the login page', () => {
    cy.visit('http://localhost:3000/auth/login')

    cy.get('#username').type('maven')
    cy.get('#password').type('12345')
    cy.get('button').contains('Login').click()

    cy.url().should('include','/')
    
  })

})