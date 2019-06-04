const URL = 'http://localhost:8080';
import stubResponse from '../fixtures/response';

describe('Powerball App', function() {
  beforeEach(() => {
    cy.server();
    cy.route('POST', '**/latestresults', stubResponse).as('getResults');
    cy.visit(URL);
  });

  it('loads with initial components', function() {
    cy.get('#app').should('exist');
    cy.get('#prefill').should('exist');
    cy.get('#delete').should('exist');
    cy.get('#draw').should('exist');
    cy.get('#ticket-container').should('exist');
    cy.get('#selected-numbers').should('exist');
    cy.get('[data-cy=numberCircle__primary]').should('have.length', 7);
    cy.get('[data-cy=numberCircle__powerball]').should('have.length', 1);
    cy.get('[data-cy=box__selected]').should('have.length', 0);
    cy.get('[data-cy=box]').should('have.length', 35);
    cy.get('[data-cy=box__powerball]').should('have.length', 20);
    cy.get('[data-cy=powerball-label]').should('have.length', 1);
  });

  it('fetches results when clicking on the prefill button and displays them', function() {
    cy.wait(2000);
    cy.server();
    cy.get('#prefill').should('exist');
    cy.get('#delete').should('exist');
    cy.get('#prefill').click();
    cy.wait('@getResults');
    const {
      DrawResults: [{ PrimaryNumbers, SecondaryNumbers }]
    } = stubResponse;
    cy.get('[data-cy=numberCircle__primary] > span')
      .should('have.length', 7)
      .then($divs => {
        Cypress._.each(PrimaryNumbers, number => {
          expect($divs).to.contain(number);
        });
      });
    cy.get('[data-cy=numberCircle__powerball] > span')
      .should('have.length', 1)
      .then($divs => {
        Cypress._.each(SecondaryNumbers, number => {
          expect($divs).to.contain(number);
        });
      });
    cy.get('[data-cy=box__selected] > span')
      .should('have.length', 7)
      .then($divs => {
        Cypress._.each(PrimaryNumbers, number => {
          expect($divs).to.contain(number);
        });
      });
    cy.get('[data-cy=box__selected__powerball] > span')
      .should('have.length', 1)
      .then($divs => {
        Cypress._.each(SecondaryNumbers, number => {
          expect($divs).to.contain(number);
        });
      });
  });
});
