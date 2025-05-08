# Plant Learning Game  
### MIS 310 Final Project — UNCW

<p align="center">
  <img src="https://i.pinimg.com/originals/ca/7d/57/ca7d5760efa1edd4308ad0ec5fbe1fdc.gif" width="1000" height ="400">
</p>

## Project Overview

The **Plant Learning Game** is an interactive, educational website designed and developed as the final deliverable for **Management Information Systems (MIS 310)** class at the University of North Carolina Wilmington. 

This project combines the technical requirements of web development with the creative challenge of instructional design. The site offers a playful and informative experience to help users explore three major groups of plants: **Angiosperms**, **Gymnosperms**, and **Pteridophytes**.

Users navigate through vibrant plant-themed pages, flip animated cards, engage with mini-quizzes, and discover hidden Easter eggs—all built using HTML, CSS, JavaScript, and jQuery. The interface integrates responsive layouts, visual accessibility, and user interactivity to reflect the full range of skills learned in the course.

---

## Features & Technologies

### HTML5 and Semantic Structure
- The project uses clear, semantic HTML5 elements (`<main>`, `<section>`, `<header>`, `<footer>`) for logical content flow and accessibility.
- Each plant type is presented in its own dedicated page, encouraging modular design and readability.

### Multimedia & Modals
- Pages feature rich images of plants with associated **flip-card modals** that display detailed botanical information when clicked.
- Modals are screen-reader accessible and closeable via mouse or keyboard.

### CSS Grid, Flexbox, & Variables
- Layouts are designed using **CSS Flexbox** for alignment and **CSS Grid** for structured sections.
- A theming system using **CSS Variables** (`--primary-color`, `--font-family-header`, etc.) ensures consistency and reusability across stylesheets.

### CSS Animations & Pseudo-selectors
- Flip-card interactions are animated with smooth transitions.
- UI feedback is implemented using `:hover`, `:focus`, and `:checked` states for buttons, inputs, and form elements.
- The Pteridophyte quiz features a moving submit button that dodges the cursor—a fun challenge using CSS `position` and jQuery logic.

### Responsive Design
- Media queries (`@media`) tailor the experience to various screen sizes, maintaining functionality and legibility across desktops, tablets, and mobile devices.

### HTML Forms & Validation
- Interactive quizzes and feedback forms utilize multiple input types: radio buttons, checkboxes, text fields, drop-downs, and text areas.
- Forms use **built-in validation attributes** like `required`, `minlength`, and placeholder guidance to enhance user experience and input accuracy.

### jQuery Interactivity
- jQuery powers modal controls, quiz feedback, keyboard shortcuts, tooltip overlays, and animated Easter eggs.
- The Fern (Pteridophyte) page hides a surprise: type a secret word to unlock a **glitchy terminal animation** and pixel-art mushroom!

### Typography & Styling
- Custom fonts from Google Fonts enhance readability and aesthetic: 
  - `Silkscreen` adds a retro pixel-art flair to headings.
  - `Play` is used for body text and explanations.


![HTML5](https://img.shields.io/badge/HTML5-ff5722?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-2196f3?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ffeb3b?style=flat&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)

---

## File Structure

- `Index.html` – Terminal-style intro screen with animated boot messages and a hidden redirection trigger.
- `LearnAboutPlants.html` – Main menu for navigating to different plant categories.
- `Angiosperms.html` – Interactive section covering flowering plants.
- `Gymnosperms.html` – Page featuring non-flowering cone-bearing plants.
- `Pteridophytes.html` – A quiz-heavy page about ferns, featuring the runaway button.
- `Plants.css` – Global stylesheet containing Flexbox/Grid layouts, animations, color variables, responsive rules, and accessibility improvements.
- JavaScript:
  - `Angiosperms.js`, `Gymnosperms.js`, `Pteridophytes.js`, `script.js` – Handle modal logic, form validation, Easter eggs, and dynamic content updates.

---

## Accessibility Considerations

- All modals and buttons include `aria` roles and keyboard support.
- Elements like flip-cards and forms are reachable via `tabindex`.
- Proper contrast and readable fonts ensure usability for low-vision users.
- Modals are dismissible by pressing `Escape`, and focus states are styled for clarity.

---

## How to Use

1. Visit the `Index.html` page hosted on your UNCW web space.
2. Type `L` (case-insensitive) and press **Enter** to boot the system.
3. Select a plant group: **Angiosperms**, **Gymnosperms**, or **Pteridophytes**.
4. Click on plant cards to explore facts, then take quizzes to test your knowledge.
5. On the Fern page, try to **catch the dodging Submit button**—after 5 tries, you’ll unlock a mushroom surprise!
6. Type the word `mushroom` after catching the button to trigger an animated terminal sequence.

---

## Project Goals

This final project was designed to:

- Demonstrate mastery of front-end web development techniques
- Promote educational engagement through visual storytelling
- Integrate accessibility and responsive design best practices
- Showcase creativity in coding and interface design
- Combine animation, interactivity, and modular design in a unified user experience

---

_Thanks for playing and learning!_ 
_Built with sunshine, semicolons, and soil._
