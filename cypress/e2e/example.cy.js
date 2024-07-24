// https://on.cypress.io/api

describe('Automation Test for ClassRank', () => {
  beforeEach(()=> {
    cy.visit('/')
    cy.contains()
  })

  describe('Account Registration Test', () => {
    
    it('Admin Account Registration Successful', () => {
      cy.get('[]').type('{enter}')
      cy.contains()
    })  

    it('Admin Account Registration Failed', () => {
      cy.get('[]').type('{enter}')
      cy.contains()
    })

    it('Student Account Registration Successful', () => {
      cy.get('[]').type('{enter}')
      cy.contains()
    })

    it('Student Account Registration Failed', () => {
      cy.get('[]').type('{enter}')
      cy.contains()
    })
  })

  describe('Login/Logout Test', () => {
    beforeEach(() => {
      cy.get('[]').type('')
      cy.get('[]').type('')
    })

    it('Login Successful', () => {
      cy.get().should()
    })

    it('Login Failed', () => {
      cy.get().should()
    })

    it('Logout Successful', () => {
      cy.get().should()
    })
  })

  describe('Main Features Test', () => {
    it('Create New Thread', () => {
      cy.get().should()
    })

    it('Edit Thread', () => {
      cy.get().should()
    })

    it('Delete Thread', () => {
      cy.get().should()
    })
  })

  describe('Sub Features Test', () => {
    it('Add Comment', () => {
      cy.get().should()
    })

    it('Edit Comment', () => {
      cy.get().should()
    })

    it('Delete Comment', () => {
      cy.get().should()
    })
  })
})
