# 🌐 HTML Reference 
## 1️⃣ Basics

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title> Page Title </title>
  </head>
  <body>
    Content here...
  </body>
</html>
```

* `<!DOCTYPE html>` → Defines HTML5.
* `<html>` → Root element.
* `<head>` → Metadata (title, meta tags, CSS, JS).
* `<body>` → Main page content.

---

## 2️⃣ Head Section Elements

* `<meta charset="UTF-8">` → Character encoding.
* `<meta name="description" content="...">` → SEO description.
* `<meta name="keywords" content="HTML, CSS">` → SEO keywords.
* `<meta name="viewport" content="width=device-width, initial-scale=1.0">` → Responsive design.
* `<title>` → Page title (shown in browser tab).
* `<style>` → Internal CSS.
* `<script>` → Internal JS.
* `<link rel="stylesheet" href="style.css">` → External CSS.
* `<link rel="icon" href="favicon.ico">` → Website icon.

---

## 3️⃣ Text Formatting

```html
<h1>Heading 1</h1>
<p>Paragraph</p>
<b>Bold</b> <strong>Strong (important)</strong>
<i>Italic</i> <em>Emphasized</em>
<u>Underline</u> <ins>Inserted</ins>
<s>Strikethrough</s> <del>Deleted</del>
<mark>Highlighted</mark>
<sup>Superscript</sup> (x²)
<sub>Subscript</sub> (H₂O)
<pre>Preserved text format</pre>
<small>Small text</small>
<big>Big text</big>
```

---

## 4️⃣ Links & Media

### 🔗 Anchor (`<a>`)

```html
<a href="https://google.com">Google</a>
<a href="about.html">About Page</a>
<a href="#section1">Jump to Section</a>
<a href="file.pdf" download>Download PDF</a>
<a href="mailto:test@mail.com">Send Email</a>
<a href="tel:+20123456789">Call</a>
<a href="https://wa.me/20123456789">WhatsApp</a>
<a href="https://github.com" target="_blank">Open in new tab</a>
```

### 🖼️ Image

```html
<img src="img.jpg" alt="description" width="200" height="200">
```

### 🎬 Video

```html
<video autoplay muted controls loop poster="preview.jpg">
  <source src="video.mp4" type="video/mp4">
  Video not supported.
</video>
```

### 🔊 Audio

```html
<audio autoplay muted controls loop>
  <source src="audio.mp3" type="audio/mp3">
  Audio not supported.
</audio>
```

### 📺 IFrame

```html
<iframe src="https://www.youtube.com/embed/ID?autoplay=1&mute=1&controls=0" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
</iframe>
```

---

## 5️⃣ Tables

```html
<table border="1" cellpadding="5" cellspacing="0" bgcolor="yellow">
  <caption>Student Data</caption>
  <thead>
    <tr><th>Name</th><th>Age</th><th>Grade</th></tr>
  </thead>
  <tbody>
    <tr><td>Amr</td><td>22</td><td>A</td></tr>
    <tr><td>Sara</td><td>20</td><td>B</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3">End of Table</td></tr>
  </tfoot>
</table>
```

* `border` → Table border.
* `cellpadding` → Space inside cell.
* `cellspacing` → Space between cells.
* `colspan` → Merge columns.
* `rowspan` → Merge rows.

---

## 6️⃣ Lists

### Unordered List

```html
<ul type="circle">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Ordered List

```html
<ol type="A" start="3" reversed>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

### Description List

```html
<dl>
  <dt>HTML</dt>
  <dd>Markup language for web pages</dd>
</dl>
```

---

## 7️⃣ Forms

### Inputs

```html
<form action="submit.php" method="POST">
  <input type="text" placeholder="Name" required>
  <input type="email" placeholder="Email">
  <input type="password" placeholder="Password">
  <input type="date">
  <input type="file">
  <input type="color">
  <input type="submit" value="Send">
  <input type="reset" value="Clear">
</form>
```

### Labels & Radio/Checkbox

```html
<input type="checkbox" id="opt1">
<label for="opt1">Option 1</label>

<input type="radio" id="male" name="gender" value="m">
<label for="male">Male</label>
```

### Textarea

```html
<textarea rows="5" cols="30" placeholder="Message"></textarea>
```

### Select

```html
<select>
  <optgroup label="Frontend">
    <option>HTML</option>
    <option>CSS</option>
  </optgroup>
  <optgroup label="Backend">
    <option>PHP</option>
    <option>Node.js</option>
  </optgroup>
</select>
```

---

## 8️⃣ Semantic Tags

```html
<header>Header</header>
<nav>Navigation</nav>
<section>Section</section>
<article>Article</article>
<footer>Footer</footer>
<div>Generic block</div>
<span>Inline text</span>
```

---

## 9️⃣ Entities

```html
<p>Hello&nbsp;World</p>   <!-- Non-breaking space -->
<p>&lt;div&gt;</p>         <!-- Displays <div> -->
<p>&copy; 2025 Amr</p>    <!-- © symbol -->
```
