const { By, wait, until } = require("selenium-webdriver");

class MusicPage {
    constructor(driver) {
        this.driver = driver;
    }
    // selectors

    //  driver.findElement(By.css('#listen_live')).isDisplayed();

    getMusicHeader() {
        return this.driver.findElement(By.css('main#main h1.sw-text-primary'));
    }

    getMusicRail(){
        return this.driver.findElement(By.css('section#music_page_curations ul.sw-px-2 li')); // returns Music Rail
    }


    getNewsAndTrendingHeader() {
        return this.driver.findElement(By.css('section#music_page_featured_rail header h2')); // returns News & Trending Header
    }

    getMusicMixesHeader(){
        return this.driver.findElement(By.css('section#music_page_featured_rail header h2')); // returns News & Trending header
    }
 
    getMusicMixesViewAll(){
        return this.driver.findElement(By.css('section#music_page_music_mixes header a span')); // returns mixes View All link
    }

    getMusicCategoriesRail() {
        return this.driver.findElement(By.css('section#music_page_music_mixes')); // returns Music Mixes rail
    }

    getMatchYourMood(){
        return this.driver.findElement(By.css('section#mood_categories header h2')); // returns MatchYourMood header
    }
    getCardsInCategriesRail() {
        return this.driver.findElements(By.css('section#categories ul.sw-grid li'));
    }

    getRadioOneLiveCard() {
        return this.driver.findElement(By.xpath('//*[@id="listen_live"]/div[2]/div[2]/ul/li[1]/a'));
    }



    //ACTIONS
    goToViewAllStations() {
        this.getViewAllStations().click();
    }

    goToViewAllCategories() {
        this.getViewAllCategories().click();
    }

    goToRadioOne() {
        this.getRadioOneLiveCard().click();
    }
}

module.exports = MusicPage;