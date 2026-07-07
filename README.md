# NJ Weekly Schedule

Static web tool for creating and exporting NJ's weekly stream schedule.

## Features

- edit activity and time for every day
- enable or disable individual days
- add a profile image
- choose game covers from a dropdown
- export a 1920×1080 PNG
- save the current setup in the browser
- works locally and on GitHub Pages

## Covers

Put the image files inside `covers/` and list them in `covers/list.js`.

Examples:

```text
covers/
├─ league-of-legends.png
├─ valorant.jpg
├─ stardew-valley.jpg
├─ ori-and-the-blind-forest.jpg
└─ list.js
```

Every filename added in `covers/list.js` will appear in the dropdown inside the editor.

Supported formats: PNG, JPG, JPEG and WEBP.

## Run locally

Open `index.html` in a browser.

## GitHub Pages

Publish the repository from the main branch and root directory in:

`Settings → Pages → Deploy from a branch`

The project is static and does not need a build step.
