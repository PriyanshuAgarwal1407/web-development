# [HTML Entities](https://www.freeformatter.com/html-entities.html)

HTML Entities are special codes used to display **reserved characters**, **symbols**, **currency symbols**, **emojis**, and other characters that cannot be typed directly or would otherwise be interpreted as HTML.

## Syntax

### Named Entity

```html
&entityName;
```

### Decimal Numeric Entity

```html
&#number;
```

### Hexadecimal Numeric Entity

```html
&#xhexNumber;
```

### Example

```html
&lt;
&#60;
&#x3C;
```

**Output**

```text
<
```

---

# Types of HTML Entities

## 1. Named Entity

Uses a predefined entity name.

### Example

```html
&copy;
```

**Output:** ©


## 2. Decimal Numeric Entity

Uses the decimal Unicode value.

### Example

```html
&#169;
```

**Output:** ©


## 3. Hexadecimal Numeric Entity

Uses the hexadecimal Unicode value.

### Example

```html
&#x00A9;
```

**Output:** ©

---

# Common HTML Entities

| Entity | Output | Description |
|---------|--------|-------------|
| `&lt;` | `<` | Less Than |
| `&gt;` | `>` | Greater Than |
| `&amp;` | `&` | Ampersand |
| `&quot;` | `"` | Double Quote |
| `&apos;` | `'` | Apostrophe |
| `&nbsp;` | Space | Non-Breaking Space |
| `&copy;` | © | Copyright |
| `&reg;` | ® | Registered Trademark |
| `&trade;` | ™ | Trademark |
| `&hearts;` | ♥ | Heart |
| `&star;` | ★ | Star |
| `&check;` | ✓ | Check Mark |
| `&times;` | × | Multiplication |
| `&divide;` | ÷ | Division |
| `&plusmn;` | ± | Plus Minus |
| `&deg;` | ° | Degree |
| `&euro;` | € | Euro |
| `&pound;` | £ | Pound |
| `&yen;` | ¥ | Yen |
| `&cent;` | ¢ | Cent |
| `&dollar;` | $ | Dollar |

---

# Displaying HTML Code

To display HTML tags as text instead of rendering them, use entities.

### Example

```html
&lt;h1&gt;Hello World&lt;/h1&gt;
```

**Output**

```html
<h1>Hello World</h1>
```

---

# Non-Breaking Space (`&nbsp;`)

Prevents the browser from collapsing multiple spaces into one.

### Example

```html
HTML&nbsp;&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;&nbsp;JavaScript
```

**Output**

```text
HTML    CSS    JavaScript
```

---

# Numeric Entity Examples

### Decimal

```html
&#169;
```

**Output:** ©

```html
&#174;
```

**Output:** ®

```html
&#8482;
```

**Output:** ™

```html
&#36;
```

**Output:** $

---

# Hexadecimal Entity Examples

```html
&#x00A9;
```

**Output:** ©

```html
&#x00AE;
```

**Output:** ®

```html
&#x2122;
```

**Output:** ™

```html
&#x24;
```

**Output:** $

---

# Reserved Characters

| Character | HTML Entity |
|-----------|-------------|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` |
| `'` | `&apos;` |

---

# Why Use HTML Entities?

- Display reserved HTML characters.
- Display mathematical symbols.
- Display currency symbols.
- Display emojis and special symbols.
- Preserve spaces using `&nbsp;`.
- Display HTML code as plain text.

---

# Best Practices

- Use entities for reserved HTML characters.
- Prefer **UTF-8** whenever possible.
- Use `&nbsp;` only when a non-breaking space is required.
- Prefer named entities for readability.
- Use numeric entities when a named entity is unavailable.

---

# Quick Comparison

| Type | Syntax | Example |
|------|--------|---------|
| Named Entity | `&name;` | `&copy;` |
| Decimal Entity | `&#number;` | `&#169;` |
| Hexadecimal Entity | `&#xhex;` | `&#x00A9;` |

---

# Interview Questions

### Q1. What are HTML entities?

**Answer:** Special codes used to display reserved characters and special symbols in HTML.


### Q2. Why are HTML entities needed?

**Answer:** To display reserved HTML characters and special symbols without confusing the browser.


### Q3. What is the syntax of a named HTML entity?

**Answer:**

```html
&entityName;
```

Example:

```html
&copy;
```


### Q4. What is the syntax of a decimal numeric entity?

**Answer:**

```html
&#number;
```

Example:

```html
&#169;
```


### Q5. What is the syntax of a hexadecimal entity?

**Answer:**

```html
&#xhexNumber;
```

Example:

```html
&#x00A9;
```

### Q6. Which entity is used for a non-breaking space?

**Answer:** `&nbsp;`

### Q7. Which entity displays the copyright symbol?

**Answer:** `&copy;`


### Q8. Which entity displays the trademark symbol?

**Answer:** `&trade;`


### Q9. Which entity displays the ampersand (`&`) character?

**Answer:** `&amp;`


### Q10. How do you display the HTML tag `<p>` as text?

**Answer:**

```html
&lt;p&gt;
```

### Q11. Can UTF-8 replace many HTML entities?

**Answer:** Yes. UTF-8 supports most Unicode characters directly, but entities are still required for reserved HTML characters like `<`, `>`, and `&`.

### Q12. Which three methods can represent the dollar sign (`$`)?

**Answer:**

**Named Entity**

```html
&dollar;
```

**Decimal Entity**

```html
&#36;
```

**Hexadecimal Entity**

```html
&#x24;
```

---
