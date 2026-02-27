# Araibia Website — Dev Sandbox

This repository contains the source code for the **Araibia** website , extracted from the sandbox environment (`araibia.com/dev-1`).

## How the Code Was Retrieved

The site is hosted on a remote web server. The code was extracted via **FTPS (FTP over TLS)**, All files were recursively downloaded from the server root to produce this copy.

## Project Structure

```
araibia-code/
├── index.html              # Main landing page
├── pricing.html            # Pricing page
├── robots.txt              # SEO crawler rules
├── assets/                 # Images, logos, and media
│   ├── logo.png
│   ├── logo-light.png
│   ├── bg.jpg
│   ├── agent.mp4
│   └── ...                 # Product and section images
├── css/
│   ├── default.css         # Main custom stylesheet
│   ├── styles.min.css      # Compiled utility styles
│   ├── splide.min.css      # Splide slider styles
│   └── splide-core.min.css
├── js/
│   ├── script.js           # Custom scripts
│   └── splide.min.js       # Splide slider library
└── font-families/
    ├── inter/              # Inter font (all weights)
    └── manrope/            # Manrope font (all weights)
```

## Tech Stack

- **Pure HTML/CSS/JS** — no framework or build tool required
- **Splide.js** — used for sliders/carousels
- **Fonts** — Inter & Manrope (self-hosted)


## Current Development Focus

- [ ] Hero section update with types of avatars
- [ ] AI agent build-out feature?


---

## License

All rights reserved © 2026 Araibia. This source code is proprietary and may not be copied, modified, or distributed without prior written permission from Araibia.