import '@cypress/code-coverage/support'
import { register } from 'cypress-match-screenshot';
import options from "../../build/options.json";

register();


Cypress.Commands.add('assertCalledTimes', (alias, timesCalled) => {
  cy.state('requests').filter(call => console.log(`Call ${call.alias}`));
  expect(
    cy.state('requests').filter(call => call.alias === alias),
    `${alias} should have been called ${timesCalled} times`
  ).to.have.length(timesCalled);
});

Cypress.env('APP_API_URL', options.API_URL);

// cypress doesn't support fetch api, so stub it with polyfill and force polyfill here
Cypress.on('window:before:load', win => {
  win.fetch = null;
});
