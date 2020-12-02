context('Mintedo PLAYCHILD', () => {
    beforeEach(() => {
        cy.visit('https://richardbyrne95.github.io/CI-MS2-Mintedo-PLAYCHILD/')
    })

    describe('Functionality', () => {
        it('should check if URL is valid', () => {
            cy.visit('https://richardbyrne95.github.io/CI-MS2-Mintedo-PLAYCHILD/');
            expect(document.readyState).to.equal('complete');
        })

        it('should test if the "Controls" button works', () => {
            cy.get('.btn')
                .click();
            cy.get('.modal')
                .should('have.css', 'display', 'block');
            cy.get('.close')
                .click();
        })
    })

    describe('Usability', () => {
        it('should check that SVG displays correctly on desktop', () => {
            cy.get('svg')
                .should('have.css', 'width', '595px', 'height', '987.7000732421875px');
        })

        it('should check that SVG displays correctly on mobile', () => {
            cy.viewport(402, 828).reload();
            cy.get('svg')
                .should('have.css', 'width', '336px', 'height', '557.760009765625px');
            cy.viewport(1920, 1080).reload();
        })

        it('should check if SVG has aria-label attribute', () => {
            cy.get('svg')
                .should('have.attr', 'aria-label');
        })
    })

    describe('Interface', () => {
        it('should check if canvas has correct size', () => {
            cy.get('canvas')
            .should('have.css', 'width', '315px', 'height', '288px')
        })
    })

})