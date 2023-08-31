// cypress/integration/userslist_spec.js

describe('Users List Filtering', () => {
    beforeEach(() => {
      // assuming you're running your dev server on port 3000
      cy.visit('http://localhost:3000');
    });
  
    it('filters users based on the input letter', () => {
      cy.get('input')
        .clear()
        .type('A');
  
      cy.get('li')
        .should('have.length', 1)
        .first()
        .should('contain', 'Alice');
  
      cy.get('input')
        .clear()
        .type('B');
  
      cy.get('li')
        .should('have.length', 1)
        .first()
        .should('contain', 'Bob');
    });
  
    it('displays multiple users with the same starting letter', () => {
      cy.get('input')
        .clear()
        .type('C');
  
      cy.get('li')
        .should('have.length', 1)
        .eq(0)
        .should('contain', 'Charlie')
    
    });
  
    it('displays no users if no match found', () => {
      cy.get('input')
        .clear()
        .type('Z');
  
      cy.get('li')
        .should('have.length', 0);
    });
  });
  