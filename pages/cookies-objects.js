const { By, until, wait } = require("selenium-webdriver"); //imports selenium 

class CookiesPopUp {
    constructor(driver) { // constructor with driver as parameter
        this.driver = driver; // creates the driver instance
    }
 
    //>> SELECTORS <<
    getCookiesPopUp() {
        return this.driver.wait(until.elementLocated(By.css('#bbccookiesbanner')), 30000); // returns Cookie Pop Up - wait time added to allow time for Pop Up to display
    }

    getCookiesAccept() {
        return this.driver.wait(until.elementLocated(By.css('#bbccookies-accept-button')), 30000); //returns Accept Cookies button- wait time added to allow time for Pop Up to display
    }
    getCookiesReject() {
        return this.driver.findElement(By.css('#bbccookies-reject-button')); //returns Reject Cookies button
    }


    getCookiesChoose() {
        return this.driver.findElement(By.css('div#bbccookies div.orb-banner-options a.banner-button-link"]')); //returns Let Me Choose Button
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
module.exports = CookiesPopUp  //exports CookiesPopUp
