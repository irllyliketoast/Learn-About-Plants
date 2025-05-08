# Plant Learning Game
## MIS 310 Final Project

## Project Overview

This interactive educational website was created as the final project for **MIS 310: Management Information Systems** at UNCW. The objective was to develop a responsive, accessible, and engaging webpage that demonstrates a wide range of front-end development skills. 

The result is the **Plant Learning Game**, an animated and modular experience designed to teach users about **Angiosperms**, **Gymnosperms**, and **Pteridophytes** through multimedia, interactivity, and retro-themed design elements.

## Features

- **Semantic HTML Tags**: Structural elements (`<header>`, `<main>`, `<section>`, `<footer>`) used to create an accessible and logically organized DOM.
- **Images & Modal Interactions**: Each plant type features interactive flip-cards with modals revealing detailed content and visuals.
- **CSS Animation**: Flip-card transitions, hover effects, and a terminal-style mushroom Easter egg are powered by CSS animations.
- **CSS Grid & Flexbox**: Layouts are handled via Flexbox (buttons, quizzes) and CSS Grid (fact sections for Gymnosperms).
- **Pseudo-selectors**: Styling interactivity with `:hover`, `:focus`, and `:checked` selectors.
- **Responsive Design**: Media queries (`@media`) adapt the layout for desktop, tablet, and mobile screens.
- **CSS Variables**: Theming and layout colors are centralized using custom properties (e.g., `--primary-color`).
- **HTML Forms & Validation**: Includes multiple input types: radio buttons, checkboxes, dropdowns, textareas, and required fields with pattern or length restrictions.
- **jQuery Interactions**: Modals, tooltips, form feedback, and the mushroom Easter egg use jQuery for smooth interactivity.
- **Typography Styling**: Custom Google Fonts (`Silkscreen` for headers and `Play` for body text) enhance aesthetic and readability.
- **Runaway Button Easter Egg**: On the Pteridophytes page, the quiz submit button dodges the cursor and leads to a glitchy mushroom animation.

## File Structure

- `Index.html`: Terminal-style boot animation with keyboard-triggered page redirection.
- `LearnAboutPlants.html`: Homepage where users choose a plant category.
- `Angiosperms.html`, `Gymnosperms.html`, `Pteridophytes.html`: Interactive learning pages, each with unique styling and quizzes.
- `Plants.css`: Master stylesheet implementing CSS Grid, Flexbox, variables, animations, pseudo-selectors, and responsiveness.
- `*.js`: Each page has a corresponding script handling modals, form validation, quiz logic, or special animations.

## Accessibility Considerations

- All interactive elements are keyboard-navigable using `tabindex` and `role` attributes.
- Modals include `aria-modal="true"` and labeled headers.
- Visual contrast and scalable fonts ensure legibility across devices.
- Focus states are styled for users navigating via keyboard.

## How to Use

1. Load the `Index.html` page hosted on your UNCW web space.
2. Type `L` and press Enter to boot into the Plant Learning Game.
3. Choose a plant category and explore!
4. Interact with cards, read plant facts, and test your knowledge with quizzes.
5. On the Fern (Pteridophyte) page, try catching the runaway button... if you dare 🍄
6. Once you catch the button... type in a magic word for a suprise.

## Purpose

This project serves both as a **final demonstration of HTML/CSS/JS competency** and a **creative learning tool** that blends education and design. It emphasizes:

- User-centered design
- Cross-device compatibility
- Accessibility best practices
- Coding creativity and gamification
