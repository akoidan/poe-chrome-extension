declare namespace Cypress {
  interface cy {

    /**
     * Verifies that http cypress stub has been called #N times
     * use route(...}.as('alias') to give request a name
     */
    assertCalledTimes(alias: string, timeCalled: number): Chainable<null>;
  }
}
