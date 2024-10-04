export default class LoginResultsElementsScreen {

    get inpName() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_username_text")')}
    get inpPassword() { return $ ('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_password_input")')}
    get inpBtnLogin() { return $ ('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_button")')}


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