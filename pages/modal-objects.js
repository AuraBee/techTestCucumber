const { By, until, wait } = require("selenium-webdriver");

class ModalPopUp {
    constructor(driver) {
        this.driver = driver;
    }

    getModal() {
        return this.driver.wait(until.elementLocated(By.css('#msi-modal-overlay')), 30000); // returns the Modal PopUp - wait time added to allow time for pop up to display
    }
    getModalHeader() {
        return this.driver.wait(until.elementLocated(By.css('div.sc-c-msi-modal__features h2')), 20000); // returns the Modal Header - wait time added to allow time for header to display.    
    }


    getSignUp() {
        return this.driver.wait(until.elementLocated(By.css('div#msi-modal-overlay a.id-cta-button')), 10000); // returns the Sign Up Button - wait time added to allow time for header to display.    
    }


    getRegisterLink() {
        return this.driver.wait(until.elementLocated(By.css('div#msi-modal-overlay a.id-cta-link')), 10000); // returns the Register Link - wait time added to allow time for header to display.    
    }

    getMaybeLaterLink() {
        return this.driver.wait(until.elementLocated(By.css('div#msi-modal-overlay button.sc-c-msi-modal__close')), 10000); /// returns the MaybeLater button - wait time added to allow time for header to display.    
    }


    // >> ACTIONS <<

    goToSignUp() {
        this.getSignUp().click(); // adds a click action to Sign Up button
    }


    goToRegister() {
        this.getRegisterLink().click(); // adds a click action to Register Link
    }


    goToMaybeLater() {
        this.getMaybeLaterLink().click(); // adds a click action to Maybe Later Button    
    }

}
module.exports = ModalPopUp; // exports ModalPopUp Page


