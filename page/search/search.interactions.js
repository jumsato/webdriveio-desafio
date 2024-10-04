import SearchElementsScreen from "./search.elements.screen";

export default class SearchInteractionsScreen extends SearchElementsScreen{

    async clickInpSearch() {
        await super.inpSearch.click()
    }

    async setValueInpSeartText(searchText) {
        await super.inpSearchText.setValue(searchText)
    }

        async getTextoDesejado(){
            return await super.textoDesejado.getText()
    }


}