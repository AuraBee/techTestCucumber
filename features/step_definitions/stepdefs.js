
const assert = require('assert'); // importing assert libary modules.
const { Given, When, Then, After, Before} = require('@cucumber/cucumber'); // importing cucumber and modules.
const { Builder, By, Capabilities, Key, wait, until  } = require('selenium-webdriver'); //importing selenium webdriver and modules

// //Imports of the Page Objects
const HomePage = require('../../pages/homepage-objects');
const StationsPage = require('../../pages/allStations-objects');
const PlayPage = require('../../pages/playPage-objects');
const CategoriesPage = require('../../pages/categoriesPage-objects');
const Modal = require('../../pages/modal-objects');
const Cookies = require('../../pages/cookies-objects');
// const Music = require('../../pages/musicPage-objects');

//Setting variables for the driver and page Objects
let driver;  //
let homepage;
let categories;
let stations;
let playpage;
let modal;
let cookies;
// let music;

const capabilities = Capabilities.chrome(); // Creating and instance of capabilities for Chrome  
capabilities.set('chromeOptions', { "w3c": false });  // setting capabilities & ensuring driver adhere to W3C standards protocols.

let { setDefaultTimeout } = require('@cucumber/cucumber');
const CookiesPopUp = require('../../pages/cookies-objects');
setDefaultTimeout(60 * 1000);  //setting default timeout on cucumber steps


Before(async function() {  // adding before to run set up
    driver = new Builder().withCapabilities(capabilities).build();  // creates and instansace of our drover with cap[aaibiltie sand build
    //Instances of the page objct model with driver capabiliities
   /// could add to before 
    homepage = new HomePage(driver);
    stations = new StationsPage(driver);
    categories = new CategoriesPage(driver);
    playpage = new PlayPage(driver);
    modal = new Modal(driver);
    cookies = new CookiesPopUp(driver);

    await driver.manage().setTimeouts({ implicit: 15000 });
    await driver.manage().window().maximize(); 
})

Given('I am on the "BBC Sounds Homepage"', async function () {
    await driver.get('https://www.bbc.co.uk/sounds'); // getting the url
    await cookies.goToRejectCookies(); // initiaties the click on reject cookies
});

//>>> SCENARIO ONE <<<<
Then('I should see cards displayed in the "Listen Live" rail', async function () {
    assert(await homepage.getListenLiveRail().isDisplayed()); // asserts that the Listen Live Rail is dislayed
    assert.equal(await homepage.getListenLiveRailTitle().getText(), "Listen Live"); // asserts that the rail title as Listen Live
})

When('I click the "View all Stations & Schedules" link within the "Listen Live" rail', async function () {
    await homepage.goToViewAllStations();  // navigating to View ALl Stations 
})

Then('I should be redirected to the "ALL_STATIONS" page', async function () {
    assert.ok(await stations.getStationsRail().isDisplayed()); // asserts that the Stations Rail is displayed
    assert.equal(await driver.getCurrentUrl(), "https://www.bbc.co.uk/sounds/stations"); /// asserts that the correct url for this page is present
});

//>>> SCENARIO 2 <<<<
Then('I should see a rail titled "Categories"', async function () {
    assert(await homepage.getViewAllCategories().isDisplayed()); // asserts that the Categories Rail is displayed
    assert.equal(await homepage.getViewAllCategories().getText(), "View all Categories"); // asserts the text displays as "View all Categories"
});

Then('the rail should display twelve category links', async function () {
    const links = await homepage.getLinksInCategoriesRail(); // creating a variable 'links' - to hold the Cards in Categories Rail
    assert.equal(await links.length, 12);  // asserting that the number of cards in Categories equals 12
});

When('I click the "View all Categories" link on the "Categories" rail', async function () {
    await homepage.goToViewAllCategories(); // View All Categories 
});

Then('I should be redirected to the "ALL_CATEGORIES" page', async function () {
    assert.equal(await categories.getBrowseAllMusicHeader().getText(), "Browse all Music"); // asserts that the Music Rail title text is "Browse all Music"
    assert.equal(await driver.getCurrentUrl(), "https://www.bbc.co.uk/sounds/categories"); //
});

//>> SCENARIO 3 <<
Then('I should see the "Listen Live" rail', async function () {
    assert.ok(await homepage.getListenLiveRail().isDisplayed());
    assert.equal(await homepage.getListenLiveRailTitle().getText(), "Listen Live");
});

When('I click on "Radio 1" card', async function () {
    await homepage.goToRadioOne();
    console.log('clicking Radio One Card');
});

Then('I should be redirected to the "Play" page', async function () {
    assert.equal(await playpage.getplayHero().getText(), "Radio 1 - Listen Live - BBC Sounds"); 
    assert.ok(await driver.getCurrentUrl(), "https://www.bbc.co.uk/sounds/play/live/bbc_radio_one");
});

When('I click the "Play" button', async function () {
    await playpage.clickPlayButton();
    console.log('clicking Play btn');
});

Then('I should see a prompt to "Sign In" or "Register"', async function () {
    assert.ok(await modal.getModal().isDisplayed());
    assert.equal(await modal.getModalHeader().getText(), "Sign in to listen"); 
    assert.ok(await modal.getSignUp().isEnabled());
    assert.ok(await modal.getRegisterLink().isEnabled());
    console.log(`modal "Sign In" or "Register"`);
});

///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 
// Given('I am on the "BBC Sounds Music Homepage"', async function () {

//     await driver.get('https://www.bbc.co.uk/sounds/music');
//     cookies.clickRejectCookies();
//   });

//   Then('I should see a rail titled "Music"', async function () {
//     assert(await music.getMusicRail().isDisplayed());
//     assert(await music.getMusicHeader()).getText(), 'Music';
//     console.log('y');
// })
  


// //   Then('the rail should display eight music cards', function (string) {
 
// //   });

//   Then('each card should have an image or cover.', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   When('I hover over a music card', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });


//   Then('a subtitle play icon should should appear', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });


After(async function () {
    if (driver) {
        await driver.quit();
    }
})
