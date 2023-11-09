import React from 'react'
import IconWallet from './IconWallet'

describe('<IconWallet />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconWallet />)
  })
})