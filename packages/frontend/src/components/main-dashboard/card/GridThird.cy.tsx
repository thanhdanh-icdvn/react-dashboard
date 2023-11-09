import React from 'react';
import GridThird from './GridThird';

describe('<GridThird />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GridThird />);
  });
});
