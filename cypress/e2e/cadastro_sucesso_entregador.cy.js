/// <reference types="Cypress"/>
import CadastroSucessoEntregador from  '../support/pageObjects/cadastroEntregadorSucessoPageobjects';

describe('template spec', () => {
  it('Cadastrar um entregador com sucesso', () => {
    cy.visit('https://buger-eats.vercel.app/deliver')
    CadastroSucessoEntregador.typeCadastroDados();
    CadastroSucessoEntregador.typeCadastroEndereco();
    CadastroSucessoEntregador.clickMetodoEntrega();


  });
})