/// <reference types="cypress" />

describe('testing homepage', () => {
  it('handle cards', () => {
    cy.visit('http://localhost:3000/'); // 1.
    cy.get('img.nav-logo').should('be.visible', 'img');
    cy.get('input[data-cy=search-bar]')
      .should('contain', '');
    cy.contains('h3', 'bulbasaur');
    cy.get('img.card-img').should('be.visible', 'img');
    cy.get('.btns-containter-right').click();
    cy.get('div.container').should('be.visible');
    cy.contains('h3', 'pikachu');
    cy.get('input[data-cy=search-bar]')
      .type('fearrow');
    cy.get('.card-link').click();
    cy.contains('label', 'weight');
    cy.contains('slider');
    cy.contains('label', 'attack');
    cy.get('.back-btn').click();
    cy.visit('http://localhost:3000/pokemon/150');
    cy.contains('h3', 'mewtwo');
  });
});
