# Wonderadroit — Wonder Olabisi

A static, responsive portfolio for Wonder Olabisi (Wonderadroit), presenting practical work across security engineering, cybersecurity, data quality, migration technology and software quality.

## Portfolio focus

- Security engineering and evidence-led application / smart-contract security research.
- Data quality, provenance, auditability and digital systems.
- Browser QA, exploratory testing and Playwright regression automation.
- Project Frontier: independent applied research using synthetic and public aggregate data.
- CYDRA Web2: experimental Web2 security research engine.
- Interactive browser-local QA case study with a deliberately seeded pricing inconsistency.

## Interactive QA demonstration

The fictional Northstar Supply storefront supports product search, category filtering, cart interactions, reset, guided observation and a downloadable Markdown report. The Travel Mug listing deliberately shows $18 while its cart line item shows $21.

**Important:** this is a controlled synthetic training example, not a real client finding, production defect or vulnerability. It does not process purchases, collect credentials or test external targets.

## Project Frontier status and boundaries

Project Frontier is an independent portfolio and learning initiative. It is not an official Nigeria Immigration Service, government or institutional project, and it has no claimed government endorsement. Current demonstrations use synthetic and public aggregate data only. They do not use real traveller records, passports, NINs, biometrics, personnel records or operational government systems.

## Browser regression checks

The GitHub Actions workflow `.github/workflows/portfolio-browser-qa.yml` runs Playwright checks on pushes and pull requests to `main`, and can be started manually. Chromium tests cover:

- Main content, project positioning and metadata.
- Product search and category filtering.
- Reproduction of the seeded price mismatch.
- Observation and reference-result flow.
- Downloaded report contents and synthetic disclosure.
- Reset behavior and narrow mobile layout.
- Mobile navigation, skip link and Project Frontier disclosure.

A passing workflow verifies only the tested behavior at the tested commit. It does not establish the security or quality of unrelated systems.

## Technology

- Static HTML, CSS and JavaScript.
- Playwright browser tests.
- GitHub Actions.
- Python's built-in HTTP server for local test serving.

No frontend build step is required.

## Publish with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`, then save.
4. Confirm the Pages deployment in **Actions** or **Settings → Pages**, then open the published URL.

Expected URL: https://wonderadroit.github.io/

A source commit or passing test run does not, by itself, prove that the published site has deployed successfully.

## Featured repositories

- CYDRA Web2: https://github.com/Wonderadroit/Cydra_web2
- Project Frontier: https://github.com/Wonderadroit/Wonderadroit/tree/main/PROJECT_FRONTIER
- Profile: https://github.com/Wonderadroit

## Working principle

**LLMs propose. Tools test. Evidence decides.**
