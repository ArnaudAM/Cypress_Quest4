/// <reference types="cypress"/>

describe('File upload and deleted', () => {
    it('Upload file and delete it', () => {
        cy.visit("https://filebin.net/")
        cy.get('#fileField').attachFile('FFVII_REMAKE.jpg')
        cy.get('[data-bs-toggle="dropdown"]').click({multiple: true})
        cy.get('[data-bs-target="#modalDeleteFile-0"]').click()
    })
})
