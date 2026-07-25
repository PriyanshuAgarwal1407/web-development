## HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    Visible Content
</body>
</html>
```

This is the starting point of **every modern webpage**.

### Anatomy of the Boilerplate

```
 Browser
    ↓
Reads DOCTYPE
    ↓
Reads HTML Tag
    ↓   
Reads HEAD
    ↓
Reads BODY
    ↓
Displays Page
```

---

## 1. <!DOCTYPE html>

```html
<!DOCTYPE html>
```

This is **not an HTML tag**.

It is called the **Document Type Declaration**.


### Why Does It Exist?

Years ago there were many versions of HTML.

- HTML 3
- HTML 4
- XHTML
- HTML5

Browsers needed to know which version they should follow.

The DOCTYPE tells the browser:

> "Use modern HTML5 rules."

### Without DOCTYPE

The browser enters

```
Quirks Mode
```

where it tries to imitate very old browsers.

This can create strange CSS bugs.


### With DOCTYPE

```
Standards Mode
```

Everything follows modern web standards.



## 2. The HTML Element

```html
<html lang="en">
```

This is called the **Root Element**.

Everything inside your webpage lives here.

---

```
<html>
    Everything
</html>
```

### Why lang="en"?

This tells browsers and search engines that the page language is English.

Examples

```
lang="en"
```

English

```
lang="hi"
```

Hindi

```
lang="fr"
```

French

### Benefits

✔ Better SEO
✔ Better Accessibility
✔ Better Translation
✔ Better Screen Reader Support

## 3. The Head Section

```html
<head>
    ...
</head>
```

The `<head>` contains information **about the webpage**, not the webpage itself.

Nothing inside `<head>` appears on the page.


Inside `<head>` we usually place

- title
- meta tags
- CSS
- JavaScript
- icons
- fonts

Think of `<head>` as the brain of the webpage.
Users cannot see it,
but the browser depends on it.

## 4. Meta Charset

```html
<meta charset="UTF-8">
```

### Why?

Computers store everything as numbers.
Different computers may interpret those numbers differently.
UTF-8 is a universal dictionary.
It tells the browser

> "Decode my text using UTF-8."

### Without UTF-8

You may see

```
â€™
Ã
â‚¹
```

instead of

```
'
₹
€
```

### UTF-8 Supports

- English
- Hindi
- Japanese
- Chinese
- Arabic
- Emoji 😀
- Mathematical Symbols

Almost every language.

### Best Practice

Always use

```html
<meta charset="UTF-8">
```

## 5. Viewport Meta Tag

```html
<meta
name="viewport"
content="width=device-width, initial-scale=1.0">
```

This is one of the most important tags for mobile devices.

### Problem

Suppose your webpage is

```
1200px
```

wide.

A phone screen is

```
390px
```

wide.

Without this tag,
the browser shrinks your webpage.
Everything becomes tiny.

### Solution

```
width=device-width
```

Use the actual width of the device.


```
initial-scale=1.0
```

Open at 100% zoom.


### Without Viewport
📱
Tiny unreadable page.

### With Viewport
📱
Responsive page.


## 6. Title Tag

```html
<title>My Website</title>
```

This sets

- Browser tab title
- Bookmark title
- Search engine title


Example

```
ChatGPT
```

```
Google
```

```
YouTube
```

These names come from

```
<title>
```

### Best Practice

Instead of

```
Home
```

write

```
Priyanshu Portfolio | Full Stack Developer
```

Much better for SEO.

## 7. Body Tag

```html
<body>

</body>
```

Everything users actually see goes here.

Examples

- Headings
- Paragraphs
- Images
- Videos
- Buttons
- Tables
- Forms

Think of it like this

```
Head
 ↓
Instructions
Body
 ↓
Visible Content
```

---

### Browser Rendering Process

When you open

```
index.html
```

the browser performs these steps

```
Read HTML File
    ↓
Read DOCTYPE
    ↓
Build DOM
    ↓
Download CSS
    ↓
Download JS
    ↓
Render Page
```

---

## What is DOM?

DOM means

**Document Object Model**

The browser converts HTML into a tree.

Example

```html
<body>
    <h1>Hello</h1>
    <p>Welcome</p>
