# Non-Semantic HTML

## Purpose

**Non-semantic HTML elements** do **not describe the meaning or purpose** of the content they contain. They are generic containers mainly used for styling, layout, or JavaScript manipulation.

The browser and search engines cannot determine what the content represents simply by looking at these elements.

### Common Non-Semantic Elements

| Element  | Purpose                       |
| -------- | ----------------------------- |
| `<div>`  | Generic block-level container |
| `<span>` | Generic inline container      |

### Example

```html
<div class="header">
    <div class="logo">My Website</div>

    <div class="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
    </div>
</div>
```

From the code above, neither browsers nor screen readers know whether the first `<div>` is a header, navigation, or something else.

The semantic equivalent is much clearer:

```html
<header>
    <h1>My Website</h1>

    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
    </nav>
</header>
```

Now both developers and browsers understand the purpose of each element.

---

## When Should You Use `<div>`?

Use a `<div>` when **no semantic HTML element accurately describes the content**.

### Good Uses

* CSS layouts
* Flexbox/Grid containers
* Wrappers
* JavaScript hooks
* Grouping unrelated elements

### Example

```html
<div class="card-container">
    <article>...</article>
    <article>...</article>
</div>
```

Here, the outer `<div>` is only a layout container, so using `<div>` is appropriate.

<br>

## When Should You Use `<span>`?

Use `<span>` for **inline content** that needs styling or JavaScript but has no semantic meaning.

### Example

```html
<p>
    Price:
    <span class="discount">20% OFF</span>
</p>
```

---

# Semantic HTML

**Semantic HTML** uses meaningful HTML elements that clearly describe the purpose of the content they contain.

Instead of generic elements like:

```html
<div>
<span>
```

Semantic HTML uses descriptive elements like:

```html
<header>
<nav>
<main>
<footer>
```

### Benefits

- Better accessibility
- Better SEO
- Easier maintenance
- Improved readability
- Better screen reader support

### Common Semantic Elements

| Element       | Purpose                      |
|---------------|------------------------------|
| `<header>`    | Introductory content         |
| `<nav>`       | Navigation links             |
| `<main>`      | Main page content            |
| `<section>`   | Groups related content       |
| `<article>`   | Independent content          |
| `<aside>`     | Related or secondary content |
| `<footer>`    | Footer information           |
| `<figure>`    | Self-contained media         |
| `<figcaption>` | Caption for a figure        |
| `<details>`   | Expandable content           |
| `<summary>`   | Heading for `<details>`      |
| `<dialog>`    | Dialog box or modal          |
| `<search>`    | Search section               |

---

# 1. `<header>`

### Purpose

Represents introductory content.

### Common Contents

- Logo
- Website title
- Navigation
- Search bar

### Example

```html
<header>
    <h1>My Website</h1>
</header>
```

> A page or section can have its own `<header>`.

---

# 2. `<nav>`

### Purpose

Represents major navigation links.

### Example

```html
<nav>
    <a href="#">Home</a>
    <a href="#">Courses</a>
    <a href="#">Contact</a>
</nav>
```

> Use `<nav>` only for major navigation.

---

# 3. `<main>`

### Purpose

Represents the primary content of the webpage.

### Rules

- Only **one** `<main>` per page.
- Excludes:
  - Header
  - Footer
  - Navigation
  - Sidebars

### Example

```html
<main>
    ...
</main>
```

---

# 4. `<article>`

### Purpose

Represents self-contained content that can stand alone.

### Common Uses

- Blog posts
- News articles
- Forum posts
- Product cards

### Example

```html
<article>
    <h2>HTML Basics</h2>
    <p>Learn Semantic HTML.</p>
</article>
```

> An `<article>` should make sense even if read independently.

---

# 5. `<section>`

### Purpose

Groups related content together.

### Example

```html
<section>
    <h2>Services</h2>
    <p>...</p>
</section>
```

> Every `<section>` should normally contain a heading.

---

# 6. `<aside>`

### Purpose

Represents related or secondary content.

### Common Uses

- Sidebar
- Advertisements
- Related articles
- Author bio

### Example

```html
<aside>
    <h3>Related Articles</h3>
</aside>
```

---

# 7. `<footer>`

### Purpose

Represents footer information.

### Common Contents

- Copyright
- Contact information
- Social links
- Sitemap

### Example

```html
<footer>
    © 2026 My Website
</footer>
```

> A page or section can have its own `<footer>`.

---

