import  HomeScreen from ("../../pageobjects/home.screen.js")
import  OnboardingScreen from ("../../pageobjects/onboarding.screen.js")


describe('Wikipedia', () => {
    it('Abrindo o aplicativo do wikipedia', async () => {
        await driver.pause (5000)

       
        //1 passo: clicar no botao [skip]
        const onboarding = new OnboardingScreen()
        const home = new HomeScreen()


        await onboarding.clickBtnSkip()
       
      
         //2 passo: clicar na barra de pesquisa
        await home.clickInpSearch()

        // 3 passo: inserir um texto para pesquisa 
        await home.setValueInpSearchText('Cruzeiro')

         //4 passo: Verificar se o texto pesquisado é o mesmo da primeira linha de resultado da tela 
       expect(await home.getTextTextoDesejado()). toBe('Cruzeiro')
   
       
    })
  })
  