</body>
```

DOM

```
Document
|
html
|
body
├── h1
└── p
```

JavaScript later manipulates this tree.


### Why Does HTML Work Without Boilerplate?

Try this

```html
<h1>Hello World</h1>
```

Open it.
It still works.

- Why?
- Because browsers are extremely forgiving.

They automatically add

```
<html>
<head>
<body>
```

behind the scenes.

Internally the browser converts

```html
<h1>Hello</h1>
```

into something like

```html
<!DOCTYPE html>
<html>
<head>
</head>
    <body>
        <h1>Hello</h1>
    </body>
</html>
```


### Should You Skip Boilerplate?

No. Professional developers never skip it.

### Problems Without Boilerplate

❌ Broken characters
❌ Poor SEO
❌ Accessibility issues
❌ Mobile issues
❌ Browser inconsistencies


### Standards Mode vs Quirks Mode

| Standards Mode | Quirks Mode |
|---------------|-------------|
| Modern        | Old Browser Compatibility |
| Predictable   | Unpredictable |
| Correct CSS   | Weird CSS |
| Recommended   | Avoid |

### Best Practices

✅ Always use HTML5 DOCTYPE
✅ Always specify language
✅ Always use UTF-8
✅ Always use viewport
✅ Always write a meaningful title

### Common Beginner Mistakes

❌ Forgetting DOCTYPE
❌ No viewport
❌ Wrong title
❌ Missing lang attribute
❌ Multiple body tags
❌ Multiple head tags

### Key Takeaways

- Every webpage should begin with the HTML5 boilerplate.
- The `<head>` contains metadata, while the `<body>` contains visible content.
- `<!DOCTYPE html>` ensures standards mode.
- UTF-8 prevents text encoding issues.
- The viewport meta tag is essential for responsive design.
- Browsers are forgiving, but relying on that behavior is not professional.

---

## HTML Basics

HTML consists of **Elements**.

An HTML Element usually has:

- Opening Tag
- Content
- Closing Tag

Example:

```html
<p>Hello World</p>
```

Structure:

```
Opening Tag      Content      Closing Tag
     <p>        Hello World       </p>
```

- Void (Empty) Elements have no closing tag.
- Examples:

```
<br>
<hr>
<img>
<input>
<meta>
<link>
```

---

## Attributes

Attributes provide additional information about elements.

**Syntax:** ` <tag attribute="value"> `
**Example:** `<a href="https://example.com">Visit</a>`

**Common Attributes:**

```
id
class
style
title
href
src
alt
width
height
name
value
placeholder
disabled
readonly
```

**Rules:**

```
✔ Written inside the opening tag
✔ Usually appear as name="value"
✔ Multiple attributes are separated by spaces

```

<br>

## Nesting
Nesting means placing one HTML element inside another.

Correct:

```
<div>
    <p>Hello</p>
</div>
```

Incorrect:

```
<div>
    <p>Hello
</div>
</p>
```

Always close the inner element before closing the outer element.

<br>

## Comments

Comments are ignored by browsers.

Syntax: `<!-- This is a comment -->`
Uses:
```
• Explain code
• Add notes
• Temporarily disable code
• Improve readability
```

Comments are NOT visible on the webpage.

<br>

### Whitespace
HTML ignores extra spaces, tabs, and new lines.

```
Example: ```<p>Hello          World</p>```
Output: `Hello World`

If multiple spaces are required, use: `&nbsp;`

Example: `Hello&nbsp;&nbsp;&nbsp;World`

For formatting, use CSS instead of adding multiple spaces.
```


<br>

---

# HTML Tags

```
- Tags are keywords enclosed inside angle brackets.
- Opening Tag: <p>
- Closing Tag: </p>
- Self-closing / Void Tags: <br>, <hr>. <img>, <input>
- Tags tell the browser how to display or structure content.
```

## 1. Heading Tags

HTML provides six heading levels.

Purpose: Define document headings.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

Best Practice:
```

✅ Use only one `<h1>` per page.
✅ Follow the correct hierarchy.

Correct:

<h1>HTML Tutorial</h1>
<h2>Introduction</h2>
<h3>History</h3>
<h2>Tags</h2>

Wrong:

