# Schedule Maker

A static, browser-based schedule creator for streamers, creators and online communities.

Create a weekly schedule, choose activities, set times, switch visual themes and export a 1920×1080 PNG ready for Discord, social media or community posts.

## Features

- activity dropdown for every day
- automatic activity name and cover pairing
- editable stream times
- enable or disable any day
- custom profile image or avatar
- multiple light, colorful and dark themes
- playful, minimal and tech-style decorations
- browser local storage
- PNG export at 1920×1080
- static hosting with no build step
- GitHub Pages compatible

## Themes

Included palettes:

- Lilac Cloud
- Rose Milk
- Mint Candy
- Midnight Steel
- Ocean Blue
- Carbon Ember

## Decorations

Included visual moods:

- Dreamy Bubbles
- Cute Stickers
- Soft Minimal
- Tech Grid
- Sharp Lines
- Neon Orbit

## Activity catalog

The activity dropdown is generated from `covers/list.js`.

Each item connects a visible name with a cover image:

```js
window.SCHEDULE_GAMES = [
  { name: 'League of Legends', cover: 'league-of-legends.png' },
  { name: 'Valorant', cover: 'valorant.jpg' },
  { name: 'Just Chatting', cover: '' }
];
```

Place the image files inside `covers/`.

```text
covers/
├─ league-of-legends.png
├─ valorant.jpg
├─ stardew-valley.jpg
├─ ori-and-the-blind-forest.jpg
└─ list.js
```

Add a new object to `window.SCHEDULE_GAMES` to make a new activity appear in the editor.

## Run locally

Open `index.html` in a modern browser.

## GitHub Pages

Go to:

`Settings → Pages → Deploy from a branch`

Select the default branch and `/root`.

No build step is required.
