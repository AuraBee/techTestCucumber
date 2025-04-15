const { By, wait, until } = require("selenium-webdriver"); //imports from Selenium

class HomePage {
    constructor(driver) { // constructor with driver as parameter
        this.driver = driver; // creates the driver instance
    }
    // selectors

    //  driver.findElement(By.css('#listen_live')).isDisplayed();

    getListenLiveRail() {
        return this.driver.findElement(By.css('section[data-testid="rail-listen_live"]')); // returns the Listen Live Rail
    }

    getListenLiveRailTitle(){
        return this.driver.findElement(By.css('section#listen_live header h2')); // returns the Listen Live Rail Title
    }

    getViewAllStations() {
        return this.driver.findElement(By.linkText('View all Stations & Schedules')); // returns View All Stations Link
    }

    getViewAllCategories() {
        return this.driver.findElement(By.linkText('View all Categories')); // returns View All Categories Link
    }

    getLinksInCategoriesRail() {
        return this.driver.findElements(By.css('section#categories ul.sw-grid li')); // gets the Categrories Cards using findElements as this is a list.
    }

    getRadioOneLiveCard() {
        return this.driver.findElement(By.css('section#listen_live div ul li a[data-bbc-container="listen_live"]')); // gets Radio One card //
    }


    //>>ACTIONS<<
    goToViewAllStations() {
        this.getViewAllStations().click(); // adds click action on View All Stations Link
    }

    goToViewAllCategories() {
        this.getViewAllCategories().click(); // adds click action on View All Categories Link
    }

    goToRadioOne() {
        this.getRadioOneLiveCard().click(); // adds click action on Radio One Live Card
    }
}

module.exports = HomePage; // exports HomePage Class