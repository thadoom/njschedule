# NJ Weekly Schedule

Static web tool for creating and exporting NJ's weekly stream schedule.

## Features

- edit activity and time for every day
- enable or disable individual days
- add a profile image
- use local game covers from `covers/`
- export a 1920×1080 PNG
- save the current setup in the browser
- works locally and on GitHub Pages

## Covers

Put game covers inside `covers/`.

Examples:

```text
covers/
├─ league-of-legends.png
├─ valorant.jpg
├─ stardew-valley.jpg
└─ ori-and-the-blind-forest.jpg
```

You can type a filename in the cover field for each day. When the field is empty, the page also tries to resolve the image from the activity name.

Example:

`League of Legends` → `covers/league-of-legends.png`

Supported formats: PNG, JPG, JPEG and WEBP.

## Run locally

Open `index.html` in a browser.

## GitHub Pages

Publish the repository from the main branch and root directory in:

`Settings → Pages → Deploy from a branch`

The project is static and does not need a build step.
