export default class HomeScreen {
 
    get inpSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")')}
    get inpSearchText() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")')}
    get textoDesejado() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")')}


    async clickInpSearch() {
        await this.inpSearch.click()
    }

    async setValueInpSeartText(searchText) {
        await this.inpSearchText.setValue(searchText)
    }

        async getTextoDesejado(){
            return await this.textoDesejado.getText()
    }

}