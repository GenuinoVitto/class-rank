describe('User Login, Navigation, Thread Creation, Editing, and Deletion', () => {
  it('should log in, click "Start Sharing", navigate to the Threads page, create a thread, edit it, and then delete it', () => {
    // Visit the login page
    cy.visit('/')

    // Log in
    cy.get('#email').type('kendrick_chan@dlsu.edu.ph')
    cy.get('#password').type('12345678')
    cy.get('.btn-success').click()

    // Verify that we are on the home page
    cy.url().should('include', '/home')

    // Verify that the "Start Sharing" button is visible and click it
    cy.get('.bg-green-500').should('be.visible').click()

    // Verify that we are redirected to the Threads page
    cy.url().should('include', '/threads')

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

    // creation of threads
    //------------------------------------------------------------------------------------------------------------------
    // search for Programming 1 dont work
    cy.get('.flex-grow > .relative > #search-navbar').click().type('Programming Fundamentals 1')
    cy.get('.flex-grow > .relative > #search-navbar').type('{enter}')
    cy.wait(2000)

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
  })
})
