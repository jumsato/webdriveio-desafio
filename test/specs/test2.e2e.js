import CreateAccountScreen from "../../page/createaccount.screen.js"
import HomeScreen from "../../page/home.screen.js"
import OnboardingScreen from "../../page/onboarding.screen.js" 
import LoginScreen from "../../page/login.screen.js" 

describe('Wikipedia', () => {
    it('Logar no aplicativo wikipedia', async () => {
        
        // Triple A

        // abrir o app 
        //clicar no skip
        const onboarding = new OnboardingScreen()
        const home = new HomeScreen()
        await onboarding.clickBtnSkip()

        // clicar no menu mais  //- talvez tenha que mapear o modal? 

        await home.clickInpMore()

        //clicar no junte se a wiki
        //const joinwikipedia = new JoinWikipediaScreen()
        await home.clickInpJoin()

        // tela de criar conta 
        const createaccount = new CreateAccountScreen()
        await createaccount.clickInpLogin()

      
       //clicar no nome do usuario - username
       const loginscreen = new LoginScreen()
        await loginscreen.clickInpUserName()
        await loginscreen.setValueInpUserName('invalido')  

       // clicar na senha do usuário 
       await loginscreen.clickInpUserPassword()
        await loginscreen.setValueInpUserPassword (123456)
    
       //clicar no entrar
        await LoginScreen.clickLoginBottom()


    

    })
})