# 8. `<details>`

### Purpose

Creates an expandable and collapsible content section.

### Example

```html
<details>
    <summary>Read More</summary>
    <p>Semantic HTML improves accessibility.</p>
</details>
```

---

# 9. `<summary>`

### Purpose

Provides the visible heading for a `<details>` element.

### Example

```html
<summary>
    Click Here
</summary>
```

> Can only be used inside `<details>`.

---

# 10. `<dialog>`

### Purpose

Represents a dialog box or modal window.

### Example

```html
<dialog open>
    Welcome to HTML5!
</dialog>
```

### JavaScript Methods

```javascript
dialog.show();
dialog.showModal();
dialog.close();
```

Supported in modern browsers.

---

# 11. `<search>`

### Purpose

Represents a search section.

### Example

```html
<search>
    <form>
        <input
            type="search"
            placeholder="Search">
        <button>Search</button>
    </form>
</search>
```

### Notes

Previously developers used:

```html
<div class="search">
```

or

```html
<form role="search">
```

Now HTML provides:

```html
<search>
```

> Browser support is still growing.

---

# 12. `<figure>`

### Purpose

Represents self-contained media.

### Common Uses

- Images
- Charts
- Diagrams
- Code snippets
- Tables

### Example

```html
<figure>
    <img
        src="logo.png"
        alt="HTML Logo">
</figure>
```

Usually paired with `<figcaption>`.

---

# 13. `<figcaption>`

### Purpose

Provides a caption for a `<figure>`.

### Example

```html
<figure>
    <img
        src="logo.png"
        alt="HTML Logo">

    <figcaption>
        HTML5 Official Logo
    </figcaption>

</figure>
```

> Can appear before or after the media.

---

# Semantic Layout

```html
<body>
    <header></header>
    <nav></nav>
    <main>
        <section>
            <article></article>
        </section>
        <aside></aside>
        <figure>
            <figcaption></figcaption>
        </figure>
        <details>
            <summary></summary>
        </details>
    </main>
    <footer></footer>
</body>
```

---

# Semantic vs Non-Semantic HTML

## Semantic Elements

* Describe the meaning of content.
* Improve accessibility.
* Improve SEO.
* Easier to understand.
* Help screen readers.
* Better code organization.

Example:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

<br>

## Non-Semantic Elements

* Do not describe content.
* Used mainly for layout and styling.
* Require classes or IDs to indicate purpose.
* Less meaningful for search engines.
* Less helpful for accessibility tools.

Example:

```html
<div>
<span>
```

<br>

## Semantic vs Non-Semantic Example

### Non-Semantic Version

```html
<div class="header">
    <div class="navigation">
        <a href="#">Home</a>
        <a href="#">Courses</a>
    </div>
</div>

<div class="content">
    <div class="post">
        HTML Tutorial
    </div>
</div>

<div class="footer">
    Copyright 2026
</div>
```

### Semantic Version

```html
<header>
    <nav>
        <a href="#">Home</a>
        <a href="#">Courses</a>
    </nav>
</header>

<main>
    <article>
        HTML Tutorial
    </article>
</main>

<footer>
    Copyright 2026
</footer>
```

The second version clearly communicates the role of each section without relying on class names.

<br>

## Semantic vs Non-Semantic Comparison

| Feature               | Semantic HTML                              | Non-Semantic HTML                  |
| --------------------- | ------------------------------------------ | ---------------------------------- |
| Meaning               | Clearly describes content                  | Does not describe content          |
| Examples              | `<header>`, `<nav>`, `<main>`, `<article>` | `<div>`, `<span>`                  |
| SEO                   | Better                                     | Poorer                             |
| Accessibility         | Better                                     | Poorer                             |
| Screen Readers        | Easy to understand                         | Difficult without extra attributes |
| Readability           | High                                       | Lower                              |
| Maintainability       | Easier                                     | Harder                             |
| Browser Understanding | Knows element purpose                      | Only sees a generic container      |
| Typical Use           | Structure and meaning                      | Layout, styling, JavaScript        |

---

# `<div>` vs `<section>`

| `<div>`                 | `<section>`                             |
| ----------------------- | --------------------------------------- |
| Generic container       | Groups related content                  |
| No semantic meaning     | Semantic meaning                        |
| Mainly for layout       | Organizes content into logical sections |
| Heading not required    | Usually contains a heading              |
| Better for CSS wrappers | Better for document structure           |

Example:

