class CadastroSucessoEntregador{
    constructor(){
        this.fullNameInput = ':nth-child(2) > :nth-child(2) > :nth-child(1) > input';
        this.cpfNumberInput = ':nth-child(2) > :nth-child(2) > :nth-child(2) > input';
        this.emailInput = ':nth-child(3) > :nth-child(1) > input';
        this.whatsappInput = ':nth-child(3) > :nth-child(2) > input';
        

        this.cepInput = ':nth-child(3) > :nth-child(2) > :nth-child(1) > input';
        this.searchcepButton = ':nth-child(3) > :nth-child(2) > :nth-child(2) > input';

        this.streetInput = ':nth-child(3) > input';
        this.bairroInput = ':nth-child(5) > :nth-child(1) > input';
        this.cityInput = ':nth-child(5) > :nth-child(2) > input';

        this.numberHouseInput = ':nth-child(4) > :nth-child(1) > input';
        this.complementoInput = ':nth-child(4) > :nth-child(2) > input';
    
        this.iconMoto = '.delivery-method > :nth-child(1)'
    }

    typeCadastroDados(){
        cy.get(this.fullNameInput).type("Joaquinho da Silva");
        cy.get(this.cpfNumberInput).type("11315391686");
        cy.get(this.emailInput).type("joaquim_da_silva@gmail.com");
        cy.get(this.whatsappInput).type("31999999999");
    }

    typeCadastroEndereco(){
        cy.get(this.cepInput).type("35700306");
        cy.get(this.searchcepButton).click();
        cy.get(this.numberHouseInput).type('111');
        cy.get(this.complementoInput).type('Apto 302');
        cy.get(this.streetInput).should('contain.value','Rua Salvador');
        cy.get(this.bairroInput).should('contain.value','Canaã');
        cy.get(this.cityInput).should('contain.value','Sete Lagoas/MG');
        
    }
    clickMetodoEntrega(){
        cy.get(this.iconMoto).click();
    }



}
export default new CadastroSucessoEntregador();