<h1>Main Title</h1>
<h4>Subheading</h4>
```

Purpose

```
- Headings define the **structure** of your webpage.
- They should **not** be used only to make text bigger.
- Search engines and screen readers use headings to understand page content.
```


### Heading Hierarchy

| Tag | Importance | Usage |
|------|------------|-------|
| `<h1>` | Highest | Main page title |
| `<h2>` | High | Major section |
| `<h3>` | Medium | Subsection |
| `<h4>` | Lower | Small subsection |
| `<h5>` | Lower | Rarely used |
| `<h6>` | Lowest | Least important |


<br>

## 2. Paragraph Tag

The paragraph tag groups text into paragraphs.

```html
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
```

### Purpose

- Organizes text
- Improves readability
- Browser automatically adds spacing

### Best Practice

Do NOT use multiple `<br>` tags for paragraphs.

Correct:

```html
<p>Paragraph One</p>
<p>Paragraph Two</p>
```

Wrong:

```html
Paragraph One
<br><br><br>
Paragraph Two
```


<br>

## 3. Horizontal Rule

The `<hr>` tag creates a thematic break between sections.

```html
<p>Chapter 1</p>
<hr>
<p>Chapter 2</p>
```

### Output

```
Chapter 1
------------------------
Chapter 2
```

### Purpose

Use `<hr>` to separate topics.

Examples:

- New chapter
- New article
- New section

<br>


## 4. Line Break

The `<br>` tag starts text on a new line.

```html
<p>
221B Baker Street<br>
London<br>
England
</p>
```

Output:

```
221B Baker Street
London
England
```

<br>

### Difference Between `<br>` and `<p>`

| `<br>`                   | `<p>`         |
|--------------------------|---------------|
| Single line break        | New paragraph |
| No extra spacing         | Extra spacing |
| Used in poems, addresses | Used for text |

---

# What is Text Formatting?

Text formatting means **changing the meaning or presentation of text**.

**Example:**

```
Normal text
**Bold text**
*Italic text*
~~Deleted text~~
<ins>Inserted text</ins>
```

These formatting tags make your content easier to read and understand.

---

# Block vs Inline Elements

Before learning formatting tags, you must understand these two concepts.

## Block Elements

A block element always starts on a **new line**. It takes the **entire available width**.

Example:

```html
<h1>Hello</h1>
<p>Welcome</p>
<div>Container</div>
```

Output

```
Hello
Welcome
Container
```

Each element appears on a new line.

### Common Block Elements

```
<h1> - <h6>
<p>
<div>
<section>
<article>
<header>
<footer>
<nav>
<main>
<ul>
<ol>
<li>
<table>
<form>
```

<br>

## Inline Elements

Inline elements **do not start a new line**.
They occupy only the space they need.

Example

```html
Hello <strong>World</strong>
```

Output

```
Hello World
```

Everything stays on one line.

### Common Inline Elements

```
<a>
<img>
<span>
<strong>
<em>
<b>
<i>
<mark>
<small>
<code>
<sub>
<sup>
<abbr>
```

<br>

### Block vs Inline

| Block           | Inline              |
|-----------------|---------------------|
| Starts new line | Same line           |
| Full width      | Required width only |
| Used for layout | Used inside text    | 

---

## 1. `<strong>` Element

```html
<strong>Important</strong>
```

Output: **Important**

### Purpose

Represents **strong importance**.
Screen readers emphasize this text.
Google also understands it as important content.


### Real Example

```html
<p>
Never share your
<strong>Password</strong>.
</p>
```

<br>

## 2. `<b>` Element

```html
<b>Important</b>
```

Output: **Important**

Looks identical.


### Difference

`<b>`
Only changes appearance.

`<strong>`
Adds meaning.


### Best Practice

✅ Prefer

```html
<strong>
```

instead of

```html
<b>
```

unless you only want visual bold text.

### Strong vs Bold

| `<strong>` | `<b>` |
|------------|--------|
| Semantic   | Visual |
| Important content | Just bold |
| Better Accessibility | Less meaningful |

<br>


## 3. `<em>` Element

```html
<em>Very Important</em>
```

Output: *Very Important*
Purpose: Adds emphasis. Screen readers pronounce it differently.

<br>

## 4. `<i>` Element

```html
<i>Movie Name</i>
```

Output: *Movie Name*
Used for

- Foreign words
- Book titles
- Scientific names
- Technical terms

### Difference

| `<em>` | `<i>` |
|---------|--------|
| Emphasis | Styling |
| Semantic | Visual |

<br>

## 5. `<mark>` Element

Highlights text.

```html
<p>
Learn
<mark>HTML</mark>
today.
</p>
```

Output: Learn ==HTML== today.


### Used for

- Search results
- Highlights
- Important words

<br>

## 6. `<small>` Element

Displays smaller text.

```html
<small>Terms and Conditions Apply.</small>
```

### Common uses

- Copyright
- Footnotes
- Legal text

<br>

## 7. `<del>` Element

Represents deleted content.

```html
<del>₹1000</del>
```

Output: ~~₹1000~~

### Useful for

- Old prices
- Removed content

<br>

## 8. `<ins>` Element

Represents inserted content.

```html
<ins>₹800</ins>
```

Output

<u>₹800</u>

Often used together.

```html
<del>₹1000</del>

