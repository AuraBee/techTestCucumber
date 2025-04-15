# BBC Sounds - Technical Test showcasing Cucumber + Selenium + JavaScript for testing.

## Project Overview

This repo showcases a technical test project for BBC Sounds website. 
A testing automation framework built with Node.js, Cucumber, Selenium Webdriver.
Test Features and Scenarios are witten in Gherkin syntax to assist readability and collaboration. 
The Page Object Model deisgn pattern promotes code reusability and maintainability
All tests are structured to support integration into framework and CI/CD pipelines for scalable automation.


## Project Structure 

- Feature files written in Gherkin define user behavior and scenarios
- Step definitions map Gherkin steps to test logic
- Page objects encapsulate web element interactions and page behaviors
- Tests are modular, readable, and designed for reuse across test cases

## Getting started

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [ChromeDriver](https://sites.google.com/chromium.org/driver/) (if using Chrome locally)
- [Selenium](https://www.selenium.dev) 
- [Cucumber](https://cucumber.io/) 

### Installation 

**Clone the Repository:**

`git clone https://github.com/AuraBee/techTestCucumber.git`
`cd techTestCucumber`

**Install Dependencies**

` npm install `
`npm install selenium-webdriver`
`npm install -D webd`

## Running Tests: 
**Run the following command:**

`npm test `

*This will initiate the test runner, executing the Cucumber scenarios defined for the BBC Sounds pages.*


### Project Comments and Notes 

- The framework includes initial support structure for scalable test development.
- A maintainable test suite, including support for CI/CD and further scenario coverage.
- File structure for support / world.js and support/hooks.js files are present
- The Music feature file is written in Gherkin and its corresponding Page Object Model (POM). 
- This foundation canthis project into a robust, 


### Vision and next steps
- Complete automation for the Music feature by connecting Gherkin scenarios to stepdef.js including implementing assertions.
- Integrate world.js and hooks.js  into the framework to manage test context more effectively.
- Expand Cucumber functionality including incorporating tags.
- Continue enhancing the test suite to support more pages, data-driven testing, and full CI/CD integration.

#