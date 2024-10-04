import LoginInteractionsScreen from "./login.interactions";
export default class LoginQuestionScreen extends LoginInteractionsScreen{

    async oLoginEValido(){

        expect (await super.gettextoToLogin()).toBe('jumsato')
    }
    
}