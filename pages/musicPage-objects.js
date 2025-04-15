const { By, wait, until } = require("selenium-webdriver");

class MusicPage {
    constructor(driver) {
        this.driver = driver;
    }

    getPlayIconOnHover(){
        return this.driver.findElement(By.css('section#music_page_curations div a[data-testid="playIconRoundel')); // returns Play Icon from cards
    }

    getMusicRailHeader() {
        return this.driver.findElement(By.css('main#main h1[data-testid="page-title]')); // returns the header from Music Rail
    }

    getMusicRail(){
        return this.driver.findElement(By.css('section#music_page_curations')); // returns Music Rail
    }


    getNewsAndTrendingHeader() {
        return this.driver.findElement(By.css('section#music_page_featured_rail header h2')); // returns News & Trending Header
    }

    getMusicMixesHeader(){
        return this.driver.findElement(By.css('section#music_page_featured_rail header h2')); // returns News & Trending header
    }
 
    getMusicMixesViewAll(){
        return this.driver.findElement(By.css('section#music_page_music_mixes header a span')); // returns Mixes 'View All link'
    }

    getMusicCategoriesRail() {
        return this.driver.findElement(By.css('section#music_page_music_mixes')); // returns Music Mixes rail
    }

    getMatchYourMood(){
        return this.driver.findElement(By.css('section#mood_categories header h2')); // returns MatchYourMood header
    }
 

    //ACTIONS
    goToMusicMixes() {
        this.getMusicMixesViewAll().click(); // adds click action 
    }

    getPlayIcon(){
        this.getMusicMixesViewAll().click(); // adds click action
    }

}

module.exports = MusicPage;