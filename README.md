# NishaPlaywrightProject

Playwright end-to-end tests for Automation Exercise.

Quick reference

- Project: `package.json`, `playwright.config.js`, `locators/`, `tests/`, `playwright-report/`, `test-results/`
- Prereqs: Node.js (LTS) + npm

Install

```bash
npm ci
npx playwright install --with-deps
```

Run

```bash
npx playwright test        # run all tests
npx playwright test <file> # run a single test, e.g. tests/login.spec.js
npx playwright show-report # view HTML report
```
