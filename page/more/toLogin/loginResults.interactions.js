import LoginResultsElementsScreen from "./loginResults.elements.screen copy"
export default class LoginResultsInteractionsScreen extends LoginResultsElementsScreen{

    
    async clickInpName() {
        await this.inpName.click()
    }
    
    async setValueInpName (nameText) {
        await this.inpName.setValue(nameText)
    }
    
    
    async clickInpPassword(){
        await this.inpPassword.click()
    }
    
    async setValueInpPassword(passwordText){
        await this.inpPassword.setValue(passwordText)
    }
    
    
    async clickInpBtnNext(){
        (await this. inpBtnNext).click()
    }
}