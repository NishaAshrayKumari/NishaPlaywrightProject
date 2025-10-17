# NishaPlaywrightProject

Project of Playwright end-to-end tests for Automation Exercise.

## Project structure
- [package.json](package.json)
- [playwright.config.js](playwright.config.js)

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

Notes

- No `tests-examples` file/folder found in this repo.
- Add `.env` if your tests need env vars (see `playwright.config.js`).

Last updated: 2025-10-17

## Notes & cleanup

- I searched the workspace and did not find any `tests-examples` file or folder. You can safely delete a `tests-examples` artifact if it exists outside this repo or in another branch.
- Test results are written under `test-results/`; the file `.last-run.json` records the last run summary.

If you'd like, I can:

- add helpful npm scripts to `package.json` (test, test:headed, report),
- create a sample `.env.example` file, or
- run the tests here and attach the results.

---

Last updated: 2025-10-17