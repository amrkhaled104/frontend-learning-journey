# NexCent — Minimal Landing Page (HTML + CSS)

![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3&logoColor=white)
![Figma](https://img.shields.io/badge/Design-Figma-purple?logo=figma&logoColor=white)

A responsive minimal landing page built with plain **HTML** and **CSS** as a self-learning exercise.  
This project reproduces a clean agency/homepage design from a Figma file and implements layout patterns and techniques learned during self-study (Grid, Flexbox, responsive breakpoints, CSS variables, simple components).

- **Figma design:** [Link](https://www.figma.com/design/Z9WlIuxKtTQIxEr7iq4504/Minimal-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design--Community-?node-id=211-1738&t=0AUJdsYQWJHzK5PA-0)  
- **Source code:** [GitHub](https://github.com/amrkhaled104/frontend-learning-journey/tree/main/Self%20learning/Projects(CSS%2BHTML)/NexCent)  
---

## 🧾 Project overview

This repo contains a static landing page that demonstrates:

- Responsive header and hero section (Grid + Flexbox)
- Logo + navigation + CTA layout
- Responsive card grids using `repeat(auto-fit, minmax(...))`
- Clients / logos grid with `object-fit` handling
- "Hero" image/text layout that swaps order on small screens (image above text)
- Stats / achievements cards and testimonial sections
- Modern CSS patterns: CSS variables, minmax(), auto-fit/auto-fill, grid-template-areas, `object-fit`, and simple accessibility considerations

The goal was to reproduce the Figma design as closely as possible while practicing layout and responsive behavior.

---

## 🗂️ Repo structure (important files)
```markdown
NexCent/
├─ css/
│  └─ style.css         # main stylesheet (organized with sections & variables)
├─ images/              # all images used in the page (logos, icons, illustrations)
├─ index.html           # main HTML page
└─ README.md            # this file
```


## 📱 Responsive behavior & notes

* **Desktop:** two-column hero (text 2fr, image 1fr). Header uses grid template areas for stable placement.
* **Tablet:** spacing and font sizes reduced. Header padding adjusted.
* **Mobile:** hero becomes a single-column layout and **image appears above** the text (implemented via grid areas or reordering).
* **Cards & logos:** use `repeat(auto-fit, minmax(...))` so they automatically reflow into rows on smaller screens.

---

## ✅ What I practiced / learned

* CSS Grid fundamentals: `grid-template-columns`, `grid-template-areas`, `minmax()`, `auto-fit/auto-fill`.
* Flexbox for simple horizontal/vertical alignment and polite wrapping.
* Responsive design using media queries and `min-height` vs `height`.
* Handling images: `object-fit: contain/cover`, max-width, responsive image sizing.
* Creating repeating components (cards, logos) and keeping consistent spacing with CSS variables.
* Small UI polish: hover effects, box-shadow, and accessible CTA styles.

---

## 📸 Design reference

* Figma: [Minimal Landing Page Design](https://www.figma.com/design/Z9WlIuxKtTQIxEr7iq4504/Minimal-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design--Community-?node-id=211-1738&t=0AUJdsYQWJHzK5PA-0)
---

## 🧑‍💻 Contributing / Notes

This is a personal learning project.
If you want to suggest improvements or fixes, feel free to open an issue or a pull request on the repo. For quick fixes, add a branch, implement the change, and open a PR.

---
