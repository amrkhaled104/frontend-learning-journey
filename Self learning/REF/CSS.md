# Crash Course Css (cascade style sheet)
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
 white-space: nowrap;   /* Text will not wrap to a new line; if it's longer than the container width, it continues on the same line and overflows */
 text-overflow: ellipsis;  /* Works only with overflow:hidden + white-space:nowrap + fixed width. Shows "..." when text is cut, but to see full text you need hover */
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

## 📌 CSS Units

### 🔹 Absolute Unit

* **`px`**: Pixel — وحدة ثابتة لا تتأثر بحجم الشاشة أو حجم الخط.

---

### 🔹 Relative Units

* **`em`**: Relative to the **parent element's font-size**.

  * Example: إذا كان حجم خط الأب `16px` → `1em = 16px`, `2em = 32px`.

* **`rem`**: Relative to the **root element's font-size** (`<html>`).

  * Example: إذا كان حجم خط الـ `<html>` `16px` → `1rem = 16px` بغض النظر عن الأب.

* **`%` (percentage)**: نسبة مئوية تعتمد على القيمة الخاصة بالعنصر الأب.

  * Example: `width: 50%` يعني نصف عرض العنصر الأب.

---

### 🔹 Viewport Units

* **`vw`**: Relative to **1% of viewport width** (عرض الشاشة).

  * Example: `50vw` = نصف عرض الشاشة.

* **`vh`**: Relative to **1% of viewport height** (ارتفاع الشاشة).

  * Example: `100vh` = ارتفاع الشاشة بالكامل.

* **`vmin`**: Relative to **1% of the smaller side** (العرض أو الارتفاع).

  * Example: لو الشاشة 1200px × 800px → `1vmin = 8px`.

* **`vmax`**: Relative to **1% of the larger side** (العرض أو الارتفاع).

  * Example: لو الشاشة 1200px × 800px → `1vmax = 12px`.

---

### 🧠 ملخص سريع

* `px` = ثابت.
* `em` = نسبة لحجم خط الأب.
* `rem` = نسبة لحجم خط الجذر `<html>`.
* `%` = نسبة للأب.
* `vw/vh` = نسبة لعرض/ارتفاع الشاشة.
* `vmin/vmax` = نسبة لأصغر/أكبر بعد في الشاشة.




## 📌 CSS List Styles

### ✅ 1. `list-style-type`

Change the **default bullet/marker style**:

```css
ul {
  list-style-type: square;  /* options: circle, disc, none, decimal, roman... */
}
```

---

### ✅ 2. `list-style-position`

Control whether the **bullet is inside or outside** the text box:

```css
ul {
  list-style-position: inside;   /* or outside (default) */
}
```

* `inside` → marker aligns with text inside the box
* `outside` → marker stays outside the text box

---

### ✅ 3. `list-style-image`

Use an **image as the list marker**:

```css
ul {
  list-style-image: url('icon.png');
}
```

⛔ The size of the image cannot be directly controlled here.

---

### ✅ 4. Custom Marker with `::before` (Best Approach)

For **full control over size and design of the marker**:

```css
ul {
  list-style: none; /* remove default bullets */
}

ul li::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('a.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
}
```



# 🧾 Table Styling in CSS

## ✅ 1. Styling `<td>` and `<th>` cells

```css
td, th {
    width: 20%;
    text-align: center;
    vertical-align: middle;
    height: 50px;
}
```

* `width`: controls the column width.
* `text-align`: aligns content horizontally.
* `vertical-align`: aligns content vertically.
* `height`: sets the row height.

---

## ✅ 2. Borders and Collapse

```css
table, td, th {
    border: 2px solid black;
    border-collapse: collapse;
}
```

* `border`: adds borders to the table and cells.
* `border-collapse`: merges borders to avoid double lines.

---

## ✅ 3. Hover Effect on Rows

```css
tr:hover {
    background-color: black;
    color: white;
}
```

* When hovering over a row → background and text color change.

---

## ✅ 4. Coloring Odd Rows

