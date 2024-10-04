export default class SearchInteractionsScreen extends SearchInteractionsScreen {
    //classe para ações efetivas ex: pesquisar 
// essa classe sempre se extende a classe de interações, ex: para fazer um bolo preciso
// de ingredientes = elements, interações seria meu passo a passo, 
// e preciso efetivamente fazer o bolo = actions


async pesquisar(textoParaPesquisa){
    await super.clickInpSearch()
    await super.setValueInpSearchText(textoParaPesquisa)
}


}

