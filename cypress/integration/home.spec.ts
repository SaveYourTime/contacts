import SortType from '@/enums/sort-type.enum';

describe('The Home Page', () => {
  let user: { name: string; email: string };
  before(() =>
    cy.fixture('user.json').then((data) => {
      user = data;
    }),
  );

  it('[LOAD] successfully loads', () => {
    cy.visit('/');
  });

  it('[READ] display 10 user items when page loaded', () => {
    cy.get('[data-testid="table-row"]').should('have.length', 10);
  });

  it('[MODAL] have modal popup after click `Add User Button`', () => {
    cy.get('[data-testid="add-button"]').click();
    cy.get('[data-testid="add-user-modal"]').should('exist');
  });

  it('[VALIDATE] show error message if name or email if empty string', () => {
    cy.get('[data-testid="add-user-modal-ok-button"]').click();
    cy.get('[data-testid="error-message"]')
      .should('be.visible')
      .should('contain.text', 'must not be empty');
    cy.get('[data-testid="email-input"]').type('invalid email');
    cy.get('[data-testid="error-message"]')
      .should('be.visible')
      .should('contain.text', 'must be an valid email');
    cy.get('[data-testid="email-input"]').clear();
  });

  it('[CREATE] create a new user via a popup modal', () => {
    cy.get('[data-testid="name-input"]').type(user.name);
    cy.get('[data-testid="email-input"]').type(user.email);
    cy.get('[data-testid="add-user-modal-ok-button"]').click();
  });

  it('[DISPLAY] have new user be placed at the last row', () => {
    cy.get('[data-testid="table-row"]').last().should('contain.text', user.name);
    cy.get('[data-testid="table-row"]').last().should('contain.text', user.email);
  });

  it('[DELETE] delete the user that we just added', () => {
    cy.get('[data-testid="table-row"]').last().find('[data-testid="delete-user-button"]').click();
    cy.get('[data-testid="table-row"]').last().should('not.contain.text', user.name);
    cy.get('[data-testid="table-row"]').last().should('not.contain.text', user.email);
  });

  it('[FILTER] filter by user name', () => {
    cy.get('[data-testid="filter-input"]').type(user.name);
    cy.get('[data-testid="filter-input"]').clear();
  });

  it('[SORT] sort by id or name', () => {
    cy.get('[data-testid="sort-select"]').select(SortType.ID_ASC);
    cy.get('[data-testid="sort-select"]').select(SortType.ID_DESC);
    cy.get('[data-testid="sort-select"]').select(SortType.NAME);
  });
});