<ins>₹800</ins>
```

<br>

## 9. `<sub>` Element

Subscript

Example

```html
H<sub>2</sub>O
```

Output: H₂O

### Common Uses
- Chemistry
- Mathematics

<br>

## 10. `<sup>` Element

Superscript

```html
x<sup>2</sup>
```

Output: x²

### Common Uses

- Mathematics
- Powers
- Dates
- Footnotes

<br>

## 11. `<code>` Element

Represents programming code.

```html
<code>

console.log("Hello");

</code>
```

Output: `console.log("Hello");`

<br>

## 12. `<pre>` Element

Displays text exactly as written.

Preserves

- Spaces
- Tabs
- New lines

Example

```html
<pre>
Hello

    World
</pre>
```

Output

```
Hello

    World
```

### Difference

`<code>`
Code formatting

`<pre>`
Preserve formatting

> Often used together.

```html
<pre>
<code>

public class Main{

}

</code>
</pre>
```

<br>

## 13. `<kbd>` Element

Represents keyboard input.

```html
<kbd>Ctrl</kbd>
+
<kbd>C</kbd>
```

Output: Ctrl + C

Used in documentation.

<br>

## 14. `<blockquote>` Element

Represents long quotations.

```html
<blockquote>

Learning never exhausts the mind.

</blockquote>
```

Usually displayed with indentation.

<br>

## 15. `<q>` Element

Represents short quotations.

```html
<p>
Steve Jobs said
    <q>
    Stay Hungry Stay Foolish
    </q>
</p>
```

Automatically adds quotation marks.

<br>

## 16. `<abbr>` Element

Represents abbreviations.

```html
<abbr title="HyperText Markup Language">

HTML

</abbr>
```

Hovering shows

```
HyperText Markup Language
```

Useful for

- HTML
- CSS
- NASA
- WHO

<br>

## 17. `<cite>` Element

Represents the title of creative work.

Example

```html
<cite>

Harry Potter

</cite>
```

Can be used for

- Books
- Movies
- Songs
- Research Papers

<br>

## 18. `<time>` Element

Represents dates and times.

```html
<time datetime="2026-07-11">

11 July 2026

</time>
```

Helps

- Search engines
- Calendar applications
- Accessibility

---

### Revision Sheet

| Tag            | Purpose        |
|----------------|----------------|
| `<strong>`     | Important text |
| `<b>`          | Bold text      |
| `<em>`         | Emphasized text|
| `<i>`          | Italic text    |
| `<mark>`       | Highlight      |
| `<small>`      | Smaller text   |
| `<del>`        | Deleted text   |
| `<ins>`        | Inserted text  |
| `<sub>`        | Subscript      |
| `<sup>`        | Superscript    |
| `<code>`       | Code snippet   |
| `<pre>`        | Preserve formatting |
| `<kbd>`        | Keyboard input |
| `<blockquote>` | Long quote     |
| `<q>`          | Short quote    |
| `<abbr>`       | Abbreviation   |
| `<cite>`       | Creative work title |
| `<time>`       | Date and time  |

### Key Takeaways

- Use semantic formatting tags instead of purely visual ones.
- Understand the difference between **block** and **inline** elements.
- Choose tags based on the meaning of the content, not just its appearance.
- Proper text formatting improves readability, accessibility, and SEO.

---