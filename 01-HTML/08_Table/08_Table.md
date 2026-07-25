# HTML Tables

The **`<table>`** element is used to display **tabular data** (data arranged in rows and columns).

> **Tables should only be used for tabular data, not for webpage layouts.**


### Benefits

- Structured data
- Better readability
- Easy comparison
- Improved accessibility


### Main Table Elements

| Element | Purpose |
|---------|---------|
| `<table>` | Creates a table |
| `<tr>` | Table row |
| `<td>` | Table data cell |
| `<th>` | Table header cell |
| `<thead>` | Groups header rows |
| `<tbody>` | Groups body rows |
| `<tfoot>` | Groups footer rows |
| `<caption>` | Table title |
| `<colgroup>` | Groups columns |
| `<col>` | Defines column properties |

---

# Basic Table Structure

```html
<table>
    <caption>Student Details</caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Priyanshu</td>
            <td>20</td>
        </tr>
    </tbody>
</table>
```

---

# 1. `<table>`

### Purpose

Creates a table.

### Syntax

```html
<table>
    ...
</table>
```

Contains all table-related elements.

---

# 2. `<tr>`

### Purpose

Represents one table row.

### Example

```html
<tr>
    <td>HTML</td>
</tr>
```

---

# 3. `<td>`

### Purpose

Represents a table data cell.

### Example

```html
<td>HTML</td>
```

Contains normal table data.

---

# 4. `<th>`

### Purpose

Represents a table header cell.

### Default Style

- Bold
- Center aligned

### Example

```html
<th>Name</th>
```

### Accessibility

```html
<th scope="col">Name</th>

<th scope="row">Priyanshu</th>
```

---

# 5. `<thead>`

### Purpose

Groups the table header rows.

### Example

```html
<thead>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
</thead>
```

### Benefits

- Better accessibility
- Improved table structure

---

# 6. `<tbody>`

### Purpose

Groups the main content of the table.

### Example

```html
<tbody>

    <tr>
        <td>Priyanshu</td>
        <td>20</td>
    </tr>

</tbody>
```

> A table can contain multiple `<tbody>` elements.

---

# 7. `<tfoot>`

### Purpose

Groups the footer rows.

Usually contains totals or summaries.

### Example

```html
<tfoot>

    <tr>
        <td>Total</td>
        <td>100</td>
    </tr>

</tfoot>
```

---

# 8. `<caption>`

### Purpose

Provides a title for the table.

### Example

```html
<table>

    <caption>Employee List</caption>

</table>
```

> It should be the **first child** inside `<table>`.

---

# 9. `<colgroup>`

### Purpose

Groups one or more columns for styling.

### Example

```html
<colgroup>
    <col>
    <col>
</colgroup>
```

Used together with `<col>`.

---

# 10. `<col>`

### Purpose

Defines properties for individual columns.

### Example

```html
<col
    style="background:#eee">
```

### Common Uses

- Column width
- Background color
- Visibility

---

# `rowspan` Attribute

### Purpose

Allows one cell to span multiple rows.

### Example

```html
<td rowspan="2">
    HTML
</td>
```

The cell occupies **2 rows**.

---

# `colspan` Attribute

### Purpose

Allows one cell to span multiple columns.

### Example

```html
<td colspan="3">
    Total
</td>
```

The cell occupies **3 columns**.

---

# Accessibility

### Use `<caption>`

Provides a title for the table.

<br>

### Use `<th>` for Headers

Avoid using `<td>` for header cells.

<br>

### Use `scope`

#### Column Header

```html
<th scope="col">
    Name
</th>
```

#### Row Header

```html
<th scope="row">
    Priyanshu
</th>
```

### Benefits

- Better screen reader support
- Improved accessibility
- Easier navigation

---

## Responsive Tables

Large tables may overflow on small screens.

### CSS

```css
.table-container {
    overflow-x: auto;
}
```

### HTML

```html
<div class="table-container">

    <table>
        ...
    </table>

</div>
```

### Benefits

- Horizontal scrolling
- Mobile friendly
- Better user experience

---

# Complete Table Structure

```html
<table>
    <caption>
        Student Details
    </caption>

    <colgroup>
        <col>
        <col>
    </colgroup>

    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Priyanshu</td>
            <td>20</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <td>Total</td>
            <td>1 Student</td>
        </tr>
    </tfoot>

</table>
```

---

## Table Attributes

| Attribute | Purpose |
|-----------|---------|
| `rowspan` | Spans multiple rows |
| `colspan` | Spans multiple columns |
| `scope` | Improves accessibility for `<th>` |

### Deprecated Table Attributes

These attributes are **deprecated** and should be replaced with CSS.

| Deprecated | Use CSS Instead |
|------------|-----------------|
| `align` | `text-align` |
| `bgcolor` | `background-color` |
| `border` | `border` |
| `width` | `width` |
| `cellpadding` | `padding` |
| `cellspacing` | `border-spacing` |
| `frame` | CSS borders |
| `rules` | CSS borders |

<br>

### Best Practices

- Use tables only for tabular data.
- Never use tables for webpage layouts.
- Always include a `<caption>`.
- Use `<thead>`, `<tbody>`, and `<tfoot>`.
- Use `<th>` for header cells.
- Add `scope` attributes for accessibility.
- Wrap large tables in a scrollable container.
- Keep the table structure simple.
- Use CSS for styling instead of deprecated attributes.

<br>

## Quick Comparison

| Element | Purpose |
|---------|---------|
| `<table>` | Creates a table |
| `<tr>` | Table row |
| `<td>` | Table data |
| `<th>` | Table header |
| `<thead>` | Header section |
| `<tbody>` | Body section |
| `<tfoot>` | Footer section |
| `<caption>` | Table title |
| `<colgroup>` | Groups columns |
| `<col>` | Column styling |

---

## Interview Questions

### Q1. Which HTML element creates a table?

**Answer:** `<table>`


### Q2. What is the purpose of the `<tr>` element?

**Answer:** It defines a table row.



### Q3. What is the difference between `<td>` and `<th>`?

**Answer:**
- `<td>` contains regular table data.
- `<th>` represents a header cell with semantic meaning.


### Q4. What is the purpose of the `<thead>` element?

**Answer:** It groups the header rows of a table.


### Q5. Can a table have multiple `<tbody>` elements?

**Answer:** Yes. HTML allows multiple `<tbody>` sections.


### Q6. What is the purpose of the `<tfoot>` element?

**Answer:** It groups footer rows, usually containing totals or summaries.


### Q7. What does the `rowspan` attribute do?

**Answer:** It allows a cell to span multiple rows.


### Q8. What does the `colspan` attribute do?

**Answer:** It allows a cell to span multiple columns.


### Q9. Why should the `scope` attribute be used on `<th>` elements?

**Answer:** It improves accessibility by helping screen readers associate header cells with related data.

### Q10. How can large tables be made responsive?

**Answer:** Wrap the table inside a container with `overflow-x: auto`.


### Q11. What is the purpose of the `<caption>` element?

**Answer:** It provides a descriptive title for the table.


### Q12. Should tables be used for webpage layouts?

**Answer:** No. Tables should only be used for displaying tabular data.

---