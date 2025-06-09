# QA Practice Website - Cypress E2E Testing

This repository contains end-to-end (E2E) tests for the QA Practice Website using [Cypress](https://www.cypress.io/). The tests cover various functionalities of the website, including forms, button actions, tables, and browser interactions.

## Project Structure
cypress/ ├── e2e/ │ ├── btn_actions/ │ │ ├── cypress/e2e/btn_actions/double_click_btn.cy.js │ │ ├── cypress/e2e/btn_actions/mouse_hover.cy.js │ │ ├── cypress/e2e/btn_actions/scroll.cy.js │ │ ├── cypress/e2e/btn_actions/show_hide_element.cy.js │ ├── forms/ │ │ ├── ../../../../../C:/Users/Jaime/Desktop/qaPracticeWebsite/cypress/e2e/forms/login.cy.js │ │ ├── cypress/e2e/forms/recoverPassword.cy.js │ │ ├── cypress/e2e/forms/register.cy.js │ ├── new_tab_window/ │ │ ├── new_browser_tab.cy.js │ │ ├── cypress/e2e/new_tab_window/new_browser_window.cy.js │ ├── tables/ │ │ ├── cypress/e2e/tables/dynamic_table.cy.js │ │ ├── cypress/e2e/tables/static_table.cy.js ├── fixtures/ │ ├── cypress/fixtures/example.json ├── support/ │ ├── ../../../../../C:/Users/Jaime/Desktop/qaPracticeWebsite/cypress/support/commands.js │ ├── cypress/support/e2e.js │ ├── utils/ │ │ ├── cypress/support/utils/randomData.js ├── cypress.config.js ├── cypress.env.json ├── package.json

npx cypress open### Key Files and Directories

- **`cypress/e2e/`**: Contains test files organized by functionality.
- **`cypress/fixtures/`**: Includes mock data for testing.
- **`cypress/support/commands.js`**: Custom Cypress commands for reusable actions.
- **`cypress/support/utils/randomData.js`**: Utility functions for generating random data.
- **`cypress.config.js`**: Cypress configuration file.
- **`cypress.env.json`**: Environment variables for sensitive data like admin credentials.

## Features Tested

### Button Actions
- **Double Click Button**: Validates double-click functionality.
- **Mouse Hover**: Ensures hidden elements are displayed on hover.
- **Scroll**: Tests scrolling behavior.
- **Show/Hide Element**: Toggles visibility of elements.

### Forms
- **Login**: Tests login functionality using environment variables for credentials.
- **Register**: Validates form submission with random data generation.
- **Recover Password**: Ensures password recovery flow works correctly.

### Tables
- **Static Table**: Validates table headers and static content.
- **Dynamic Table**: Tests dynamic table structure and content types.

### Browser Interactions
- **New Browser Tab**: Validates switching to a new tab.
- **New Browser Window**: Tests opening a new browser window.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/qa-practice-website.git

2. Install dependencies:
  ```bash
  npm install


Running Tests
Locally
Run Cypress tests locally using the following command:
  ```bash
  npx cypress open


CI/CD
The project includes a GitHub Actions workflow (.github/workflows/ci.yml) to run tests automatically on the master branch.

Reporting
The project uses the Cypress Mochawesome Reporter for generating detailed HTML reports. Reports are saved in the cypress/reports directory.

Configuration
Base URL: Set in cypress.config.js (https://qa-practice.netlify.app/).

Environment Variables: Stored in cypress.env.json for sensitive data.
License
This project is licensed under the MIT License.