```css
tbody tr:nth-child(odd) {
    background-color: rgb(239, 5, 196);
    color: bisque;
}
```

* `nth-child(odd)`: applies to odd rows (1, 3, 5...).

---

## 💡 Useful Additions

* `table-layout: fixed;` → fix the column widths.
* `caption-side: top;` → position the table caption.
* `padding: 10px;` → add spacing inside cells.





## [03:45:47](https://www.youtube.com/watch?v=qyVkLebgfzY&t=13547s)**Pseudo Classes. 

A **pseudo-class** is used to define the special state of an element.
They are written with a **colon `:`** before the keyword.

---

 ## ✅ Common Pseudo-classes

 ### 🔹 1. Link States

```css
a:link { color: blue; }    /* unvisited link */
a:visited { color: purple; } /* visited link */
a:hover { color: red; }    /* when mouse is over */
a:active { color: green; } /* when link is clicked */
```

---

 ### 🔹 2. User Interaction

```css
button:hover { background: lightblue; }   /* mouse over */
input:focus { border: 2px solid blue; }   /* when input is active */
input:disabled { background: #ccc; }      /* disabled state */
input:checked { outline: 2px solid green; } /* checked checkbox/radio */
```

---

 ### 🔹 3. Structural Pseudo-classes

```css
li:first-child { color: red; }    /* first element in a parent */
li:last-child { color: blue; }    /* last element */
li:nth-child(2) { font-weight: bold; }  /* second element */
li:nth-child(odd) { background: #f9f9f9; } /* odd rows */
li:nth-child(even) { background: #eee; }   /* even rows */
```

---

 ### 🔹 4. Negation

```css
p:not(.highlight) {
  color: gray;
}
```

* Selects all `<p>` that **do not** have the class `.highlight`.

---

 ## 💡 Tips

* Use pseudo-classes for **states and conditions**, not static styling.
* They make your CSS more dynamic without extra classes or JavaScript.
* Can be combined with pseudo-elements (`::before`, `::after`) for powerful effects.

---

👉 Example in action:

```css
button:hover:not(:disabled) {
  background: darkblue;
  color: white;
}
```

➡ Button only changes on hover **if it’s not disabled**.

# [03:57:00](https://www.youtube.com/watch?v=qyVkLebgfzY&t=14220s) Pseudo Elements - First Letter, First Line, Selection.

A **pseudo-element** allows you to style **specific parts of an element’s content**.
They are written with a **double colon `::`** (though some browsers still support single `:`).

---

## ✅ Common Pseudo-elements

### 🔹 1. `::before`

Inserts content **before** the element’s content.

```css
p::before {
  content: "👉 ";
  color: red;
}
```

➡ Adds an arrow before every `<p>`.

---

### 🔹 2. `::after`

Inserts content **after** the element’s content.

```css
p::after {
  content: " ✔";
  color: green;
}
```

➡ Adds a check mark after every `<p>`.

---

### 🔹 3. `::first-letter`

Styles the **first letter** of the element.

```css
p::first-letter {
  font-size: 2em;
  color: blue;
}
```

---

### 🔹 4. `::first-line`

Styles the **first line** of the element.

```css
p::first-line {
  font-weight: bold;
}
```

---

### 🔹 5. `::selection`

Styles the **highlighted text** when selected by the user.

```css
p::selection {
  background: yellow;
  color: black;
}
```

---

## 💡 Tips

* Always use `::` (double colon) for pseudo-elements (CSS3 standard).
* `::before` and `::after` require the property **`content`** to display anything.
* They are very useful for icons, decorations, tooltips, and custom markers.

---

✅ **Summary:**

* **Pseudo-classes** = *special states* of an element (`:hover`, `:focus` …).
* **Pseudo-elements** = *specific parts* of an element (`::before`, `::after` …).

---
تمام ✅ خليني أجهزلك **ملاحظات مختصرة ومنظمة بصيغة Obsidian** (Markdown) عن الـ **Vendor Prefixes** في CSS:

