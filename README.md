# NJ Weekly Schedule

Static web tool for creating and exporting NJ's weekly stream schedule.

## Features

- choose the game or activity for every day from a dropdown
- automatically link the selected activity name and cover
- edit the stream time for every day
- enable or disable individual days
- add a profile image
- export a 1920×1080 PNG
- save the current setup in the browser
- works locally and on GitHub Pages

## Activity catalog

The activity dropdown is generated from `covers/list.js`.

Each entry links a visible activity name to its cover:

```js
window.NJ_GAMES = [
  { name: 'League of Legends', cover: 'league-of-legends.png' },
  { name: 'Valorant', cover: 'valorant.jpg' },
  { name: 'Just Chatting', cover: '' }
];
```

Put cover image files inside `covers/`.

Examples:

```text
covers/
├─ league-of-legends.png
├─ valorant.jpg
├─ stardew-valley.jpg
├─ ori-and-the-blind-forest.jpg
└─ list.js
```

Adding a new object to `window.NJ_GAMES` makes that activity appear in the editor dropdown. The selected item automatically controls both the displayed name and the cover used in the exported schedule.

Supported image formats: PNG, JPG, JPEG and WEBP.

## Run locally

Open `index.html` in a browser.

## GitHub Pages

Publish the repository from the main branch and root directory in:

`Settings → Pages → Deploy from a branch`

The project is static and does not need a build step.
