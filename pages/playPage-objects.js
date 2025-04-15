const { By, until, wait } = require('selenium-webdriver'); // imports from selenium

class PlayPage {
  constructor(driver) { // constructs the page with driver as a parameter
    this.driver = driver; // creates out driver instance for this page
  }
  // selectors

  getplayHero(){
    return this.driver.wait(until.elementLocated(By.css('div.play-c-herospace-container h1')), 16000); // gets the title
   }

  getClickPlayButton() {
    return this.driver.wait(until.elementLocated(By.id('p_audioui_playpause'))); // returns the Play Button -- tip by id / by css / by xpath
  }


  //ACTIONS///
  clickPlayButton() {
    this.getClickPlayButton().click(); // sets a click action on Play Button
  }

}

module.exports = PlayPage; // exports the PlayPage Class