---

# 🧾 [04:23:32](https://www.youtube.com/watch?v=qyVkLebgfzY&t=15812s) #38 - Vendor Prefixes.
## ✅ What are Vendor Prefixes?

* Special markers added **before CSS properties** to ensure compatibility with different browsers.
* Used mainly for **experimental or non-standard CSS features**.
* Format:

  * `-webkit-` → Chrome, Safari (WebKit-based)
  * `-moz-` → Firefox (Mozilla)
  * `-ms-` → Internet Explorer / Edge (old versions)
  * `-o-` → Opera (Presto engine)

---

## ✅ Examples

```css
.box {
  -webkit-transform: rotate(45deg); /* Chrome, Safari */
  -moz-transform: rotate(45deg);    /* Firefox */
  -ms-transform: rotate(45deg);     /* IE */
  -o-transform: rotate(45deg);      /* Old Opera */
  transform: rotate(45deg);         /* Standard */
}
```

```css
.text {
  -webkit-user-select: none; /* Chrome, Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* IE/Edge */
  user-select: none;         /* Standard */
}
```

---

## ✅ When do we need them?

* For **new CSS features** not yet fully standardized.
* For **cross-browser support** (especially old browsers).
* Examples:

  * `transform`, `transition`, `animation`
  * `flexbox` (older versions)
  * `user-select`, `appearance`, `box-shadow` (older browsers)

---

## ✅ Tools to handle them

* ✨ **Autoprefixer** (PostCSS plugin) → adds prefixes automatically during build.
* ⚙️ VS Code Extensions (e.g., `css-auto-prefix`) → adds prefixes when saving.

---

تمام ✅ أديك ملاحظات قصيرة ومنظمة بصيغة **Obsidian (Markdown)** عن `box-shadow` و `text-shadow`:

---

# 🌑 Shadows in CSS

## ✅ 1. `box-shadow`

Adds **shadow around elements (boxes, divs, buttons, etc.)**.

### 🔹 Syntax

```css
box-shadow: offset-x offset-y blur-radius spread-radius color inset;
```

### 🔹 Parameters

* `offset-x` → Horizontal shadow position (+right, -left).
* `offset-y` → Vertical shadow position (+down, -up).
* `blur-radius` → Amount of blur (default = 0 = sharp).
* `spread-radius` → Size expansion of shadow (optional).
* `color` → Shadow color (with opacity if needed).
* `inset` → Make shadow appear **inside** the box.

### 🔹 Examples

```css
/* Simple shadow */
div {
  box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
}

/* Inside shadow */
div {
  box-shadow: inset 0 0 10px gray;
}
```

---

## ✅ 2. `text-shadow`

Adds **shadow behind text**.

### 🔹 Syntax

```css
text-shadow: offset-x offset-y blur-radius color;
```

### 🔹 Parameters

* `offset-x` → Horizontal shadow position.
* `offset-y` → Vertical shadow position.
* `blur-radius` → How soft the shadow is (default = 0).
* `color` → Shadow color.

### 🔹 Examples

```css
/* Basic text shadow */
h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

/* Glowing text */
h1 {
  text-shadow: 0 0 10px #ff0000;
}
```

----

تمام ✅ خليني أجهزلك ملاحظات منظمة بصيغة **Obsidian (Markdown)** عن **Box Model** و **Box Sizing**:

---

# 📦 CSS Box Model & Box Sizing

## ✅ 1. CSS Box Model

Every HTML element is considered as a **box** consisting of 4 parts:

1. **Content** → The actual text or image inside the element.
2. **Padding** → Space between content and border.
3. **Border** → The edge (line) surrounding the padding + content.
4. **Margin** → Space outside the border (between this element and others).

### 🔹 Visualization

```
+-------------------------+
|        Margin           |
|  +-------------------+  |
|  |      Border       |  |
|  |  +-------------+  |  |
|  |  |   Padding   |  |  |
|  |  | +---------+ |  |  |
|  |  | | Content | |  |  |
|  |  | +---------+ |  |  |
|  |  |             |  |  |
|  |  +-------------+  |  |
|  +-------------------+  |
+-------------------------+
```

