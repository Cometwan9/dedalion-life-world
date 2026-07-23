# Contributing to Dedalion

## Before You Build

Every proposal should answer three questions:

1. Where does the player encounter it in the world?
2. Which part of the life loop does it support?
3. How does it return value to real life, another player, or the shared ecology?

Avoid adding a top-level menu when the interaction can live in a garden, building, resident, object, or landscape.

## Workflow

1. Create a focused branch from `main`.
2. Keep changes scoped to one playable behavior or one documented system.
3. Preserve provenance for memories, creations, knowledge, and third-party assets.
4. Open a pull request that explains the player-facing behavior and validation performed.

## Local Checks

Run the JavaScript syntax check before opening a pull request:

```bash
node --check app.js
```

Open the game at desktop and mobile widths and verify:

- the world canvas is visible;
- the player can move and interact;
- panels can be closed;
- the five top-level navigation buttons remain intact;
- text and controls do not overlap;
- existing save data still loads.

## Data and Safety

- Silence is never consent.
- Private letters, family memories, health data, and precise locations must not become public world evidence.
- AI may summarize authorized evidence but may not confirm relationships, rank people, diagnose health, or decide community rules.
- Leaving a relationship or project must not delete prior authorship or trigger a penalty.

## Art and Assets

Use pixel assets with a documented license. Add attribution next to imported asset groups. Do not commit generated assets without recording their source and intended use.
