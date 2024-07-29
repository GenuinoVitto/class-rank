// https://on.cypress.io/api

describe('User Login, Navigation, Thread Creation, Editing, and Deletion', () => {
  it('should log in, click "Start Sharing", navigate to the Threads page, create a thread, edit it, and then delete it', () => {
    // Visit the login page
    cy.visit('/')
    // register USER STORY #1
    cy.get('.btn-outline-success').click()
    cy.get('#name').type('Test')
    cy.get('#email').type('test@dlsu.edu.ph')
    cy.get('#password').type('12345678')
    cy.get('.d-grid > .btn').click()
    cy.wait(2000)
    cy.get('.card-footer > .btn').click()
    cy.wait(2000)

    
    // Log in

    //Unsuccessful Log in
    cy.get('#email').type('test@dlsu.edu.ph')
    cy.get('#password').type('00000000')
    cy.get('.btn-success').click()
    cy.wait(2000)
    cy.get('.text-danger').should('contain.text', 'Login failed, please try again.')

    // Successful Log in
    cy.get('#password').clear().type('12345678')
    cy.get('.btn-success').click()
    cy.wait(2000)
    // Verify that we are on the home page
    cy.url().should('include', '/home')

    // Verify that the "Start Sharing" button is visible and click it
    cy.get('.bg-green-500').should('be.visible').click()

    // Verify that we are redirected to the Threads page
    cy.url().should('include', '/threads')

    // creation of threads start USER STORY #2
    // Verify that the "Create Thread" button is visible and click it
    cy.get('.bg-green-500').should('be.visible').click()

    // Fill out the form to create a new thread
    cy.get('[placeholder="Class Name"]').type('Programming Fundamentals 1')
    cy.get('[placeholder="Class Code"]').type('CCPROG1')
    cy.get('textarea.block').type('Description of Programming Fundamentals 1')
    
    // Submit the form
    cy.get('.bg-blue-500').click()
    cy.wait(2000)

    // Verify that the new thread has been created
    cy.contains('Programming Fundamentals 1').should('be.visible')

    // Verify that the "Create Thread" button is visible and click it
    cy.get('.bg-green-500').should('be.visible').click()

    // Fill out the form to create a new thread
    cy.get('[placeholder="Class Name"]').type('Programming Fundamentals 2')
    cy.get('[placeholder="Class Code"]').type('CCPROG2')
    cy.get('textarea.block').type('Description of Programming Fundamentals 2')
    
    // Submit the form
    cy.get('.bg-blue-500').click()
    cy.wait(2000)

    // Verify that the new thread has been created
    cy.contains('Programming Fundamentals 2').should('be.visible')

    // Verify that the "Create Thread" button is visible and click it
    cy.get('.bg-green-500').should('be.visible').click()

    // Fill out the form to create a new thread
    cy.get('[placeholder="Class Name"]').type('Programming Fundamentals 3')
    cy.get('[placeholder="Class Code"]').type('CCPROG3')
    cy.get('textarea.block').type('Description of Programming Fundamentals 3')
    
    // Submit the form
    cy.get('.bg-blue-500').click()
    cy.wait(2000)

    // Verify that the new thread has been created
    cy.contains('Programming Fundamentals 3').should('be.visible')

    // creation of threads end USER STORY #2
    //------------------------------------------------------------------------------------------------------------------
    // search for Programming 1 dont work
    cy.get('.flex-grow > .relative > #search-navbar').click().type('Programming Fundamentals 1')
    cy.get('.flex-grow > .relative > #search-navbar').type('{enter}')
    cy.wait(2000)

    // User Story #5 Start
    // Edit the thread to add a description
    cy.get('.text-yellow-500').first().click() // Assuming the first edit button corresponds to the created thread
    cy.get('textarea').clear().type('This class is hard')

    // Wait for the save button to be visible and clickable
    cy.get('.bg-blue-500').should('be.visible').click() 

    cy.wait(3000)

    // Delete the thread
    cy.get('.text-red-500').first().click() 

    // Verify that the thread has been deleted
    cy.contains('Programming Fundamentals 3').should('not.exist')
    // User Story #5 End

    //Log out
    cy.get('#user-menu-button > .w-10').click()
    cy.get(':nth-child(2) > .block').should('contain.text', 'Sign out').click()
  })
})