### 🔹 Example

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

* Total space = **width + padding + border + margin**.
* Here: `200 + (20*2) + (5*2) + (10*2) = 270px`.

---

## ✅ 2. Box Sizing

Controls how the **width/height** of an element is calculated.

### 🔹 Values

1. **content-box (default)**

   * `width` = content only (padding + border added outside).

   ```css
   div {
     box-sizing: content-box; /* default */
   }
   ```

2. **border-box**

   * `width` = content + padding + border (all included inside).
   * Easier for layouts (element stays fixed size).

   ```css
   div {
     box-sizing: border-box;
   }
   ```

---

## 💡 Key Notes

* Use `box-sizing: border-box;` globally to make layouts easier:

  ```css
  * {
    box-sizing: border-box;
  }
  ```
* `margin` is **always outside** and not included in box-sizing.
* `outline` (if used) is **outside border** and doesn’t affect size.

---


تمام ✅ أديك ملاحظات قصيرة ومنظمة بصيغة **Obsidian (Markdown)** عن **CSS Transitions**:

---

# 🎨 CSS Transitions

## ✅ What is a Transition?

* A way to **animate changes smoothly** between CSS property values over a given duration.
* Instead of changing instantly, the browser animates the change.

---

## ✅ Syntax

```css
selector {
  transition: property duration timing-function delay;
}
```

### 🔹 Parameters:

1. **property** → The CSS property to animate (`color`, `width`, `all`, …).
2. **duration** → How long the transition takes (`1s`, `500ms`).
3. **timing-function** → Speed curve of animation (`ease`, `linear`, `ease-in`, `ease-out`, `cubic-bezier`).
4. **delay** → Time before the animation starts.

---

## ✅ Example

```css
.box {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 1s ease-in-out, background 0.5s linear;
}

.box:hover {
  width: 200px;
  background: blue;
}
```

👉 When hovering:

* `width` smoothly expands in **1s** with easing.
* `background` color changes in **0.5s** linearly.

---

## ✅ Timing Functions

* `linear` → Constant speed.
* `ease` (default) → Slow start, fast middle, slow end.
* `ease-in` → Slow start.
* `ease-out` → Slow end.
* `ease-in-out` → Slow start and end.
* `cubic-bezier(n,n,n,n)` → Custom curve.

---

## 💡 Key Notes

* You can transition **multiple properties** by separating them with commas.
* Not all properties are animatable (e.g., `display` is not).
* Best used with `:hover`, `:focus`, `:active`, or JS class toggles.
* For more complex animations → use **CSS Animations** (`@keyframes`).

---

# 🎨 CSS Variables (Custom Properties)

## ✅ What are CSS Variables?

* Also called **Custom Properties**.
* Allow you to store values in one place and reuse them across your CSS.
* Defined with `--variable-name`.
* Accessed using `var(--variable-name)`.

---

## ✅ Example

```css
:root {
  --main-color: #3498db;
  --padding-size: 10px;
}

button {
  background: var(--main-color);
  padding: var(--padding-size);
}
```

---

## ✅ Fallback Value

* If the variable is **not defined**, you can set a **fallback value**.

```css
p {
  color: var(--text-color, black); /* use black if --text-color is missing */
}
```

---

## 💡 Key Notes

* Define variables globally in `:root` for easy reuse.
* Variables are **inherited** by default.
* Fallback ensures styles don’t break if a variable is undefined.
---

# 📐 CSS Flexbox (Flexible Box Layout)

## ✅ What is Flexbox?

* A **layout model** in CSS designed to arrange elements in one dimension (**row or column**).
* Makes it easier to align, distribute, and space items inside a container.
* Activated using:

```css
.container {
  display: flex;
}
```

---

## ✅ 1. Flex Container Properties

These are applied to the **parent (container)**:

* **`display: flex | inline-flex`**
  Turns the element into a flex container.

