describe('Counter App', () => {
    beforeEach(() => {
        // Visit the app
        cy.visit('http://localhost:8080')
    })

    it('increments the counter', () => {
        // Find the increment button and click it
        cy.get('#increment').click()

        // The counter's value should now be 1
        cy.get('#counter-value').should('contain', '1')
    })

    it('decrements the counter', () => {
        // Find the decrement button and click it
        cy.get('#decrement').click()

        // The counter's value should now be -1
        cy.get('#counter-value').should('contain', '-1')
    })
})