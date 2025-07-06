
## **Introduction**

If you want to apply changes or effects to a word or any element in HTML, you usually wrap it between **two tags**.
Some tags are self-closing, while others need an explicit closing tag.

**Example of heading tag:**

```html
<h1>Amr</h1>
```

* The `h` stands for "heading"
* The number represents the heading size (from 1 to 6, with 1 being the largest)

**Basic HTML Structure:**

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Metadata goes here -->
</head>
<body>
    <!-- Main content goes here -->
</body>
</html>
```

---

## **Important Tags**

### HTML Comments

```html
<!-- This is a comment -->
```

### Meta Tags & Head Section

```html
<head>
    <meta charset="UTF-8" /> <!-- Character encoding -->
    <meta name="description" content="Site description" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="HTML, table, example" />
    <title>Website Title</title>

    <style>
        /* CSS goes here */
    </style>

    <script>
        // JavaScript code
    </script>

    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="link" />
</head>
```

### Body Section

```html
<body>
    <h1><b>Title</b></h1>
    <p>Paragraph content</p>

    <pre>
        Preserved formatting and spaces
    </pre>

    <!-- Text Formatting -->
    <b>Bold</b>
    <strong>Strong</strong>
    <i>Italic</i>
    <em>Emphasis</em>
    <small>Small Text</small>
    <big>Big Text</big>
    <mark>Highlighted</mark>
    <s>Strikethrough</s>
    <del>Deleted</del>
    <sup>x<sup>2</sup></sup>
    <sub>H<sub>2</sub>O</sub>
    <u>Underline</u>
    <ins>Inserted</ins>
</body>
```

---

## **Links**

```html
<a href="link.html">Click Me</a>
<a href="link.html" target="_blank">Open in New Tab</a>
<a href="mailto:amrkhaled@gmail.com">Send Email</a>
<a href="link.html" title="Go to Link">Hover Title</a>
```

---

## **Images**

```html
<img src="image.jpg" alt="Alternative text" width="200" height="200" />
```

* `src` = source path or URL
* `alt` = fallback text
* `width` and `height` control image dimensions

---

## **Tables**

```html
<table border="1" width="100%" cellpadding="10" cellspacing="0" bgcolor="yellow" bordercolor="red">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Amr</td>
            <td>22</td>
            <td rowspan="3">140</td>
        </tr>
        <tr>
            <td>Ma</td>
            <td>20</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>160</td>
            <td>No Data</td>
        </tr>
    </tfoot>
</table>
```

* `border`, `cellpadding`, `cellspacing`, `bgcolor`, `bordercolor`
* `colspan` merges columns
* `rowspan` merges rows

---

## **Lists**

### Unordered List

```html
<ul type="disc">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

* Types: `disc`, `circle`, `square`, `none`

### Ordered List

```html
<ol type="1" start="5" reversed>
    <li>Item A</li>
    <li>Item B</li>
</ol>
```

* Types: `1`, `A`, `a`, `I`, `i`

### Definition List

```html
<dl>
    <dt>Term</dt>
    <dd>Definition of the term</dd>
</dl>
```

---

## **Forms**

```html
<form action="submit.html" method="post" target="_blank">
    <label>Name</label>
    <input type="text" placeholder="Your Name" required />
    <br>
    <input type="email" placeholder="Email" />
    <br>
    <input type="tel" placeholder="Phone Number" />
    <br>
    <input type="password" placeholder="Password" />
    <input type="date" />
    <input type="datetime-local" />
    <input type="url" />
    <input type="file" />
    <input type="color" />
    <input type="hidden" />
    <hr>
    <input type="submit" value="Submit" />
    <input type="reset" value="Reset" />
</form>
```

### Dropdown & Text Area

```html
<select name="country">
    <option value="eg">Egypt</option>
    <option value="us">USA</option>
</select>

<textarea rows="5" cols="30">Your message here...</textarea>
```

### Checkboxes & Radio Buttons

```html
<input type="checkbox" /> HTML
<input type="checkbox" /> CSS

<label>Gender:</label>
<input type="radio" name="gender" /> Male
<input type="radio" name="gender" /> Female
```

### Range Input & Datalist

```html
<input type="range" min="0" max="100" />

<input type="text" list="options">
<datalist id="options">
    <option value="Amr">
    <option value="Mohamed">
</datalist>
```


