const {By, until, wait} = require("selenium-webdriver"); // imports selenium

class StationsPage {
    constructor(driver){ //constructs page with driver as parameter
        this.driver = driver; //creates driver instance for this page
    }

   getStationsRail(){
        return this.driver.wait(until.elementLocated(By.css('section#national_and_regional_stations.sw-w-full'), 15000)); // returns Stations Rail - wait added to allow time for rail to display.
    }
}

module.exports = StationsPage; //exports the StationPage