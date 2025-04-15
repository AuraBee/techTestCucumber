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

# Getting started

**Prerequisites**
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [ChromeDriver](https://sites.google.com/chromium.org/driver/) (if using Chrome locally)
- [Selenium](https://www.selenium.dev) 
- [Cucumber](https://cucumber.io/) 

## Installation 

 *1 Clone the Repository:*

git clone https://github.com/AuraBee/techTestCucumber.git
cd techTestCucumber

**Running Tests:**
Run the following command:
npm test 

*This will initiate the test runner, executing the Cucumber scenarios defined for the BBC Sounds pages.*


*Project Comments and Notes*

The framework includes initial support structure for scalable test development.

world.js and hooks.js files are present inside support directory and ready for integration, although not fully wired into the framework yet.

The Music feature file is written and its corresponding Page Object Model (POM) class is in place, ready for automation — however, test steps are not yet automated.

The foundation is laid out for extending this project into a robust, maintainable test suite, including support for CI/CD and further scenario coverage.


*Vision and next steps*
 - Complete automation for the Music feature by connecting Gherkin scenarios to step definitions and implementing assertions.

- Integrate world.js and hooks.js to manage test context more effectively.

- Expand Cucumber functionality including incorporating tags.

- Continue enhancing the test suite to support more pages, data-driven testing, and full CI/CD integration.