* **`flex-direction`** → Main axis direction.

  * `row` (default)
  * `row-reverse`
  * `column`
  * `column-reverse`

* **`flex-wrap`** → Control wrapping of items.

  * `nowrap` (default) → all in one line
  * `wrap` → items wrap to next line
  * `wrap-reverse`

* **`flex-flow`** → Shorthand for `flex-direction` + `flex-wrap`.

  ```css
  flex-flow: row wrap;
  ```

* **`justify-content`** → Align items along the **main axis**.

  * `flex-start` | `flex-end` | `center`
  * `space-between` | `space-around` | `space-evenly`

* **`align-items`** → Align items along the **cross axis**.

  * `stretch` (default)
  * `flex-start` | `flex-end` | `center` | `baseline`

* **`align-content`** → Align **multiple lines** of items (when wrapping).

  * `stretch` | `flex-start` | `flex-end` | `center` | `space-between` | `space-around`

---

## ✅ 2. Flex Item Properties

These are applied to the **children (items)** inside the flex container:

* **`order`**
  Controls item order (default = 0, higher = later).

* **`flex-grow`**
  How much the item **expands** relative to others (default = 0).

  ```css
  flex-grow: 1; /* share remaining space */
  ```

* **`flex-shrink`**
  How much the item **shrinks** if space is tight (default = 1).

* **`flex-basis`**
  The **initial size** of the item before growing/shrinking.

  * Can be in `px`, `%`, etc.
  * Default = `auto`.

* **`flex`** (shorthand)

  ```css
  flex: grow shrink basis;
  flex: 1 1 200px;
  ```

* **`align-self`**
  Overrides `align-items` **for a specific item**.

  * `auto` (default, inherits from container)
  * `flex-start` | `flex-end` | `center` | `stretch` | `baseline`

---

## ✅ 3. Example Layout

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1; /* equal space for all items */
  padding: 10px;
}
```

---

## 💡 Key Notes

* **Main axis** = defined by `flex-direction`.
* **Cross axis** = perpendicular to main axis.
* Flexbox is **1D layout** (good for rows/columns).
* For **2D layouts** (rows + columns together) → use **CSS Grid**.

# 🎨 CSS Advanced Notes

## #54 - Filters

* `filter` applies visual effects to elements (like Photoshop).
* Examples:

  * `filter: blur(5px);` → adds blur.
  * `filter: grayscale(100%);` → makes it black & white.
  * `filter: brightness(150%);` → increases brightness.
* You can chain filters:

  ```css
  filter: grayscale(50%) blur(2px);
  ```

---

## #55 - Gradients

* Gradients for backgrounds: `linear-gradient`, `radial-gradient`, `conic-gradient`.
* **Linear Gradient**:
  ```css
  background: linear-gradient(to right, red, blue)/* 0 degre mean to top 90 mean to left */
  ```
* **Radial Gradient**:

  ```css
  background: radial-gradient(circle, red, blue);
  ```
* **Conic Gradient**:

  ```css
  background: conic-gradient(from 90deg, red, blue, green);
  ```

---

## #56 - Pointer Events & Caret Color

* `pointer-events: none;` → disable clicks/hover on an element.
* `pointer-events: auto;` → restore normal behavior.
* `caret-color: red;` → change text cursor color in input/textarea.

---

## #57 - Grid Parent - Template Columns

* Defines how many **columns** the grid has.
* Example:

  ```css
  display: grid;
  grid-template-columns: 200px 1fr 2fr;
  ```

  → first column fixed, second flexible, third double the second.

---

## #58 - Grid Parent - Template Rows & Gap

* `grid-template-rows` controls rows.
* `gap`, `row-gap`, `column-gap` define spacing.

  ```css
  grid-template-rows: 100px auto 50px;
  gap: 10px 20px; /* row gap / column gap */
  ```

---

## #59 - Grid Parent - Justify Content & Align Content

* `justify-content` → distributes **columns horizontally**.
* `align-content` → distributes **rows vertically**.
* Values: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`.

