# BBC Sounds - Technical Test showcasing Cucumber + Selenium + JavaScript for testing.

**Project Overview**
This repo showcases a technical test project for BBC Sounds website.
This testing automation framework is built with Node.js, Cucumber, Selenium Webdriver.
Test Features and scenarios in Gherkin syntax for readability and collaboration.
Page Object Model implemented to promote code reusability and maintainability
Tests are structured to support integration into framework and CI/CD pipelines for scalable automation.


**Project Structure**

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

**1 Clone the Repository:**

`git clone https://github.com/AuraBee/techTestCucumber.git
cd techTestCucumber
`

## Running Tests: 
**Run the following command:**
`npm test `

*This will initiate the test runner, executing the Cucumber scenarios defined for the BBC Sounds pages.*


### Project Comments and Notes 

- The framework includes initial support structure for scalable test development.
- A Maintainable test suite, including support for CI/CD and further scenario coverage.
- File strcuture for support / world.js and support/hooks.js files are present
- The Music feature file is written in Gherkin and its corresponding Page Object Model (POM). 
- This foundation canthis project into a robust, 


### Vision and next steps
- Complete automation for the Music feature by connecting Gherkin scenarios to stepdef.js including implementing assertions.
- Integrate world.js and hooks.js  into the framework to manage test context more effectively.
- Expand Cucumber functionality including incorporating tags.
- Continue enhancing the test suite to support more pages, data-driven testing, and full CI/CD integration.

#