# Dedalion

Dedalion is a pixel life world where exploration, memory, knowledge, relationships, and creation leave visible traces in a growing shared landscape.

The current repository contains a browser-playable prototype focused on three simple surfaces:

- a world to explore;
- a backpack of life materials;
- a garden that remembers what happened.

Behind that simple surface, the prototype includes generated regions, seed ecology, living weather, knowledge fish, family gardens, cooperative projects, conflict branching, and civilization growth.

## Run Locally

No build step is required.

1. Clone the repository.
2. Open `index.html` in a modern desktop browser.

For local HTTP testing:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Controls

- Move: arrow keys or `WASD`
- Interact: `E`
- Run: hold `Shift`
- Blow a prepared dandelion seed: `P`

The five persistent navigation surfaces are Garden, World, Backpack, Post, and Dandelion.

## Project Structure

```text
index.html                         Main game surface
styles.css                        Pixel UI and responsive layout
app.js                            World simulation and interaction logic
assets/                            Licensed pixel assets and local artwork
Dedalion_Game_Design.md            Product and game design
Dedalion_Open_World_System.md      Spatial world rules
Dedalion_Technical_Architecture.md Technical model and data boundaries
Dedalion_Totem_Language_Guide.md   Visual language
```

## Design Principle

Dedalion accompanies life without replacing it. The product should help players notice, create, care, and reconnect with the real world rather than optimize for endless screen time.

## Collaboration

Start with [CONTRIBUTING.md](CONTRIBUTING.md). Keep new systems inside the existing life loop and prefer spatial interactions over additional top-level menus.

## Asset Attribution

Third-party asset licensing information is stored beside the relevant files, including `assets/ai-town/LICENSE`. New assets must include source and license information before they are merged.