---

## #60 - Grid Parent - Template Areas

* Assign names to grid areas for easier layout:

  ```css
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  ```
* Then assign child:

  ```css
  .header { grid-area: header; }
  ```

---

## #61 - Grid Child - Grid Column & Grid Row

* Place elements by start/end lines.
* `grid-column: 1 / 3;` → spans from col 1 to col 3.
* `grid-row: 2 / 4;` → spans from row 2 to row 4.

---

## #62 - Grid Child - Grid Area

* Shorthand for positioning:

  ```css
  grid-area: 2 / 1 / 4 / 3;
  ```

  → (row-start / col-start / row-end / col-end).

---

## #63 - Grid Min, Max & Auto-fill

* `minmax(min, max)` → defines flexible column/row size.

  ```css
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  ```
* `auto-fill` vs `auto-fit`:

  * `auto-fill` → fills as many columns as possible, even empty ones.
  * `auto-fit` → expands columns to fill available space.
---

🔑 **Summary**

* **Filters** → visual effects.
* **Gradients** → background transitions.
* **Pointer/Caret** → control element interaction & text cursor.
* **Grid (Parent & Child)** → modern layout system: columns, rows, named areas, min/max.

---
Got it 👍 Here’s your **Obsidian-ready Markdown note in English** for quick reference. Save it as `CSS-Transforms.md` in your Obsidian vault.

---

# 🎨 CSS Transforms (2D & 3D)

## 🔹 2D Transform

### 1. `scale()`

* Enlarges or shrinks the element on the X and Y axes.
* `scale(2)` = double size.
* `scale(1, 0.5)` = same width × half height.
* minus will filliping element 

```css
div {
  transform: scale(1.5, 0.8);
}
```

---

### 2. `rotate()`

* Rotates the element by an angle (`deg`).
* Rotation happens around the **transform-origin**.

```css
div {
  transform: rotate(45deg);
}
```

---

### 3. `translate()`

* Moves the element relative to its original position.
* `translateX(px)` or `translateY(px)`.

```css
div {
  transform: translate(50px, 20px);
}
```

---

### 4. `skew()`

* Tilts (shears) the element.
* Can skew along X or Y.

```css
div {
  transform: skew(20deg, 10deg);
}
```

---

### 5. `matrix()`

* Combines all transforms into one function:
  `matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)`

Example:

```css
div {
  transform: matrix(1, 0.5, -0.5, 1, 30, 20);
}
```

---

## 🔹 Transform Origin

* Defines the pivot point for transforms.
* Values: `center` (default), `top`, `left`, `50% 50%`, etc.

```css
div {
  transform-origin: top left;
  transform: rotate(45deg);
}
```

---

## 🔹 3D Transform

### 1. `rotateX()` / `rotateY()` / `rotateZ()`

* Rotates in 3D space.

```css
div {
  transform: rotateX(60deg);
}
```

---

### 2. `translateZ()` + Perspective

* Moves the element closer or farther (depth).
* Requires `perspective`.

```css
.container {
  perspective: 800px;
}
div {
  transform: translateZ(200px);
}
```

* **`perspective-origin`** changes the viewer’s point of view (default: center).

---

### 3. Backface Visibility + Flip

* `backface-visibility: hidden;` hides the back side when flipped.
* Useful for card flip effects.

```css
.card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.card:hover {
  transform: rotateY(180deg);
}
.front, .back {
  backface-visibility: hidden;
  position: absolute;
}
.back {
  transform: rotateY(180deg);
}
```

---

## 📌 Quick Notes

# CSS Advanced Topics Notes

## #74 - Animation (Keyframes, Name, Duration)
- **@keyframes**: Defines the animation steps.
- **animation-name**: Connects element to keyframes.
- **animation-duration**: Time the animation takes.

