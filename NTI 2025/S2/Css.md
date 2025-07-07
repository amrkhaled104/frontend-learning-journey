 2025-02-20 19:43


tags :[[Front end]]

# Crash Course Css
## 🟢 Intro to CSS Linking

The first thing to know is that CSS code usually lives in a separate file that you link to your HTML file.

### 🔗 How to Link CSS to HTML

```html
<!-- External CSS file -->
<link rel="stylesheet" href="test.css" />
```

* You can also use **internal CSS** by writing styles inside the `<style>` tag inside `<head>`.
* Or use **inline CSS** by adding a `style` attribute to each tag.

📝 **Priority order (highest to lowest):**

1. Inline CSS
2. Internal CSS
3. External CSS

---

## 🎯 How to Select Elements for Styling

### 📌 Using `class`

* A class is like a label you give to HTML elements so you can style them.

```html
<p class="p1">This is a paragraph</p>
```

```css
.p1 {
  /* Your styles */
}
```

✅ You can reuse a class on multiple tags.

### 📌 Using `id`

```html
<p id="unique">Special paragraph</p>
```

```css
#unique {
  /* Your styles */
}
```

🚫 `id` must be unique (only one element should use the same id).

---

## 🎨 Color System in CSS

You can define colors in different ways:

```css
p {
  color: red;               /* By name */
  color: #f65424;           /* Hex code */
  color: rgb(1, 22, 250);   /* RGB */
  color: rgba(1, 22, 22, .5); /* RGBA with transparency */
}
```

---

## 📐 Text Alignment

```css
p {
  text-align: left;     /* Default */
  text-align: center;
  text-align: right;
  text-align: justify;  /* Align both sides */
}
```

---

## 🔠 Text Transformation

```css
p {
  text-transform: lowercase;   /* all lowercase */
  text-transform: uppercase;   /* ALL UPPERCASE */
  text-transform: capitalize;  /* Capitalize Each Word */
}
```

---

## 📏 Text Spacing

```css
p {
  text-indent: 50%;         /* Indent first line of paragraph */
  letter-spacing: 10px;     /* Space between letters */
  line-height: 1.5;         /* Space between lines */
  word-spacing: 20px;       /* Space between words */
}
```

---

## ✨ Font Styling

```css
p {
  font-family: 'Rubik', sans-serif;
  font-size: 2rem;
  font-weight: bold;        /* 100 to 900 */
  font-style: italic;
  color: red;
}
```

---

## ✒️ Text Decoration

```css
p {
  text-decoration: underline dotted red 5px;
  text-decoration-line: underline;          /* overline, underline, line-through */
  text-decoration-style: dotted;            /* solid, dashed, wavy, etc. */
  text-decoration-color: red;
  text-decoration-thickness: 5px;
}
```

---

## 🧱 White Space & Shadow

```css
p {
  white-space: nowrap;        /* Keep all text in one line */
  line-height: 2;             /* Line spacing */
  text-shadow: 5px 5px red;   /* Text shadow */
}
```

---

## 🖼️ Background Styling for Blocks

```css
div {
  height: 500px;
  width: 50%;
  background-color: red;              /* Can be a solid color */
  background-image: url(a.jpg);       /* Background image */
  background-size: 100% 100%;         /* Can also use: contain, cover */
  background-repeat: no-repeat;       /* Prevent image from repeating */
  background-attachment: fixed;       /* Options: fixed, scroll */
  background-position: 0 50%;         /* Positions: top left, center center, bottom right */
}
```

---

## 🔲 Border & Outline Styling

```css
div {
  height: 400px;
  width: 400px;
  border: rgb(131, 77, 77) solid 3px;           /* border: color style thickness */
  border-left: rgb(131, 77, 77) solid 3px;      /* Left border only */
  outline: red solid 3px;                      /* Outline is outside border */
  outline-offset: 10px;                        /* Space between border and outline */
}
```

---

## 📦 Padding & Margin

* **Padding**: space inside the element, between the content and the border.

```css
div {
  padding: 5px 1px 3px 10px; /* top right bottom left */
}
```


