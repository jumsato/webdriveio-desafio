
import LoginResultsInteractionsScreen from "./loginResults.interactions"
export default class LoginResultsActionsScreen extends LoginResultsInteractionsScreen {



    async tologin (textoToLogin){
        await super.clickInpName('jumsato')
        await super.setValueInpName(textoToLogin)
        await super.clickInpPassword()
        await super.setValueInpPassword('123456ju')

    }

    




}