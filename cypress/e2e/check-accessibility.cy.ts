import { terminalLog } from './log-to-terminal.cy'

describe('Page accessibility tests', () => {
  it('Home page should have no accessibility issues', () => {
    cy.visit('http://localhost:3000')
    cy.injectAxe()

    // With no terminal log
    cy.checkA11y()
  })

  it('Fail page should have no accessibility issues', () => {
    cy.visit('http://localhost:3000/fail')
    cy.injectAxe()

    // With a terminal log
    cy.checkA11y(undefined, undefined, terminalLog)
  })

  it('Colors page should have no accessibility issues', () => {
    cy.visit('http://localhost:3000/colors')
    cy.injectAxe()
    cy.checkA11y(undefined, undefined, terminalLog)
  })

  it('Can target specific DOM elements', () => {
    cy.visit('http://localhost:3000/target')
    cy.injectAxe()
    cy.checkA11y('#some-div', undefined, terminalLog)
  })

  it('Can ignore specific DOM elements', () => {
    cy.visit('http://localhost:3000/ignore')
    cy.injectAxe()
    cy.checkA11y({ exclude: [['#bad-heading']] }, undefined, terminalLog)
  })

  it('Can check against custom rules', () => {
    const rules = {
      'empty-heading': { enabled: false },
    }

    cy.visit('http://localhost:3000/custom-rules')
    cy.injectAxe()
    cy.checkA11y(undefined, { rules }, terminalLog)
  })

  it('Can check for only critical issues', () => {
    cy.visit('http://localhost:3000')
    cy.injectAxe()

    // Options are: ['critical', 'serious', 'moderate', 'minor']
    cy.checkA11y(
      undefined,
      {
        includedImpacts: ['critical'],
      },
      terminalLog,
    )
  })
})