```html
<!-- Good -->
<section>
    <h2>Services</h2>
    <p>We build websites.</p>
</section>

<!-- Good -->
<div class="grid-container">
    ...
</div>
```

---

# `<span>` vs Semantic Inline Elements

| `<span>`                 | Semantic Alternative                                             |
| ------------------------ | ---------------------------------------------------------------- |
| Generic inline container | `<strong>`, `<em>`, `<mark>`, `<code>`, `<time>`, `<abbr>`, etc. |
| No meaning               | Conveys meaning                                                  |
| Used for styling         | Used when the content has semantic importance                    |

Example:

```html
<!-- Non-semantic -->
<span class="important">Warning!</span>

<!-- Semantic -->
<strong>Warning!</strong>
```

---

# Interview Questions

### Q1. What is Semantic HTML?

**Answer:** Using meaningful HTML elements that describe the purpose of their content.


### Q2. Why is Semantic HTML important?

**Answer:** It improves accessibility, SEO, readability, and maintainability.

### Q3. What is the difference between `<section>` and `<article>`?

**Answer:**
- `<section>` groups related content.
- `<article>` represents independent, self-contained content.

### Q4. How many `<main>` elements should a page have?

**Answer:** Only one.

### Q5. What is the purpose of the `<nav>` element?

**Answer:** It contains major navigation links.

### Q6. What is the purpose of the `<aside>` element?

**Answer:** It displays related or secondary content such as sidebars, advertisements, or related articles.

### Q7. What is the difference between `<figure>` and `<figcaption>`?

**Answer:**
- `<figure>` contains self-contained media.
- `<figcaption>` provides its caption.

### Q8. What is the purpose of `<details>` and `<summary>`?

**Answer:** They create expandable and collapsible content sections.

### Q9. What is the `<dialog>` element used for?

**Answer:** To create dialog boxes or modal windows.

### Q10. What is the purpose of the `<search>` element?

**Answer:** It semantically identifies a search section or search interface.

### Q11. Can a page have multiple `<header>` and `<footer>` elements?

**Answer:** Yes. Individual sections and articles can also have their own `<header>` and `<footer>`.

### Q12. Which elements are considered non-semantic?

**Answer:** `<div>` and `<span>`.

### Q13. What is Non-Semantic HTML?

**Answer:** Non-semantic HTML uses generic elements like `<div>` and `<span>` that do not describe the purpose or meaning of their content.

### Q14. When should you use `<div>`?

**Answer:** Use `<div>` when there is no suitable semantic element, typically for layout, styling, or grouping content.

### Q15. What is the difference between `<div>` and `<section>`?

**Answer:**

* `<div>` is a generic container with no semantic meaning.
* `<section>` groups related content and usually includes a heading.

### Q16. What is the difference between `<span>` and `<strong>`?

**Answer:**

* `<span>` is a generic inline container with no semantic meaning.
* `<strong>` indicates that the enclosed text is of strong importance and is typically announced as such by assistive technologies.

---

### Memory Tip

* **Semantic = Meaning** (describes *what* the content is)
* **Non-Semantic = Container** (only groups or styles content)

**Rule of thumb:** Use the most appropriate semantic element first. If none fits the content, use `<div>` (block-level) or `<span>` (inline).


### Best Practices

- Use semantic elements whenever possible.
- Use only one `<main>` element.
- Give every `<section>` a heading.
- Use `<article>` for independent content.
- Use `<figure>` with `<figcaption>`.
- Use `<nav>` only for major navigation.
- Prefer semantic elements over generic `<div>` and `<span>`.


### Key Takeaways

- Semantic HTML describes the purpose of content.
- Search engines and screen readers understand semantic tags better.
- Use semantic tags whenever possible.
- Reserve `<div>` for layout or grouping when no semantic element is appropriate.
- A well-structured semantic page is easier to maintain, more accessible, and better for SEO.

### Quick Comparison

| Element | Best Used For |
|---------|---------------|
| `<header>` | Introductory content |
| `<nav>` | Navigation |
| `<main>` | Main content |
| `<section>` | Related content |
| `<article>` | Independent content |
| `<aside>` | Sidebar or related content |
| `<footer>` | Footer information |
| `<figure>` | Images, charts, diagrams |
| `<figcaption>` | Figure caption |
| `<details>` | Expandable content |
| `<summary>` | Expandable heading |
| `<dialog>` | Dialog box or modal |
| `<search>` | Search interface |

---