```css
@keyframes move {
  from { left: 0; }
  to { left: 100px; }
}
.box {
  position: relative;
  animation: move 2s;
}
````

---

## #75 - Iteration Count, Timing Function, Spinner Loading

* **animation-iteration-count**: How many times animation runs (`infinite`, number).
* **animation-timing-function**: Speed curve (`ease`, `linear`, `ease-in`, `cubic-bezier`).
* Example: Spinner

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #ff5722;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

---

## #76 - Direction, Fill Mode, Play State, Delay

* **animation-direction**: `normal`, `reverse`, `alternate`.
* **animation-fill-mode**: `forwards`, `backwards`, `both`.
* **animation-play-state**: `running`, `paused`.
* **animation-delay**: Start delay.
* if delay in minus mean skip first x second 

---

## #77 - Up And Down Loading Animation

```css
@keyframes upDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.dot {
  width: 15px;
  height: 15px;
  background: #2196f3;
  border-radius: 50%;
  display: inline-block;
  animation: upDown 0.6s infinite alternate;
}
```

---

# CSS Selectors Reference 📝

## 1. Basic Selectors

* **Element Selector**
  يختار كل العناصر من نوع محدد.

  ```css
  p { color: red; }   /* يغير كل <p> */
  ```

* **Class Selector (`.class-name`)**
  يختار كل العناصر اللي عندها نفس الكلاس.

  ```css
  .btn { background: blue; }
  ```

* **ID Selector (`#id-name`)**
  يختار عنصر واحد فقط بالـ id (unique).

  ```css
  #header { font-size: 20px; }
  ```

* **Element with Class (`Element.class-name`)**
  يختار عنصر معين بشرط يكون عنده كلاس.

  ```css
  p.note { color: green; }
  ```

---

## 2. Combinators

* **Descendant (`.parent .child`)**
  يختار أي عنصر داخل عنصر آخر (حتى لو مش مباشر).

  ```css
  .card p { color: red; }
  ```

* **Direct Child (`.parent > .child`)**
  يختار العنصر المباشر فقط.

  ```css
  .menu > li { list-style: none; }
  ```

* **Adjacent Sibling (`div + p`)**
  يختار العنصر اللي جاي بعد العنصر مباشرة.

  ```css
  h1 + p { font-style: italic; }
  ```

* **General Sibling (`p ~ div`)**
  يختار كل العناصر اللي بتيجي بعد عنصر محدد في نفس المستوى.

  ```css
  h2 ~ p { color: blue; }
  ```

* **Multiple Selectors (`.class-name div, .class-name p`)**
  يطبق نفس الـ style على أكثر من عنصر.

  ```css
  h1, h2, h3 { margin: 0; }
  ```

* **Multiple Classes (`.class-one.class-two`)**
  يطبق الـ style على عنصر عنده أكتر من كلاس.

  ```css
  .btn.primary { background: green; }
  ```

---

## 3. Pseudo-Classes

* **`:root`** → يمثل العنصر `<html>`. مفيد لتعريف CSS Variables.

  ```css
  :root { --main-color: blue; }
  ```

* **`:checked`** → يحدد العناصر المختارة زي checkbox أو radio.

  ```css
  input:checked { border: 2px solid green; }
  ```

* **`:empty`** → يحدد العناصر الفاضية (مفيهاش أي محتوى).

  ```css
  p:empty { display: none; }
  ```

* **`:disabled`** → يختار عناصر الـ form اللي disabled.

  ```css
  input:disabled { background: #ccc; }
  ```

* **`:required`** → يختار عناصر الـ form المطلوبة.

  ```css
  input:required { border: 2px solid red; }
  ```

* **`:focus`** → يطبق ستايل على العنصر وقت ما يكون عليه focus (زي input).

  ```css
  input:focus { outline: 2px solid blue; }
  ```

* **`:not(selector)`** → يستبعد عناصر معينة.

  ```css
  p:not(.highlight) { color: gray; }
  ```

* **`:first-child` / `:last-child`**
  يختار أول أو آخر عنصر داخل parent.

  ```css
  li:first-child { color: red; }
  li:last-child { color: green; }
  ```

