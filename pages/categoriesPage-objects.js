const {By, wait, until} = require("selenium-webdriver"); // imports selenium

class CategoriesPage {
    constructor(driver){ // constructs page with driver as parameter
        this.driver = driver; // creates driver instance for this page
    }


    getBrowseAllMusicHeader(){
        return this.driver.wait(until.elementLocated(By.css('section#music_categories h2')), 20000); // returns Music Rail
       }

}

module.exports = CategoriesPage; //exports CategoriesPage