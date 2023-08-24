/// <reference types="Cypress"/>
import CadastroEntregador from  '../support/pageObjects/cadastroEntregadorPageobjects';

describe('cenario', () => {
  it('Cadastrar um entregador com sucesso', () => {
    cy.visit('https://buger-eats.vercel.app/deliver')
    CadastroEntregador.typeCadastroDados();
    CadastroEntregador.typeCadastroEndereco();
    CadastroEntregador.clickMetodoEntrega();
    CadastroEntregador.clickPictureCNH();
    CadastroEntregador.clickButtonSucesso();
  });
  it('Cadastrar um entregador sem sucesso - todas Validações', () => {
    cy.visit('https://buger-eats.vercel.app/deliver')
    CadastroEntregador.validateAllFieldsNotFilled();
    CadastroEntregador.validateFieldCPFIncorrect();
    CadastroEntregador.validateFieldEmailInvalid();
    CadastroEntregador.validateCEPInvalid();
  });
  
})