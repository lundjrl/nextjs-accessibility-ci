// Define at the top of the spec file or just import it
export const terminalLog = violations => {
  cy.task(
    'log',
    `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${
      violations.length === 1 ? 'was' : 'were'
    } detected`,
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length,
  }))

  cy.task('table', violationData)
}

// Then in your test...
it('Logs violations to the terminal', () => {
  cy.visit('http://localhost:3000/fail')
  cy.injectAxe()
  cy.checkA11y(undefined, undefined, terminalLog)
})