* **`:only-child`**
  يختار العنصر لو هو الوحيد في الـ parent.

  ```css
  p:only-child { font-weight: bold; }
  ```

* **`:first-of-type` / `:last-of-type`**
  يختار أول/آخر عنصر من نوع معين جوه parent.

  ```css
  p:first-of-type { color: blue; }
  ```

* **`:nth-child(n)` / `:nth-last-child(n)`**
  يحدد العنصر حسب ترتيبه (من البداية أو من الآخر).

  ```css
  li:nth-child(2) { color: red; }   /* العنصر رقم 2 */
  ```

* **`:nth-of-type(n)` / `:nth-last-of-type(n)`**
  زي اللي فوق بس حسب نوع العنصر فقط.

  ```css
  p:nth-of-type(2) { color: blue; }
  ```

---

## 4. Pseudo-Elements

* **`::selection`**
  يغير ستايل النص وقت ما يتم تحديده (highlight).

  ```css
  ::selection { background: yellow; }
  ```

* **`::placeholder`**
  يحدد شكل النص placeholder جوه input.

  ```css
  input::placeholder { color: gray; }
  ```

---

## 5. Attribute Selectors

* **`[Attribute]`**
  يختار كل العناصر اللي عندها attribute.

  ```css
  [title] { color: red; }
  ```

* **`Element[Attribute]`**
  عنصر معين عنده attribute.

  ```css
  input[required] { border: 1px solid red; }
  ```

* **`[Attribute=Value]`**
  العنصر اللي الـ attribute بتاعه بيساوي قيمة معينة.

  ```css
  input[type="submit"] { background: blue; }
  ```

* **`[Attribute~=Value]`**
  يختار العناصر لو القيمة جزء من list مفصولة بمسافات.

  ```css
  [class~=btn] { padding: 5px; }
  ```

* **`[Attribute*=Value]`**
  يختار العناصر لو القيمة **بتحتوي على string**.

  ```css
  [class*="error"] { color: red; }
  ```

* **`[Attribute^=Value]`**
  يختار العناصر اللي القيمة بتبدأ بـ string معين.

  ```css
  [class^="icon-"] { font-size: 20px; }
  ```

---

⚡ **الفرق الرئيسي بين selectors:**

* **Basic selectors**: تحديد مباشر (Element, Class, ID).
* **Combinators**: تحديد بناءً على العلاقة بين العناصر (داخل، بعد، أخ).
* **Pseudo-classes**: تحديد بناءً على حالة العنصر (focus, checked…).
* **Pseudo-elements**: تحديد جزء من العنصر (::before, ::after, ::selection).
* **Attribute selectors**: تحديد العناصر بالـ attributes وقيمها.

---
## #83 - Media Queries And Responsive Designs Intro

* Used for adapting designs to screen sizes.

```css
@media (max-width: 768px) {
  body { background: lightblue; }
}
```

---



# 84 - Media Queries Standards

* Mobile First approach recommended.
* Breakpoints common:

  * Small: 576px
  * Medium: 768px
  * Large: 992px
  * Extra Large: 1200px

---

## #85 - Media Queries Practice

Example responsive grid:

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 992px) {
  .container { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 576px) {
  .container { grid-template-columns: 1fr; }
}
```

---

## #86 - Create Your Framework

* Define global classes for spacing, typography, colors.
* Example utility classes:

```css
.m-1 { margin: 10px; }
.p-1 { padding: 10px; }
.text-center { text-align: center; }
```

---

## #87 - CSS Global Values

* **inherit**: Takes from parent.
* **initial**: Resets to default.
* **unset**: Acts as `inherit` or `initial`.
* **revert**: Rolls back to user-agent or parent stylesheet. 

* You can chain multiple transforms:

  ```css
  transform: translate(50px) rotate(30deg) scale(1.2);
  ```
* Order matters: `rotate → translate` is not the same as `translate → rotate`.
* **2D** = only X & Y axes.
* **3D** = includes Z axis + depth (`perspective`).

---
