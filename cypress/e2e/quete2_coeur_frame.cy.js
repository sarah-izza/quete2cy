

describe('Inscription au site', () => {

  beforeEach(() =>{
    cy.visit('https://preprod.backmarket.fr/register')
    cy.contains("C'est OK pour moi").click()
  })

  afterEach(() =>{
    cy.get('#signup-email').clear()
  })

  it('Inscription reussie', ()=>{
        
        cy.get('#firstName').type('Regina')
        cy.get('#lastName').type('Phelange')
        cy.get('#signup-email').type('Regina.Phelange@gmail.com')
        cy.get('#signup-password').type('Mypassword8')
        cy.get('button[data-qa=signup-submit-button]').click()
  })   


  it('Inscription echouée', ()=>{
        
    cy.get('#firstName').type('Ken')
    cy.get('#lastName').type('Adams')
    cy.get('#signup-email').type('Ken.Adams@gmail.com')
    cy.get('#signup-password').type('mypassword8')
    cy.get('button[data-qa=signup-submit-button]').click()
  })   

})



describe('User authentication', () => {

  beforeEach(() =>{
    cy.visit('https://preprod.backmarket.fr/register')
    cy.contains("C'est OK pour moi").click()
  })

  it('Authenticate Regina', ()=>{
        
        cy.get('#signin-email').type('Regina.Phelange@gmail.com')
        cy.get('#signin-password').type('Mypassword8')
        cy.get('button[data-qa=signin-submit-button]').click()
  })   
})