/// <reference types="cypress"/>

describe('File upload and verify text', () => {
    beforeEach(() => {
        cy.visit("https://filebin.net/")
    })
    it('Upload file and want to download but go back', () => {
        cy.get('#fileField').attachFile('FFVII_REMAKE.jpg')
        cy.get('.lead').should('contain', "was created")
    })
})