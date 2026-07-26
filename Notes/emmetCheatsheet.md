# The Ultimate Emmet & Frontend Productivity Cheat Sheet

> Speed-only reference. No HTML/CSS teaching — just abbreviation → output.
> Works in VS Code, WebStorm, Sublime, Atom, Brackets (any Emmet-powered editor).
> Type the shortcut, press **Tab** (or **Enter**) to expand.

**Legend:** `Shortcut` → what you type · `Output` → what Emmet generates · `Why` → what it does · `Use case` → when reach for it.

---

## Table of Contents

1. [Core Syntax Operators](#1-core-syntax-operators)
2. [Text `{}`](#2-text-)
3. [Attributes `[]`](#3-attributes-)
4. [Classes & IDs](#4-classes--ids)
5. [Implicit Tag Names](#5-implicit-tag-names)
6. [Lorem Ipsum Generator](#6-lorem-ipsum-generator)
7. [Basic Element Shortcuts](#7-basic-element-shortcuts)
8. [Real-World Layout Recipes](#8-real-world-layout-recipes)
9. [Advanced Emmet Actions](#9-advanced-emmet-actions)
10. [CSS Abbreviation Engine — How It Works](#10-css-abbreviation-engine--how-it-works)
11. [CSS Abbreviation Reference Tables](#11-css-abbreviation-reference-tables)
12. [VS Code Productivity Shortcuts](#12-vs-code-productivity-shortcuts)
13. [Top 100 Shortcuts to Memorize](#13-top-100-emmet-shortcuts-to-memorize)

---

## 1. Core Syntax Operators

### Child `>`
```text
div>ul>li
```
Output
```html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```
**Why:** Nests each element inside the previous one.
**Use case:** Scaffolding nested structures — cards inside grids, list items inside menus — in one line instead of typing open/close tags manually.

---

### Sibling `+`
```text
header+main+footer
```
Output
```html
<header></header>
<main></main>
<footer></footer>
```
**Why:** Places elements next to each other at the same nesting level.
**Use case:** Laying out the skeleton of a page (`header+main+footer`) in a single keystroke sequence.

---

### Climb-up `^`
```text
div>ul>li^p
```
Output
```html
<div>
  <ul>
    <li></li>
  </ul>
  <p></p>
</div>
```
**Why:** Moves the insertion point one level up the tree before continuing, so the next element becomes a sibling of the parent instead of the last child.
**Use case:** Adding a caption or button after a nested list without retyping the whole chain. Stack `^^` to climb two levels, `^^^` for three, etc.

---

### Grouping `()`
```text
(div>h2+p)+footer
```
Output
```html
<div>
  <h2></h2>
  <p></p>
</div>
<footer></footer>
```
**Why:** Wraps a chain of operators so it's treated as one unit, letting you attach `+`, `^`, or `*` to the whole group instead of just the last element.
**Use case:** Repeating a whole compound block, e.g. `(div.card>img+h3+p)*3` — three complete cards, not three images.

---

### Multiplication `*`
```text
li*10
```
Output
```html
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
```
**Why:** Repeats the element N times.
**Use case:** Generating placeholder list items, table rows, or grid cards instantly — `section*5`, `tr*8`, `div.card*4`.

---

### Numbering `$`, `$$`, `$$$`
```text
li.item$*5
```
Output
```html
<li class="item1"></li>
<li class="item2"></li>
<li class="item3"></li>
<li class="item4"></li>
<li class="item5"></li>
```
```text
li.item$$*10
```
Output (first three shown)
```html
<li class="item01"></li>
<li class="item02"></li>
<li class="item03"></li>
```
**Why:** `$` inserts the current repetition index. Stacking `$` characters (`$$`, `$$$`) zero-pads the number to that width.
**Use case:** Auto-incrementing classes, IDs, or image filenames (`img[src=photo$.jpg]*5` → `photo1.jpg` … `photo5.jpg`) without manual renumbering.

---

### Reverse Numbering `@-`
```text
li.item$@-*5
```
Output
```html
<li class="item5"></li>
<li class="item4"></li>
<li class="item3"></li>
<li class="item2"></li>
<li class="item1"></li>
```
**Why:** Counts down instead of up.
**Use case:** Countdown UIs, leaderboard rows, reverse-chronological lists where item 1 must render last.

---

### Start Numbering `@N`
```text
li.item$@3*5
```
Output
```html
<li class="item3"></li>
<li class="item4"></li>
<li class="item5"></li>
<li class="item6"></li>
<li class="item7"></li>
```
**Why:** Sets the starting value of `$` instead of defaulting to 1. Combine with `@-` (`@-3`) to count down starting at 3.
**Use case:** Continuing a numbered sequence that starts mid-list (e.g., pagination that begins at page 3).

---

## 2. Text `{}`

```text
a{Click here}
```
Output
```html
<a href="">Click here</a>
```
```text
ul>li{Item $}*3
```
Output
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
**Why:** Inserts literal text content inside the element. `$` still works inside `{}` for numbered text.
**Use case:** Producing realistic placeholder copy for buttons, headings, and nav items without leaving the abbreviation line.

---

## 3. Attributes `[]`

```text
a[href="#" title="link"]
```
Output
```html
<a href="#" title="link"></a>
```
```text
img[src="" alt=""]
```
Output
```html
<img src="" alt="">
```
```text
input[type=text name=username]
```
Output
```html
<input type="text" name="username">
```
**Why:** Adds any attribute inside square brackets. Quotes are optional if the value has no spaces; multiple attributes are space-separated.
**Use case:** Scaffolding accessible, fully-attributed form fields and links in one abbreviation instead of tabbing through auto-complete for each attribute.

**Bonus — attribute stacking with `.` and `#` still applies:**
```text
input.form-control#email[type=email required]
```
Output
```html
<input type="email" required class="form-control" id="email">
```

---

## 4. Classes & IDs

```text
div.container
```
Output
```html
<div class="container"></div>
```
```text
div#app
```
Output
```html
<div id="app"></div>
```
```text
div.card.active
```
Output
```html
<div class="card active"></div>
```
```text
button.btn.primary.large
```
Output
```html
<button class="btn primary large"></button>
```
**Why:** `.` chains classes, `#` sets the ID. Order doesn't matter; Emmet reassembles them correctly.
**Use case:** Writing fully-classed BEM/utility-class markup (`div.card.card--featured`) as fast as you can type the class names.

---

## 5. Implicit Tag Names

```text
.container
```
Output
```html
<div class="container"></div>
```
```text
#app
```
Output
```html
<div id="app"></div>
```
```text
ul>.item
```
Output
```html
<ul>
  <li class="item"></li>
</ul>
```
```text
table>.row
```
Output
```html
<table>
  <tr class="row"></tr>
</table>
```
**Why:** If you start with `.` or `#` and skip the tag name, Emmet infers it — `div` by default, but context-aware inside `ul` (→`li`), `table`/`tbody` (→`tr`), `tr` (→`td`), `select` (→`option`), `optgroup` (→`option`).
**Use case:** Skipping the `div` keystrokes entirely — `.wrapper>.header+.body+.footer` is faster than typing `div.wrapper` three times.

---

## 6. Lorem Ipsum Generator

```text
lorem
```
Output (default ~30 words)
```html
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas...
```
```text
lorem10
```
Output
```html
Lorem ipsum dolor sit amet consectetur adipisicing elit voluptatum accusantium.
```
```text
lorem50
```
Output — 50-word paragraph
```text
lorem100
```
Output — 100-word paragraph

**Combined with structure:**
```text
p*3>lorem20
```
Output — three `<p>` tags, each with its own unique 20-word paragraph (not a copy-paste duplicate).

**Why:** Generates randomized, grammatically-plausible filler text of exactly N words.
**Use case:** Filling out mockups, card grids, and blog layouts with realistic-length body copy before real content exists — far better than repeating "text text text."

---

## 7. Basic Element Shortcuts

These are all identical to the tag name itself — Emmet's real speed gain is combining them, not the single tag. Quick reference for the elements that carry **default attributes** worth knowing:

| Shortcut | Output |
|---|---|
| `div` | `<div></div>` |
| `p` | `<p></p>` |
| `h1` | `<h1></h1>` |
| `ul` | `<ul></ul>` |
| `li` | `<li></li>` |
| `table` | `<table></table>` |
| `tr` | `<tr></tr>` |
| `td` | `<td></td>` |
| `img` | `<img src="" alt="">` |
| `a` | `<a href=""></a>` |
| `button` | `<button></button>` |
| `input` | `<input type="text">` |
| `form` | `<form action=""></form>` |
| `section` | `<section></section>` |
| `article` | `<article></article>` |
| `header` | `<header></header>` |
| `footer` | `<footer></footer>` |
| `nav` | `<nav></nav>` |
| `aside` | `<aside></aside>` |
| `main` | `<main></main>` |

**Why memorize these specifically:** `img`, `a`, and `input` auto-fill their most commonly-required attributes (`src`/`alt`, `href`, `type`) — that's free typing you don't have to do.
**Use case:** Any time you'd otherwise reach for a full attribute-typing pass on these five elements, just type the bare tag.

---

## 8. Real-World Layout Recipes

Full abbreviation → expected structure for the layouts you build daily. Type the shortcut, hit Tab, then fill in text/attributes.

### Navbar
```text
nav.navbar>.navbar-brand{Logo}+ul.navbar-nav>li.nav-item*4>a.nav-link{Link $}
```
Output
```html
<nav class="navbar">
  <div class="navbar-brand">Logo</div>
  <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link" href="">Link 1</a></li>
    <li class="nav-item"><a class="nav-link" href="">Link 2</a></li>
    <li class="nav-item"><a class="nav-link" href="">Link 3</a></li>
    <li class="nav-item"><a class="nav-link" href="">Link 4</a></li>
  </ul>
</nav>
```

### Hero Section
```text
section.hero>.container>h1{Headline}+p{Lorem ipsum tagline}+div.hero-actions>a.btn.btn-primary{Get Started}+a.btn.btn-outline{Learn More}
```
Output
```html
<section class="hero">
  <div class="container">
    <h1>Headline</h1>
    <p>Lorem ipsum tagline</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="">Get Started</a>
      <a class="btn btn-outline" href="">Learn More</a>
    </div>
  </div>
</section>
```

### Card Grid
```text
div.grid>div.card*6>img[src="https://picsum.photos/300?random=$"]+h3{Card $}+p>lorem10
```
Output (one card shown; repeats ×6 with incrementing `$`)
```html
<div class="grid">
  <div class="card">
    <img src="https://picsum.photos/300?random=1">
    <h3>Card 1</h3>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <!-- ...5 more, auto-numbered -->
</div>
```

### Login Form
```text
form.login-form>h2{Login}+label{Email}+input[type=email name=email]+label{Password}+input[type=password name=password]+button[type=submit]{Log In}
```
Output
```html
<form class="login-form" action="">
  <h2>Login</h2>
  <label>Email</label>
  <input type="email" name="email">
  <label>Password</label>
  <input type="password" name="password">
  <button type="submit">Log In</button>
</form>
```

### Registration Form
```text
form.register-form>(label{Full Name}+input[type=text name=fullname])+(label{Email}+input[type=email name=email])+(label{Password}+input[type=password name=password])+(label{Confirm Password}+input[type=password name=confirm])+button[type=submit]{Sign Up}
```
Output — labeled field pairs for name, email, password, confirm password, followed by a submit button (parenthesized groups keep each label+input pair together).

### Dashboard Shell
```text
div.dashboard>aside.sidebar>ul>li*5{Nav $}^^main.dashboard-main>header.topbar+section.widgets>div.widget*4
```
Output
```html
<div class="dashboard">
  <aside class="sidebar">
    <ul>
      <li>Nav 1</li>
      <li>Nav 2</li>
      <li>Nav 3</li>
      <li>Nav 4</li>
      <li>Nav 5</li>
    </ul>
  </aside>
  <main class="dashboard-main">
    <header class="topbar"></header>
    <section class="widgets">
      <div class="widget"></div>
      <div class="widget"></div>
      <div class="widget"></div>
      <div class="widget"></div>
    </section>
  </main>
</div>
```
**Note the double climb `^^`:** it exits both `li` and `ul` before attaching `main` as a sibling of `aside`.

### Sidebar
```text
aside.sidebar>h4{Menu}+ul.sidebar-list>li.sidebar-item*6>a{Item $}
```
Output — heading followed by 6 linked list items.

### Pricing Cards
```text
div.pricing>div.plan*3>h3{Plan $}+p.price{$$}+ul.features>li{Feature $}*4^^button{Choose Plan}
```
Output — 3 plan cards, each with a title, price, a 4-item feature list, and a CTA button (`^^` climbs out of `li` and `ul` back to `.plan` before the button).

### Blog Layout
```text
div.blog>article.post*3>h2{Post Title $}+p.meta{Date · Author}+p>lorem30+a{Read more}
```
Output — 3 blog post previews, each with title, meta line, a unique 30-word excerpt, and a "Read more" link.

### Portfolio Grid
```text
div.portfolio>figure.project*8>img[src="project$.jpg" alt="Project $"]+figcaption{Project $}
```
Output — 8 portfolio tiles with numbered image sources, alt text, and captions, all auto-numbered by the shared `$`.

### Gallery
```text
div.gallery>a.gallery-item*12>img[src="thumb$$.jpg" alt="Image $"]
```
Output — 12 lightbox-style thumbnails with zero-padded filenames (`thumb01.jpg` … `thumb12.jpg`).

### Footer
```text
footer.site-footer>div.footer-col*3>h4{Column $}+ul>li*4{Link $}^^^p.copyright{© 2026}
```
Output — 3 footer columns of links, followed by a copyright line as a sibling of the columns (`^^^` climbs out of `li`, `ul`, and `.footer-col`).

### Table
```text
table>thead>tr>th{Col $}*4^^tbody>tr*3>td{Cell}*4
```
Output
```html
<table>
  <thead>
    <tr>
      <th>Col 1</th>
      <th>Col 2</th>
      <th>Col 3</th>
      <th>Col 4</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr>
    <tr><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr>
    <tr><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr>
  </tbody>
</table>
```

### FAQ Accordion
```text
div.faq>div.faq-item*5>button.faq-question{Question $}+div.faq-answer>p>lorem15
```
Output — 5 collapsible FAQ blocks, each with a question button and an answer paragraph.

### Contact Form
```text
form.contact-form>(label{Name}+input[type=text name=name])+(label{Email}+input[type=email name=email])+(label{Message}+textarea[name=message])+button[type=submit]{Send Message}
```
Output — name, email, and message fields followed by a submit button.

---

## 9. Advanced Emmet Actions

These aren't typed abbreviations — they're editor **commands/keybindings** that operate on abbreviations or existing code. Available via Command Palette in VS Code (search "Emmet: ...").

| Action | What it does | Use case |
|---|---|---|
| **Wrap with Abbreviation** (`Shift+Alt+W` / `Cmd+Shift+A`... check keybinding) | Select existing text/lines, run the command, type an abbreviation — Emmet wraps the selection in that structure. E.g. select 3 lines of text, wrap with `ul>li*` and each line becomes an `<li>`. | Turning plain pasted text or existing markup into structured markup without retyping content. |
| **Balance Inward** | Selects the next-innermost tag pair from the cursor, expanding selection inward on repeat presses. | Precisely selecting a nested element without mouse-dragging. |
| **Balance Outward** | Selects the next-outermost tag pair, expanding selection outward on repeat presses. | Quickly selecting a whole parent block (e.g. an entire `<section>`) from a cursor deep inside it. |
| **Remove Tag** | Deletes the tag under the cursor but keeps its inner content, unwrapping it into the parent. | Stripping a redundant wrapper `<div>` without deleting the content inside it. |
| **Merge Lines** | Collapses a multi-line tag block onto a single line. | Condensing an auto-formatted block before copy-pasting into a tighter context (e.g. JSX one-liners). |
| **Split/Join Tag** | Toggles a self-closing tag (`<img/>`) between split (`<img></img>`) and joined (`<img/>`) form. | Fixing void-element syntax when switching between HTML and XML/JSX conventions. |
| **Toggle Comment** | Wraps/unwraps the current element or selection in `<!-- -->` (or `/* */` in CSS). | Quickly disabling a block during debugging without deleting it. |
| **Increment/Decrement Number** | With the cursor on a number, `Ctrl+Up`/`Ctrl+Down` (or `Cmd+`) bumps it by 1; add `Alt` for ±10, `Shift` for ±0.1. | Nudging a `z-index`, `margin`, or grid line number without retyping it. |
| **Evaluate Math Expression** | Select a math expression like `100/4+20`, run the command — Emmet replaces it with the computed result. | Doing quick layout math (column widths, spacing totals) inline without a calculator. |
| **Update Image Size** | With the cursor in an `<img>` tag pointing at a local file, Emmet reads the file and inserts `width`/`height` attributes automatically. | Preventing layout shift by auto-filling accurate image dimensions. |
| **Reflect CSS Value** | Updates all vendor-prefixed variants of a CSS value when you edit one (e.g. editing `-webkit-transform` also updates `transform`). | Keeping cross-browser-prefixed rules in sync while editing legacy CSS. |
| **CSS Abbreviation Expansion (in CSS/SCSS/LESS files)** | Same `property+value` abbreviation engine as HTML, but scoped to declarations — see Section 10/11. | Writing full stylesheets at the same speed as markup. |

### Filters
Append `|filtername` to an abbreviation to post-process the output.

| Filter | Shortcut | Effect |
|---|---|---|
| Comment | `div.item\|c` | Wraps output and adds a trailing `<!-- .item -->` comment referencing the class/id — useful for marking closing tags in deeply nested markup. |
| BEM | `.block\|bem>.block__el` | Interprets `&` and nested classes using BEM naming conventions when generating class names. |
| XSL | `template\|xsl` | Marks output as XSL, affecting attribute quoting rules for XSL-specific syntax. |
| Trim | `\|t` | Strips list markers (`-`, `*`, numbers) from pasted/wrapped text before inserting it as content. |

### Escaping Characters
```text
div{\{not a tag\}}
```
Output
```html
<div>{not a tag}</div>
```
**Why:** Prefix a special character (`{`, `}`, `[`, `]`, `(`, `)`, `+`, `>`, `^`, `$`, `#`, `.`) with `\` to insert it literally instead of triggering Emmet syntax.
**Use case:** Writing literal curly braces (e.g., for a templating language example) inside Emmet text content.

### Nested Numbering
```text
div.section$>div.card$$*3
```
Output
```html
<div class="section1">
  <div class="card01"></div>
  <div class="card02"></div>
  <div class="card03"></div>
</div>
```
**Why:** Each `$` scope resolves independently to its own repeat context.
**Use case:** Generating multi-level numbered structures (sections containing numbered sub-items) in one abbreviation.

### Nested Groups
```text
div.wrapper>(header>nav>ul>li*3)+(main>(section.left+section.right))+footer
```
**Why:** Groups can nest inside groups, letting you build arbitrarily complex trees in a single line.
**Use case:** Full-page skeletons written once, without breaking the abbreviation into multiple expand steps.

### Multiple Attributes
```text
button[type=submit disabled data-action=save aria-label="Save changes"]
```
Output
```html
<button type="submit" disabled data-action="save" aria-label="Save changes"></button>
```
**Why:** Space-separated attributes inside one `[]` block, mixing valueless (`disabled`), unquoted, and quoted-with-spaces values.
**Use case:** Fully accessible, data-attributed interactive elements in one pass.

---

## 10. CSS Abbreviation Engine — How It Works

CSS abbreviations aren't a fixed lookup table of every property — they're generated by a **resolver**. Understanding the four rules below means you can guess almost any abbreviation correctly instead of memorizing hundreds of them.

1. **Value bound:** the first digit or hyphen in the abbreviation marks where the property name ends and the value begins. `m10` → property `m` (margin) + value `10`.
2. **Units:** integer values default to `px` (`m10` → `margin: 10px;`); float values default to `em` (`m1.5` → `margin: 1.5em;`). Type a unit explicitly to override (`m1.5ex`, `w100p` where `p`→`%`, `e`→`em`, `x`→`ex`).
3. **Multiple values:** separate with hyphens once units are implicit — `m10-20` → `margin: 10px 20px;`. Negative values: hyphen before the first, double-hyphen before the rest — `m-10--20` → `margin: -10px -20px;`.
4. **Fuzzy search:** unmatched abbreviations are matched to the closest known property — `ov:h`, `ov-h`, `ovh`, and `oh` can all resolve to `overflow: hidden;`. If nothing matches, Emmet falls back to treating your text as a literal property name.

**Colors:** `c#3` → `color: #333;`, `bg#f1f1f1` → `background: #f1f1f1;`. `#` acts as its own separator, so `bd5#0s` → `border: 5px #000 solid;` (the `s` alias for `solid` doesn't need a hyphen since it isn't a hex digit).

**Unitless properties:** `line-height`, `opacity`, `font-weight`, and `z-index` never get a `px` suffix. `lh2` → `line-height: 2;`, `fw400` → `font-weight: 400;`. **Important:** because there's no automatic percent-to-decimal conversion, `op50` literally produces `opacity: 50;` (invalid) — for 50% opacity type `op.5` or `op0.5` → `opacity: 0.5;`.

**`!important`:** append `!` to any CSS abbreviation. `m10!` → `margin: 10px !important;`.

**Vendor prefixes:** prefix with `-` to get all known vendor-prefixed variants of a property. `-bdrs10` outputs `-webkit-border-radius`, `-moz-border-radius`, and `border-radius` together. Restrict to specific vendors with letters: `-wm-bdrs10` → webkit + moz only.

---

## 11. CSS Abbreviation Reference Tables

> These are Emmet's built-in snippet keys. Thanks to fuzzy search, close variants of most of these also resolve correctly — if one doesn't expand as shown, try a slightly different spelling before typing the property out in full.

### Spacing (Margin & Padding)

| Shortcut | Output |
|---|---|
| `m10` | `margin: 10px;` |
| `m10-20` | `margin: 10px 20px;` |
| `mt20` | `margin-top: 20px;` |
| `mr10` | `margin-right: 10px;` |
| `mb5` | `margin-bottom: 5px;` |
| `ml15` | `margin-left: 15px;` |
| `m:a` | `margin: auto;` |
| `p10` | `padding: 10px;` |
| `pt20` | `padding-top: 20px;` |
| `pr10` | `padding-right: 10px;` |
| `pb5` | `padding-bottom: 5px;` |
| `pl15` | `padding-left: 15px;` |

**On `mx`/`my`:** Emmet has no dedicated horizontal/vertical shorthand (that convention is from Tailwind, not Emmet). To get the same result: `m0-20` → `margin: 0px 20px;` sets vertical `0` and horizontal `20px` in one abbreviation (functionally "mx20 my0"); `m10-0` → `margin: 10px 0px;` covers "my10 mx0". For asymmetric horizontal-only margins, it's still fastest to type `ml`/`mr` separately.

### Sizing

| Shortcut | Output |
|---|---|
| `w100` | `width: 100px;` |
| `w100p` | `width: 100%;` |
| `w100vh`→ n/a, use | `h100vh` → `height: 100vh;` |
| `h50` | `height: 50px;` |
| `maw1140` | `max-width: 1140px;` |
| `mah600` | `max-height: 600px;` |
| `miw200` | `min-width: 200px;` |
| `mih100` | `min-height: 100px;` |

### Background & Color

| Shortcut | Output |
|---|---|
| `bg` | `background: ;` |
| `bg#fff` | `background: #fff;` |
| `bgc#000` | `background-color: #000;` |
| `bgi` | `background-image: url();` |
| `bgr` | `background-repeat: repeat;` |
| `bgr:n` | `background-repeat: no-repeat;` |
| `bgr:x` | `background-repeat: repeat-x;` |
| `bgr:y` | `background-repeat: repeat-y;` |
| `bgp` | `background-position: ;` |
| `bga` | `background-attachment: ;` |
| `c` | `color: ;` |
| `c#3` | `color: #333;` |

### Typography

| Shortcut | Output |
|---|---|
| `fz20` | `font-size: 20px;` |
| `fw700` | `font-weight: 700;` |
| `fw:b` | `font-weight: bold;` |
| `ff` | `font-family: ;` |
| `ta:c` | `text-align: center;` |
| `ta:l` | `text-align: left;` |
| `ta:r` | `text-align: right;` |
| `ta:j` | `text-align: justify;` |
| `td:u` | `text-decoration: underline;` |
| `td:n` | `text-decoration: none;` |
| `td:l` | `text-decoration: line-through;` |
| `tt:u` | `text-transform: uppercase;` |
| `tt:l` | `text-transform: lowercase;` |
| `tt:c` | `text-transform: capitalize;` |
| `lh2` | `line-height: 2;` |
| `lts2` | `letter-spacing: 2px;` |

> Note: the widely-typed shorthand `ls` for letter-spacing is not the canonical Emmet key — the built-in snippet is `lts`. `ls` may still resolve via fuzzy search depending on editor version; `lts` always works.

### Border, Radius & Shadow

| Shortcut | Output |
|---|---|
| `bd` | `border: ;` |
| `bd1#000s` | `border: 1px #000 solid;` |
| `bd1-s#f.5` | `border: 1px solid rgba(255,255,255,0.5);` |
| `bdrs10` | `border-radius: 10px;` |
| `bdrs50%` | `border-radius: 50%;` |
| `bxsh` | `box-shadow: inset hoff voff blur color;` (placeholder tabstops) |
| `bxsh:n` | `box-shadow: none;` |
| `bxz` / `bxz:bb` | `box-sizing: border-box;` |
| `bxz:cb` | `box-sizing: content-box;` |

> Note: `br10` (as often typed casually) is **not** the official abbreviation for border-radius — that's `bdrs10`. Some setups fuzzy-match `br` to something else entirely, so type `bdrs` to be safe.

### Opacity & Position

| Shortcut | Output |
|---|---|
| `op.5` | `opacity: 0.5;` |
| `op1` | `opacity: 1;` |
| `pos:r` | `position: relative;` |
| `pos:a` | `position: absolute;` |
| `pos:f` | `position: fixed;` |
| `pos:s` | `position: static;` |
| `t0` | `top: 0px;` |
| `l0` | `left: 0px;` |
| `r0` | `right: 0px;` |
| `b0` | `bottom: 0px;` |

### Display

| Shortcut | Output |
|---|---|
| `d:f` | `display: flex;` |
| `d:g` | `display: grid;` |
| `d:n` | `display: none;` |
| `d:b` | `display: block;` |
| `d:i` | `display: inline;` |
| `d:ib` | `display: inline-block;` |
| `d:if` | `display: inline-flex;` |

### Flexbox

| Shortcut | Output |
|---|---|
| `jc:c` | `justify-content: center;` |
| `jc:sb` | `justify-content: space-between;` |
| `jc:sa` | `justify-content: space-around;` |
| `jc:fs` | `justify-content: flex-start;` |
| `jc:fe` | `justify-content: flex-end;` |
| `ai:c` | `align-items: center;` |
| `ai:fs` | `align-items: flex-start;` |
| `ai:fe` | `align-items: flex-end;` |
| `fd:c` | `flex-direction: column;` |
| `fd:r` | `flex-direction: row;` |
| `g20` | `gap: 20px;` |
| `ac:c` | `align-content: center;` |
| `as:c` | `align-self: center;` |
| `ord1` | `order: 1;` |
| `flx1` | `flex: 1;` |

> Note: `fw:w` for flex-wrap is a common point of confusion — `fw` is already claimed by `font-weight` (`fw700` above). Flex-wrap doesn't have a clean short alias in the default snippet set; type `flex-wrap:wrap` or check your editor's autocomplete rather than relying on `fw`.

### Grid

| Shortcut | Output |
|---|---|
| `d:g` | `display: grid;` |
| `gtc` | `grid-template-columns: ;` |
| `gtr` | `grid-template-rows: ;` |
| `gc` | `grid-column: ;` |
| `gc1` | `grid-column: 1;` |
| `gr` | `grid-row: ;` |
| `ga` | `grid-area: ;` |
| `g20` | `gap: 20px;` |

> Note: `place-items` and `place-content` are newer CSS shorthand properties added after Emmet's default snippet set was last revised in most distributions — typing them out in full (`place-items:center`) already works since an unmatched abbreviation that exactly equals a real property name is used as-is.

### Overflow, Cursor & Misc

| Shortcut | Output |
|---|---|
| `ov:h` | `overflow: hidden;` |
| `ov:v` | `overflow: visible;` |
| `ov:s` | `overflow: scroll;` |
| `ov:a` | `overflow: auto;` |
| `ovx:h` | `overflow-x: hidden;` |
| `ovy:s` | `overflow-y: scroll;` |
| `cur:p` | `cursor: pointer;` |
| `cur:d` | `cursor: default;` |
| `cur:t` | `cursor: text;` |
| `z10` | `z-index: 10;` |

### Transition, Transform & Animation

| Shortcut | Output |
|---|---|
| `trs` | `transition: prop time;` |
| `trs.3s` | `transition: .3s;` |
| `trsde` | `transition-delay: time;` |
| `trsp` | `transition-property: prop;` |
| `trf` | `transform: ;` |
| `trf:r` | `transform: rotate(angle);` |
| `trf:sc` | `transform: scale(x, y);` |
| `trf:t` | `transform: translate(x, y);` |
| `trf:skx` | `transform: skewX(angle);` |
| `trfo` | `transform-origin: ;` |
| `anim` | `animation: ;` |

---

## 12. VS Code Productivity Shortcuts

Mac keys in parentheses.

| Action | Windows/Linux | Mac | Why it's fast |
|---|---|---|---|
| **Expand Abbreviation** | `Tab` | `Tab` | The core Emmet trigger — the entire point of this cheat sheet. |
| **Wrap with Abbreviation** | `Ctrl+Shift+P` → "Emmet: Wrap with Abbreviation" | `Cmd+Shift+P` → same | Turns selected lines/text into structured markup after the fact. |
| **Rename Tag** | `Ctrl+Shift+P` → "Rename Tag" (or use Linked Editing below) | same | Renames both opening and closing tags together — no risk of a mismatched pair. |
| **Linked Editing** (`editor.linkedEditing: true`) | Automatic once enabled | Automatic | Edit an opening tag name and the closing tag updates live, with zero extra command. |
| **Multi-cursor: add cursor above/below** | `Ctrl+Alt+Up/Down` | `Cmd+Option+Up/Down` | Edit N identical lines (e.g., a list of class names) simultaneously. |
| **Multi-cursor: select next match** | `Ctrl+D` | `Cmd+D` | Incrementally select every occurrence of the word under the cursor to rename them all at once. |
| **Multi-cursor: select all matches** | `Ctrl+Shift+L` | `Cmd+Shift+L` | Turns every instance of a repeated string in the file into an editable cursor in one keystroke. |
| **Column (box) selection** | `Shift+Alt+drag` | `Shift+Option+drag` | Selects a rectangular block across lines — ideal for editing a column of values (e.g., a list of numeric CSS values). |
| **Duplicate Line** | `Shift+Alt+Down/Up` | `Shift+Option+Down/Up` | Clones the current line directly below/above — faster than copy-paste for repeating a markup line before customizing it. |
| **Move Line Up/Down** | `Alt+Up/Down` | `Option+Up/Down` | Reorders elements (swap two `<li>`s, reorder CSS declarations) without cut-and-paste. |
| **Go to Symbol in File** | `Ctrl+Shift+O` | `Cmd+Shift+O` | Jumps straight to a specific selector, function, or component name in a long file. |
| **Go to Matching Bracket** | `Ctrl+Shift+\` | `Cmd+Shift+\` | Jumps between an opening and closing brace/bracket/tag — confirms nesting is correct in deeply indented code. |
| **Balance Inward/Outward** (Emmet) | `Ctrl+Shift+P` → "Emmet: Balance (inward/outward)" | same | Expands or contracts the current selection tag-by-tag — see Section 9. |
| **Toggle Line Comment** | `Ctrl+/` | `Cmd+/` | Comments/uncomments the current line or selection instantly. |
| **Format Document** | `Shift+Alt+F` | `Shift+Option+F` | Auto-indents and cleans up whitespace after a big Emmet expansion. |

---

## 13. Top 100 Emmet Shortcuts to Memorize

A working "muscle memory" set — structure, layout, and CSS combined. If you know these 100, you're faster than 95% of developers typing raw HTML/CSS.

**Structure & Operators (1–20)**
1. `div` → `<div></div>`
2. `.classname` → `<div class="classname"></div>`
3. `#idname` → `<div id="idname"></div>`
4. `div.a.b` → multiple classes
5. `div>p` → child
6. `div+div` → sibling
7. `div>p^span` → climb up one level
8. `div>p^^span` → climb up two levels
9. `(div>p)+span` → grouping
10. `li*5` → multiplication
11. `li.item$*5` → numbering
12. `li.item$$*10` → zero-padded numbering
13. `li.item$@-*5` → reverse numbering
14. `li.item$@3*5` → custom start number
15. `a{text}` → text content
16. `a[href="#"]` → attributes
17. `img[src="" alt=""]` → multi-attribute
18. `input[type=text]` → unquoted attribute value
19. `lorem` → filler paragraph
20. `lorem20` → filler with word count

**HTML Elements Worth Auto-Completing (21–40)**
21. `ul>li*3`
22. `table>tr*3>td*3`
23. `form>input+button`
24. `nav>ul>li*4>a`
25. `header+main+footer`
26. `section.hero>h1+p`
27. `select>option*3`
28. `figure>img+figcaption`
29. `label+input`
30. `button[type=submit]`
31. `a.btn.btn-primary{Click}`
32. `div.card>img+h3+p`
33. `dl>dt+dd`
34. `article>h2+p*2`
35. `aside.sidebar>ul>li*5`
36. `footer>p{© 2026}`
37. `textarea[name=message]`
38. `input:email` (input type alias)
39. `input:password` (input type alias)
40. `input:checkbox` (input type alias)

**Layout Recipes (41–55)**
41. `nav.navbar>ul>li*4>a`
42. `div.grid>div.card*6`
43. `form.login-form>input*2+button`
44. `div.dashboard>aside+main`
45. `div.pricing>div.plan*3`
46. `div.blog>article*3`
47. `div.portfolio>figure*8`
48. `div.gallery>a*12>img`
49. `footer>div.col*3`
50. `table>thead>tr>th*4^^tbody>tr*3>td*4`
51. `div.faq>div*5>button+div`
52. `form.contact-form>input*2+textarea+button`
53. `section.hero>.container>h1+p+a.btn`
54. `div.wrapper>(header+main+footer)`
55. `ul.nav>li*5>a{Item $}`

**CSS — Spacing & Sizing (56–65)**
56. `m10` → `margin: 10px;`
57. `mt20` → `margin-top: 20px;`
58. `p10` → `padding: 10px;`
59. `pt20` → `padding-top: 20px;`
60. `m10-20` → multi-value margin
61. `m:a` → `margin: auto;`
62. `w100p` → `width: 100%;`
63. `h100vh` → `height: 100vh;`
64. `maw1140` → `max-width: 1140px;`
65. `mih100vh` → `min-height: 100vh;`

**CSS — Typography & Color (66–75)**
66. `fz20` → `font-size: 20px;`
67. `fw700` → `font-weight: 700;`
68. `ff` → `font-family: ;`
69. `ta:c` → `text-align: center;`
70. `td:n` → `text-decoration: none;`
71. `tt:u` → `text-transform: uppercase;`
72. `lh2` → `line-height: 2;`
73. `c#333` → `color: #333;`
74. `bgc#fff` → `background-color: #fff;`
75. `bg#f1f1f1` → `background: #f1f1f1;`

**CSS — Border, Shadow, Position (76–85)**
76. `bdrs10` → `border-radius: 10px;`
77. `bdrs50%` → circular radius
78. `bd1#000s` → `border: 1px #000 solid;`
79. `bxsh:n` → `box-shadow: none;`
80. `bxz:bb` → `box-sizing: border-box;`
81. `pos:r` → `position: relative;`
82. `pos:a` → `position: absolute;`
83. `t0` → `top: 0px;`
84. `op.5` → `opacity: 0.5;`
85. `z10` → `z-index: 10;`

**CSS — Flexbox & Grid (86–95)**
86. `d:f` → `display: flex;`
87. `d:g` → `display: grid;`
88. `jc:c` → `justify-content: center;`
89. `jc:sb` → `justify-content: space-between;`
90. `ai:c` → `align-items: center;`
91. `fd:c` → `flex-direction: column;`
92. `g20` → `gap: 20px;`
93. `gtc` → `grid-template-columns: ;`
94. `flx1` → `flex: 1;`
95. `ord1` → `order: 1;`

**Editor Actions (96–100)**
96. `Tab` → Expand Abbreviation
97. Wrap with Abbreviation (Command Palette)
98. `Ctrl/Cmd+D` → select next match (multi-cursor)
99. `Shift+Alt/Option+Down` → duplicate line
100. `Ctrl/Cmd+/` → toggle comment

---

*Reference compiled from Emmet's official documentation (docs.emmet.io) and its published CSS/HTML snippet definitions. Emmet's fuzzy-search resolver means many close spelling variants of the CSS abbreviations above will also work — if one doesn't expand as expected, try a nearby spelling before typing the property in full.*
