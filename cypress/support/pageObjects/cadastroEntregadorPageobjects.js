class CadastroEntregador{
    constructor(){
        this.fullNameInput = ':nth-child(2) > :nth-child(2) > :nth-child(1) > input'
        this.cpfNumberInput = ':nth-child(2) > :nth-child(2) > :nth-child(2) > input'
        this.emailInput = ':nth-child(3) > :nth-child(1) > input'
        this.whatsappInput = ':nth-child(3) > :nth-child(2) > input'
        
        this.cepInput = ':nth-child(3) > :nth-child(2) > :nth-child(1) > input'
        this.searchcepButton = ':nth-child(3) > :nth-child(2) > :nth-child(2) > input'
        this.streetInput = ':nth-child(3) > input'
        this.bairroInput = ':nth-child(5) > :nth-child(1) > input'
        this.cityInput = ':nth-child(5) > :nth-child(2) > input'
        this.numberHouseInput = ':nth-child(4) > :nth-child(1) > input'
        this.complementoInput = ':nth-child(4) > :nth-child(2) > input'
    
        this.iconMoto = '.delivery-method > :nth-child(1)'
        this.pictureCNH = 'p'
        this.buttonSucess = '.button-success'

        this.buttonClosedpop_up = '.swal2-confirm'
        this.checkAlertError = '.alert-error'

        this.checkAlertErro01NameField = ':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error'
        this.checkAlertErro02CpfNumber = ':nth-child(2) > :nth-child(2) > .alert-error'
        this.checkAlertErro03Email = ':nth-child(3) > :nth-child(1) > .alert-error'
        this.checkAlertErro04CEP = ':nth-child(3) > :nth-child(2) > :nth-child(1) > .alert-error'
        this.checkAlertErro05NumberHouse = ':nth-child(4) > :nth-child(1) > .alert-error'
        this.checkAlertErro06DeliveryMethods = ':nth-child(4) > .alert-error'
        this.checkAlertErro07CNH = 'form > :nth-child(6)'
        this.checkAlertError08Whatsapp = ':nth-child(3) > :nth-child(2) > .alert-error'

        this.checkAlertErroCEPInvalid = ':nth-child(1) > .alert-error'
        this.checkAlertErroCPFInvalid =  '.alert-error'
        this.checkAlertCEPinvalid = ':nth-child(2) > :nth-child(1) > .alert-error'

        this.cepField = ':nth-child(3) > :nth-child(2) > :nth-child(1) > input'

        this.searchCEPbutton = ':nth-child(3) > :nth-child(2) > :nth-child(2) > input'
    }


    // Cenario cadastro com sucesso do entregador.
    typeCadastroDados(){
        cy.get(this.fullNameInput).type("Joaquinho da Silva")
        cy.get(this.cpfNumberInput).type("39124672009")
        cy.get(this.emailInput).type("joaquim_da_silva@gmail.com")
        cy.get(this.whatsappInput).type("31999999999")
    }

    typeCadastroEndereco(){
        cy.get(this.cepInput).type("35700306")
        cy.get(this.searchcepButton).click()
        cy.get(this.numberHouseInput).type('111')
        cy.get(this.complementoInput).type('Apto 302')
        cy.get(this.streetInput).should('contain.value','Rua Salvador')
        cy.get(this.bairroInput).should('contain.value','Canaã')
        cy.get(this.cityInput).should('contain.value','Sete Lagoas/MG')
    }
    clickMetodoEntrega(){
        cy.get(this.iconMoto).click()
    }
    clickPictureCNH(){
        cy.get(this.pictureCNH).selectFile('cypress/fixtures/test.jpeg', { action: 'drag-drop'})
    }
    clickButtonSucesso(){
        cy.get(this.buttonSucess).click()
        cy.get(this.buttonClosedpop_up).click()
    }

// Cenario Cadastro sem sucesso do entregador.
    validateAllFieldsNotFilled(){
        cy.get(this.buttonSucess).click()
        cy.get(this.checkAlertErro01NameField).contains('É necessário informar o nome')
        cy.get(this.checkAlertErro02CpfNumber).contains('É necessário informar o CPF')
        cy.get(this.checkAlertErro03Email).contains('É necessário informar o email')
        cy.get(this.checkAlertErro04CEP).contains('É necessário informar o CEP')
        cy.get(this.checkAlertErro05NumberHouse).contains('É necessário informar o número do endereço')
        cy.get(this.checkAlertErro06DeliveryMethods).contains('Selecione o método de entrega')
        cy.get(this.checkAlertErro07CNH).contains('Adicione uma foto da sua CNH')
    }
    validateFieldCPFIncorrect(){
        cy.get(this.fullNameInput).type("Joaquinho da Silva")
        cy.get(this.cpfNumberInput).type("111111111111")
        cy.get(this.buttonSucess).click();
        cy.get(this.checkAlertErroCPFInvalid).contains('Oops! CPF inválido')
    }
    validateFieldEmailInvalid(){
        cy.get(this.cpfNumberInput).clear()
        cy.get(this.cpfNumberInput).type("39124672009")
        cy.get(this.emailInput).type("joaquim_da_silva@test")
        cy.get(this.buttonSucess).click()
        cy.get(this.checkAlertErroCEPInvalid).contains('Oops! Email com formato inválido.')
    }
    validateCEPInvalid(){
        cy.get(this.emailInput).clear()
        cy.get(this.emailInput).type("joaquim_da_silva@test.com")
        cy.get(this.cepField).type('124123124213')
        cy.get(this.searchCEPbutton).click()
        cy.get(this.checkAlertCEPinvalid).contains('Informe um CEP válido')
        cy.get(this.cepField).clear()
        cy.get(this.cepField).type('35700346')
        cy.get(this.searchCEPbutton).click()
        cy.get(this.numberHouseInput).type('111')
        cy.get(this.iconMoto).click()
        cy.get(this.buttonSucess).click()
    }
    validatefieldWhatsapp(){
        cy.get(this.whatsappInput).type('031994923990')
        cy.get(this.buttonSucess).click()
        cy.get(this.checkAlertError08Whatsapp).contains('Oops! Whatsapp com formato incorreto')
        cy.get(this.whatsappInput).clear()
        cy.get(this.whatsappInput).type('31999999999')
        cy.get(this.buttonSucess).click();
    }
}
export default new CadastroEntregador()
