import React from 'react'
import IconSearch from './IconSearch'

describe('<IconSearch />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconSearch />)
  })
})