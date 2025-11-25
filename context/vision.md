# Vision

Exaggerate Everything is an art project, a website, and a place for people to share wisdom. The core idea is simple: whenever someone shows up, the platform should show them exactly what they need to hear.

This project blends Tao Te Ching–style stream-of-consciousness notes, minimalistic design, user-generated wisdom, and a curated experience that feels quiet, spontaneous, and deeply personal.

## What the Platform Is
- A place to write, save, and share wisdom.
- A space for simple, direct thoughts in the spirit of the Tao Te Ching.
- A minimal black-and-white environment that feels calm and intentional.
- A floating field of “pages” that the user can browse in a dreamy, spontaneous way.

## Core Components
1. **Stream-of-consciousness quotes**  
   - You upload short, Tao Te Ching–style notes.  
   - The system formats them cleanly.  
   - Optionally, you can text quotes to an AWS number (restricted to your device).  
   - All quotes are stored in DynamoDB.

2. **A public file system of markdown files**  
   - Straight from Obsidian.  
   - Personal notes you want the world to have.  
   - Includes a folder called “Play this when I die” with curated items (e.g., “End how you start intro” — Westside Gunn).

3. **Music and art integration**  
   - Links to your Exaggerate Everything YouTube channel.  
   - Links to your artist page for official music and remixes.

4. **A Laravel + Inertia + Tailwind web app**  
   - Mobile and desktop friendly.  
   - Clean, restrained design inspired by Kenya Hara.  
   - Light and dark themes.

## How It Should Feel
Split between dreamlike randomness and grounded minimalism:
- Pages float and drift.  
- Users explore.  
- The interface remains silent, clean, plain.  
- Nothing loud. Nothing colorful unless necessary.  

The goal is not “social media.”  
The goal is **beauty, simplicity, and human wisdom**.

## Community Interactions
- Users can post their wisdom (with a character limit equal to the longest Tao Te Ching page).
- Posts can be lightly moderated for slurs or hateful content.
- Everything else stays unrestricted unless dangerous.
- A Dark Souls–style upvote system encourages subtle approval rather than loud metrics.
- Users can “ping” another user (private comment).  
  - The receiver can choose to see or ignore these pings.

## Brush Interaction
Users can draw on their page using:
- A black brush (light mode)
- A white brush (dark mode)

The strokes should be auto-corrected and smoothed so that anyone’s handwriting looks b
