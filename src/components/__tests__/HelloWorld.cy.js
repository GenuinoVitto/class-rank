// import HelloWorld from './HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('playground', () => {
//     cy.mount(HelloWorld, { props: { msg: 'Hello Cypress' } })
//   })

//   it('renders properly', () => {
//     cy.mount(HelloWorld, { props: { msg: 'Hello Cypress' } })
//     cy.get('h1').should('contain', 'Hello Cypress')
//   })
// })

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
