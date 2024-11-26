// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import React from 'react';
import { mount, MountOptions, MountReturn } from 'cypress/react18'
import { MemoryRouterProps, MemoryRouter } from 'react-router-dom'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>
    }
  }
}

// Allows us to add a custom Cypress command
// We are creating our own version of Cypress' mount
// Because we are using React Router we need to customize the built in mount method 
Cypress.Commands.add('mount', (component, options = {}) => {

  // Destructure options to extract routerProps so that we can add an initialEntries of / to it.
  // We spread the rest of the mountOptions if there are any so they don't get left behind
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options;

  // We pass in routerProps so that any initialEntries URLs are saved in memory vs having the actual browser keep track of it.
  // Any components that pass through our custom mount method pass through MemoryRouter as props children,
  const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>

  return mount(wrapped, mountOptions)
})

// Example use:
// cy.mount(<MyComponent />)
