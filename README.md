# testpsomPW - Playwright Test Automation Project

Playwright testing project with automated test suite.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

- Run all tests: `npm test`
- Run tests in headed mode: `npm run test:headed`
- Run tests with UI: `npm run test:ui`
- Record new tests: `npm run record`
- Show test report: `npm run show-report`

## CI/CD

This project includes GitHub Actions workflow for automated testing on push and pull requests.

## Project Structure

- `e2e/` - End-to-end test files
- `tests/` - Additional test files
- `playwright.config.ts` - Playwright configuration
- `.github/workflows/playwright.yml` - CI/CD configuration
