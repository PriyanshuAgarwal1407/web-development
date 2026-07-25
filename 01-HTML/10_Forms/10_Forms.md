# HTML5 Forms (2026 Edition)
HTML Forms are used to collect user input and send it to a server.

## Main Form Elements

| Element | Purpose |
|---------|---------|
| `<form>` | Creates a form |
| `<input>` | User input |
| `<label>` | Label for a form control |
| `<textarea>` | Multi-line text input |
| `<select>` | Dropdown list |
| `<option>` | Dropdown item |
| `<optgroup>` | Groups dropdown options |
| `<datalist>` | Autocomplete suggestions |
| `<button>` | Creates a button |
| `<fieldset>` | Groups related controls |
| `<legend>` | Title of a fieldset |
| `<output>` | Displays calculated output |
| `<progress>` | Progress indicator |
| `<meter>` | Measurement within a range |

---

# 1. `<form>`

### Purpose

Creates an HTML form.

### Syntax

```html
<form
    action="/submit"
    method="post">
    ...
</form>
```

### Common Attributes

| Attribute | Purpose |
|-----------|---------|
| `action` | URL where form data is sent |
| `method` | HTTP method (`GET` or `POST`) |
| `autocomplete` | Browser autofill |
| `target` | Where the response opens |
| `enctype` | Encoding type |
| `name` | Form name |
| `accept-charset` | Character encoding |
| `novalidate` | Disables browser validation |

---

# 2. `<label>`

### Purpose

Associates text with a form control.

### Example

```html
<label for="email">
    Email
</label>

<input
    id="email"
    type="email">
```

### Benefits

- Better accessibility
- Larger click area
- Screen reader support

---

# 3. `<input>`

### Purpose

Creates interactive form controls.

### Basic Syntax

```html
<input
    type="text"
    name="username">
```

---

## Common Input Attributes

| Attribute | Purpose |
|-----------|---------|
| `type` | Input type |
| `id` | Unique identifier |
| `name` | Field name sent to server |
| `value` | Default value |
| `placeholder` | Hint text |
| `required` | Mandatory field |
| `readonly` | Read-only but submitted |
| `disabled` | Disabled and not submitted |
| `autocomplete` | Browser autofill |
| `autofocus` | Focus on page load |
| `maxlength` | Maximum characters |
| `minlength` | Minimum characters |
| `min` | Minimum value |
| `max` | Maximum value |
| `step` | Increment value |
| `pattern` | Regular expression validation |
| `multiple` | Multiple values/files |
| `accept` | Allowed file types |
| `checked` | Default checked |
| `list` | Connects to `<datalist>` |
| `size` | Visible width |

---

## Input Types

| Type | Purpose |
|------|---------|
| `text` | Single-line text |
| `password` | Hidden password |
| `email` | Email validation |
| `number` | Numeric input |
| `tel` | Telephone number |
| `url` | Website URL |
| `search` | Search field |
| `checkbox` | Multiple selection |
| `radio` | Single selection |
| `file` | File upload |
| `hidden` | Hidden value |
| `color` | Color picker |
| `range` | Slider |
| `date` | Date picker |
| `time` | Time picker |
| `datetime-local` | Date & Time picker |
| `month` | Month picker |
| `week` | Week picker |
| `submit` | Submit button |
| `reset` | Reset button |
| `button` | Generic button |
| `image` | Image submit button |

---

# 4. `<textarea>`

### Purpose

Creates a multi-line text input.

### Example

```html
<textarea
    rows="5"
    cols="40"
    placeholder="Enter your message">
</textarea>
```

### Common Attributes

- `rows`
- `cols`
- `maxlength`
- `minlength`
- `placeholder`
- `readonly`
- `required`
- `wrap`

---

# 5. `<select>`

### Purpose

Creates a dropdown list.

### Example

```html
<select name="city">

    <option>Delhi</option>

    <option>Mumbai</option>

</select>
```

### Common Attributes

- `name`
- `multiple`
- `size`
- `required`
- `disabled`

---

# 6. `<option>`

### Purpose

Represents an option inside a dropdown.

### Example

```html
<option value="html">
    HTML
</option>
```

### Attributes

- `value`
- `selected`
- `disabled`

---

# 7. `<optgroup>`

### Purpose

Groups related options.

### Example

```html
<select>
    <optgroup label="Frontend">
        <option>HTML</option>
        <option>CSS</option>
    </optgroup>
</select>
```

---

# 8. `<datalist>`

### Purpose

Provides autocomplete suggestions.

### Example

```html
<input
    list="languages">

<datalist id="languages">
    <option value="HTML">
    <option value="CSS">
    <option value="JavaScript">
</datalist>
```

---

# 9. `<fieldset>`

### Purpose

Groups related form controls.

### Example

```html
<fieldset>
    <legend>Personal Details</legend>
</fieldset>
```

---

# 10. `<legend>`

### Purpose

Provides a title for a `<fieldset>`.

### Example

```html
<legend>
    User Information
</legend>
```

---

# 11. `<button>`

### Purpose

Creates a button.

### Types

| Type | Purpose |
|------|---------|
| `submit` | Submit form |
| `reset` | Reset form |
| `button` | Generic button |

### Example

