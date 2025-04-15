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

    
    //>> cookies MOdal Selectors <<
    getCookiesPopUp() {
        return this.driver.wait(until.elementLocated(By.css('#bbccookiesbanner')), 30000); // returns Cookie Pop Up - wait time added to allow time for Pop Up to display
    }

    getCookiesAccept() {
        return this.driver.wait(until.elementLocated(By.css('#bbccookies-accept-button')), 30000); //returns Accept Cookies button- wait time added to allow time for Pop Up to display
    }
    getCookiesReject() {
        return this.driver.findElement(By.id('#bbccookies-reject-button')); //returns Reject Cookies button
    }


    getCookiesChoose() {
        return this.driver.findElement(By.css('div#bbccookies div.orb-banner-options a.banner-button-link"]')); //returns Let Me Choose Button
    }

    
    goToSignUp() {
        this.getSignUp().click(); // adds a click action to Sign Up button
    }


    goToRegister() {
        this.getRegisterLink().click(); // adds a click action to Register Link
    }


    goToMaybeLater() {
        this.getMaybeLaterLink().click(); // adds a click action to Maybe Later Button    
    }


    //>> ACTIONS <<
    goToAcceptCookies(){
        this.getCookiesAccept().click();  //adds click action to  Accept Cookies button
    }

    goToRejectCookies(){
        this.getCookiesReject().click(); // adds click action to  Reject Cookies button
    }

    goToLetMeChoose(){
        this.getCookiesChoose().click(); // adds click action to Let Me Choose button
    }
}
    // >> ACTIONS <<

module.exports = ModalPopUp; // exports ModalPopUp Page


