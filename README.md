# Wonderadroit — Quality you can verify

A premium editorial portfolio in an ivory-and-cobalt visual system, built as a static GitHub Pages site. It presents QA services, an interactive browser-local case study, a transparent testing approach, and the CYDRA Web2 project.

## Portfolio features

- Responsive portfolio landing page focused on QA gigs, hiring opportunities, and CYDRA.
- Interactive fictional storefront with product search, category filtering, cart interactions, and reset.
- Guided mission to reproduce a deliberately seeded price mismatch (Travel Mug listing: $18; cart line item: $21).
- Observation form and expected-versus-actual reference check.
- Downloadable Markdown QA report and copy-to-clipboard action.
- Accessibility basics including visible keyboard focus, semantic controls, live status messages, and reduced-motion support.

## Transparency and limitations

- The storefront defect is synthetic and intentionally injected for demonstration.
- The report labels the scenario as synthetic; it is not a real client finding or a security vulnerability.
- The demo is browser-local: it does not process purchases, collect credentials, or test external targets.
- No fabricated client logos, testimonials, or production results are presented.
- This repository is a static site and requires no package installation or build step.

## Publish with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`, then save.
4. Wait for the GitHub Pages deployment to complete.

Expected site URL: https://Wonderadroit.github.io/

A commit to `main` does not by itself prove that Pages is enabled or deployed. Confirm deployment in **Actions** or **Settings → Pages** and then open the published URL.

## CYDRA Web2

Project repository: https://github.com/Wonderadroit/Cydra_web2

CYDRA is presented as a work in progress exploring evidence-led web testing. A passing workflow is not the same as a confirmed finding; real target results must be supported by reproducible evidence.