```html
<button type="submit">
    Submit
</button>
```

---

# 12. `<output>`

### Purpose

Displays calculated output.

### Example

```html
<output>
    100
</output>
```

---

# 13. `<progress>`

### Purpose

Shows task progress.

### Example

```html
<progress
    value="60"
    max="100">
</progress>
```

---

# 14. `<meter>`

### Purpose

Represents a measurement within a known range.

### Common Uses

- Battery level
- Disk usage
- Exam score
- Signal strength

### Example

```html
<meter
    value="80"
    min="0"
    max="100">
</meter>
```

---

## Validation Attributes

| Attribute | Purpose |
|-----------|---------|
| `required` | Field cannot be empty |
| `pattern` | Regular expression validation |
| `maxlength` | Maximum characters |
| `minlength` | Minimum characters |
| `readonly` | Read-only but submitted |
| `disabled` | Disabled and not submitted |
| `placeholder` | Hint text |
| `autofocus` | Auto focus on page load |
| `autocomplete` | Browser autofill |
| `multiple` | Multiple values/files |
| `accept` | Restricts uploaded file types |
| `novalidate` | Disables browser validation |

---

## Common Form Attributes

| Attribute | Purpose |
|-----------|---------|
| `id` | Unique identifier |
| `name` | Submitted field name |
| `value` | Default value |
| `type` | Input type |
| `checked` | Default checked state |
| `selected` | Default selected option |
| `min` | Minimum value |
| `max` | Maximum value |
| `step` | Increment value |
| `rows` | Textarea rows |
| `cols` | Textarea columns |
| `size` | Visible input width |
| `list` | Connects to `<datalist>` |
| `form` | Associates with another form |

---

# Form Submission Methods

## GET

### Features

- Appends data to the URL
- Can be bookmarked
- Cached by browsers
- Good for search forms

### Not Suitable For

- Passwords
- Sensitive information
- Large amounts of data

---

## POST

### Features

- Sends data in the request body
- More secure than GET
- Supports large data
- Required for file uploads

### Common Uses

- Login
- Registration
- Payments
- File uploads

### File Upload

```html
<form
    method="post"
    enctype="multipart/form-data">
```

---

# Accessibility

- Always use `<label>`.
- Every input should have a unique `id`.
- Match the label with the input.

```html
<label for="email">
    Email
</label>

<input
    id="email">
```

- Use placeholders only as hints.
- Group related controls with `<fieldset>`.
- Use `<legend>` for fieldset titles.
- Ensure keyboard navigation works.
- Maintain sufficient color contrast.
- Display clear validation errors.
- Use semantic HTML.

---

# Best Practices (2026)

- Use semantic HTML.
- Choose the correct input type.
- Use labels for every control.
- Validate on both the client and server.
- Never rely only on client-side validation.
- Prefer `POST` for sensitive data.
- Use `autocomplete` where appropriate.
- Restrict uploads using `accept`.
- Keep forms short and simple.
- Use meaningful button text.
- Display clear validation messages.
- Make forms mobile-friendly.
- Use `required` only when necessary.
- Minimize mandatory fields.
- Preserve user input after validation errors.
- Test using keyboard navigation.
- Test with screen readers.

---

# Quick Comparison

| Element | Purpose |
|---------|---------|
| `<form>` | Form container |
| `<input>` | User input |
| `<label>` | Accessible label |
| `<textarea>` | Multi-line input |
| `<select>` | Dropdown |
| `<option>` | Dropdown option |
| `<optgroup>` | Option grouping |
| `<datalist>` | Autocomplete |
| `<button>` | Button |
| `<fieldset>` | Groups controls |
| `<legend>` | Fieldset title |
| `<output>` | Calculated output |
| `<progress>` | Progress bar |
| `<meter>` | Measurement |

---

# Interview Questions

### Q1. What is the purpose of the `<form>` element?

**Answer:** It creates a form to collect and submit user data.

---

### Q2. Why should `<label>` be used?

**Answer:** It improves accessibility, increases the clickable area, and helps screen readers.

---

### Q3. What is the difference between `readonly` and `disabled`?

**Answer:**
- `readonly`: Cannot be edited but **is submitted** with the form.
- `disabled`: Cannot be edited and **is not submitted**.

---

### Q4. What is the difference between `GET` and `POST`?

**Answer:**
- `GET` sends data in the URL.
- `POST` sends data in the request body and is suitable for sensitive data.

---

### Q5. Which `enctype` is required for file uploads?

**Answer:** `multipart/form-data`

---

### Q6. What is the purpose of the `required` attribute?

**Answer:** Makes a field mandatory before form submission.

---

### Q7. What is the purpose of the `pattern` attribute?

**Answer:** Validates input using a regular expression.

---

### Q8. What is the purpose of `<fieldset>` and `<legend>`?

**Answer:**
- `<fieldset>` groups related controls.
- `<legend>` provides a title for the group.

---

### Q9. What is the purpose of the `accept` attribute?

**Answer:** Restricts the types of files that can be uploaded.

---

### Q10. What is the difference between `<progress>` and `<meter>`?

**Answer:**
- `<progress>` shows the completion progress of a task.
- `<meter>` represents a measurement within a known range (e.g., battery level or disk usage).

---