# HTML Lists
Lists are used to group related items together in a structured way.

## Benefits
- Better readability
- Semantic structure
- Improved accessibility
- Better SEO

## Types of HTML Lists

HTML provides three types of lists:

1. **Unordered List (`<ul>`)**
2. **Ordered List (`<ol>`)**
3. **Description List (`<dl>`)**

---

# 1. Unordered List (`<ul>`)

### Purpose
Creates a **bulleted** list where the order of items does not matter.

### Syntax

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

### Output

- HTML
- CSS
- JavaScript

### Default Bullet Style
- Disc (`•`)

### Common Uses
- Features
- Navigation menus
- Categories
- Shopping lists

---

# 2. Ordered List (`<ol>`)

### Purpose
Creates a **numbered** list where the sequence of items is important.

### Syntax

```html
<ol>
    <li>Wake Up</li>
    <li>Study</li>
    <li>Sleep</li>
</ol>
```

### Output

1. Wake Up
2. Study
3. Sleep

### Common Uses
- Instructions
- Recipes
- Algorithms
- Step-by-step guides

---

# 3. List Item (`<li>`)

### Purpose
Represents an individual item inside an **unordered** or **ordered** list.

### Syntax

```html
<li>Apple</li>
```

### Can Contain
- Text
- Images
- Links
- Tables
- Forms
- Other Lists (Nested Lists)

---

# 4. Description List (`<dl>`)

### Purpose
Displays terms along with their descriptions.

### Syntax

```html
<dl>
    <dt>HTML</dt>
    <dd>Markup Language</dd>

    <dt>CSS</dt>
    <dd>Styles Web Pages</dd>
</dl>
```

### Output

**HTML**  
: Markup Language

**CSS**  
: Styles Web Pages

### Common Uses
- Glossaries
- FAQs
- Dictionaries
- Definitions
- Product specifications

---

# 5. Description Term (`<dt>`)

### Purpose
Defines the **term** or **title** in a description list.

### Syntax

```html
<dt>HTML</dt>
```

---

# 6. Description Details (`<dd>`)

### Purpose
Defines the **description** of the corresponding term.

### Syntax

```html
<dd>HyperText Markup Language</dd>
```

---

# 7. Nested Lists

### Purpose
A list placed inside another list.

Useful for creating hierarchical structures.

### Syntax

```html
<ul>
    <li>
        Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>

    <li>
        Backend
        <ul>
            <li>Node.js</li>
            <li>Java</li>
        </ul>
    </li>
</ul>
```

### Common Uses
- Categories
- Navigation menus
- Folder structures
- Multi-level lists

---

## 8. `type` Attribute

### Purpose
Changes the numbering style of an ordered list.

### Values

| Value | Output     |
|-------|------------|
| `1`   | 1, 2, 3    |
| `A`   | A, B, C    |
| `a`   | a, b, c    |
| `I`   | I, II, III |
| `i`   | i, ii, iii |

### Example

```html
<ol type="A">
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
</ol>
```

<br>

## 9. `reversed` Attribute

### Purpose
Displays numbering in reverse order.

### Syntax

```html
<ol reversed>
    <li>Third</li>
    <li>Second</li>
    <li>First</li>
</ol>
```

### Output

3. Third
2. Second
1. First

<br>

## 10. `start` Attribute

### Purpose
Starts numbering from a specified value.

### Syntax

```html
<ol start="5">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
```

### Output

5. HTML
6. CSS
7. JavaScript

---

## Combining Attributes

Multiple attributes can be used together.

### Example

```html
<ol type="I" start="5" reversed>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
```

### Output

V. HTML  
IV. CSS  
III. JavaScript

---

## Ordered List Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `type`    | Changes numbering style | `<ol type="A">` |
| `start`   | Starts numbering from a custom value | `<ol start="5">` |
| `reversed`| Reverses numbering | `<ol reversed>` |

### Best Practices

- Use **`<ul>`** when order does **not** matter.
- Use **`<ol>`** when sequence **does** matter.
- Use **`<dl>`** for terms and definitions.
- Place **`<li>`** only inside `<ul>`, `<ol>`, or `<menu>`.
- Nest lists properly.
- Do not use lists only for indentation.
- Use CSS for styling instead of deprecated HTML attributes.

### Quick Comparison

| Feature       | `<ul>` | `<ol>` | `<dl>` |
|---------------|---------|---------|---------|
| Order Matters | ❌ | ✅ | ❌ |
| Bullets       | ✅ | ❌ | ❌ |
| Numbers       | ❌ | ✅ | ❌ |
| Terms & Definitions | ❌ | ❌ | ✅ |
| Contains `<li>` | ✅ | ✅ | ❌ |
| Contains `<dt>` & `<dd>` | ❌ | ❌ | ✅ |

---

# Interview Questions

### Q1. How many types of lists are available in HTML?

**Answer:** Three:
- `<ul>`
- `<ol>`
- `<dl>`

### Q2. What is the difference between `<ul>` and `<ol>`?

**Answer:**
- `<ul>` creates a bulleted (unordered) list.
- `<ol>` creates a numbered (ordered) list.

### Q3. Which element represents an individual list item?

**Answer:** `<li>`

### Q4. What is the purpose of a description list?

**Answer:** To display terms along with their corresponding descriptions.

### Q5. Which elements are used inside a `<dl>`?

**Answer:**
- `<dt>` – Description Term
- `<dd>` – Description Details

### Q6. What is a nested list?

**Answer:** A list placed inside another list.

### Q7. What does the `type` attribute do?

**Answer:** Changes the numbering style (`1`, `A`, `a`, `I`, `i`).

### Q8. What does the `reversed` attribute do?

**Answer:** Displays numbering in descending order.

### Q9. What does the `start` attribute do?

**Answer:** Starts numbering from a specified value.

### Q10. Can an `<li>` contain another list?

**Answer:** Yes. This is called a **nested list**.