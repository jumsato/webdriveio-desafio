
import LoginInteractionsScreen from "./login.interactions";
export default class LoginActionsScreen extends LoginInteractionsScreen {



    async tologin (textoToLogin){
        await super.clickInpName('jumsato')
        await super.setValueInpName(textoToLogin)
        await super.clickInpPassword()
        await super.setValueInpPassword('123456ju')

    }

    




}