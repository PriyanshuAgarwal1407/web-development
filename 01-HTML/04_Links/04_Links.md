# HTML Links

The **`<a>` (Anchor)** element is used to create hyperlinks that connect one webpage, file, email address, phone number, or section of a page to another.


## Syntax

```html
<a href="URL">Link Text</a>
```

### Benefits

- Website navigation
- Internal linking
- External linking
- Better SEO
- Improved accessibility

---

## 1. Anchor Element (`<a>`)

### Purpose

Creates a hyperlink.

### Syntax

```html
<a href="about.html">About</a>
```

> **Note:** Without the `href` attribute, an `<a>` element is **not** a clickable hyperlink.

<br>

## 2. `href` Attribute

### Purpose

Specifies the destination of the hyperlink.

### Syntax

```html
<a href="contact.html">Contact</a>
```

### Supports

- Web pages
- Files
- Email addresses
- Phone numbers
- Fragment links

<br>

## 3. `target` Attribute

### Purpose

Specifies where the linked document opens.

### Values

| Value | Description |
|--------|-------------|
| `_self` | Opens in the current tab (Default) |
| `_blank` | Opens in a new tab or window |
| `_parent` | Opens in the parent frame |
| `_top` | Opens in the full browser window |

### Example

```html
<a
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Open Website
</a>
```

<br>

## 4. `rel` Attribute

### Purpose

Defines the relationship between the current page and the linked resource.

### Common Values

| Value | Purpose |
|--------|---------|
| `noopener` | Prevents access to `window.opener` |
| `noreferrer` | Prevents sending the referrer information |
| `nofollow` | Tells search engines not to follow the link |
| `ugc` | User Generated Content |
| `sponsored` | Sponsored or paid links |

### Example

```html
<a
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Website
</a>
```

> **Best Practice:** Always use `rel="noopener noreferrer"` with `target="_blank"`.

<br>

## 5. `download` Attribute

### Purpose

Downloads a file instead of opening it.

### Example

```html
<a href="resume.pdf" download>
    Download Resume
</a>
```

### Custom Download Name

```html
<a
    href="resume.pdf"
    download="MyResume.pdf"
>
    Download Resume
</a>
```

<br>

## 6. `mailto:` Protocol

### Purpose

Opens the user's default email application.

### Example

```html
<a href="mailto:john@example.com">
    Email John
</a>
```

### With Subject

```html
<a href="mailto:john@example.com?subject=Hello">
    Send Email
</a>
```

<br>

## 7. `tel:` Protocol

### Purpose

Opens the phone dialer on supported devices.

### Example

```html
<a href="tel:+911234567890">
    Call Now
</a>
```

> Mostly useful on smartphones.

<br>

## 8. Fragment Links

### Purpose

Navigate to a specific section on the same page.

### Example

```html
<h2 id="contact">Contact</h2>

<a href="#contact">
    Go to Contact
</a>
```

> The `id` value and the fragment (`#contact`) must match exactly.

<br>

## 9. Absolute URL

### Definition

A complete web address including the protocol and domain name.

### Example

```html
<a href="https://developer.mozilla.org">
    MDN Web Docs
</a>
```

### Characteristics

- Includes protocol (`https://`)
- Used for external websites

<br>

## 10. Relative URL

### Definition

A path relative to the current webpage.

### Examples

```text
about.html
contact.html
images/logo.png
../index.html
```

### Example

```html
<a href="about.html">
    About
</a>
```

### Characteristics

- No domain name required
- Used within the same website


---

## Common Link Targets

| Target   | Description           |
|----------|-----------------------|
| `_self`  | Current tab (Default) |
| `_blank` | New tab               |
| `_parent`| Parent frame          |
| `_top`   | Entire browser window |

## Absolute vs Relative URL

| Absolute URL     | Relative URL       |
|------------------|--------------------|
| Full web address | Relative file path |
| Includes protocol and domain | No protocol or domain |
| Used for external websites | Used within the same website |
| Example: `https://example.com/about` | Example: `about.html` |

---

# Complete Examples

## External Link

```html
<a href="https://developer.mozilla.org">
    MDN Web Docs
</a>
```

<br>

## Internal Link

```html
<a href="about.html">
    About
</a>
```

<br>

## Open in New Tab

```html
<a
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Open Website
</a>
```

<br>

## Download File

```html
<a href="notes.pdf" download>
    Download Notes
</a>
```

<br>

## Email Link

```html
<a href="mailto:example@email.com">
    Send Email
</a>
```

<br>

## Phone Link

```html
<a href="tel:+911234567890">
    Call Now
</a>
```

<br>

## Fragment Link

```html
<h2 id="top">Top</h2>

<a href="#top">
    Back to Top
</a>
```

<br>

---

## Best Practices

- Use meaningful link text.
- Avoid using "Click Here".
- Use `target="_blank"` only when necessary.
- Always add `rel="noopener noreferrer"` with `target="_blank"`.
- Use relative URLs for internal pages.
- Use absolute URLs for external websites.
- Ensure fragment IDs are unique.
- Keep links descriptive for accessibility and SEO.

## Quick Comparison

| Feature | Purpose |
|---------|---------|
| `<a>` | Creates hyperlinks |
| `href` | Specifies destination |
| `target` | Specifies where the link opens |
| `rel` | Defines relationship between pages |
| `download` | Downloads a file |
| `mailto:` | Opens email application |
| `tel:` | Opens phone dialer |
| `#id` | Navigates to a section on the same page |


## Interview Questions

### Q1. Which element creates hyperlinks in HTML?

**Answer:** `<a>`

### Q2. Which attribute specifies the destination of a hyperlink?

**Answer:** `href`


### Q3. What does `target="_blank"` do?

**Answer:** Opens the linked page in a new tab or window.


### Q4. Why should `rel="noopener noreferrer"` be used with `target="_blank"`?

**Answer:** It improves security and privacy by preventing the new page from accessing the original page through `window.opener` and by preventing referrer information from being sent.


### Q5. What is the purpose of the `download` attribute?

**Answer:** It tells the browser to download the linked file instead of opening it.


### Q6. What does `mailto:` do?

**Answer:** Opens the user's default email application to compose a new email.

### Q7. What does `tel:` do?

**Answer:** Opens the phone dialer on supported devices.


### Q8. What is a fragment link?

**Answer:** A link that navigates to a specific element on the same page using its `id`.

### Q9. What is the difference between an absolute URL and a relative URL?

**Answer:**
- **Absolute URL:** Includes the complete web address (protocol + domain).
- **Relative URL:** Refers to a resource within the same website using a relative path.


### Q10. Can an `<a>` element exist without an `href` attribute?

**Answer:** Yes, but it will not function as a clickable hyperlink.

# HTML File Paths

## Why Do File Paths Exist?

### Imagine This Situation

Suppose you are building a website.

```
My Website
```

After a few days your project grows.

```
my-website/
index.html
style.css
script.js
logo.png
about.html
contact.html
```

Everything is still manageable.

But eventually your project becomes larger.

```
my-website/
index.html
css/
    style.css
js/
    script.js
images/
    logo.png
    hero.jpg
    profile.jpg
pages/
    about.html
    contact.html
```

- Now the browser has a problem.
- Your HTML file wants to display **logo.png**.
- How does it know where that file is?
- The browser cannot guess.
- It needs an exact address.
- That address is called a **File Path**.

---

## 📖 Definition

- A **File Path** tells the browser exactly where a file is located.
- Think of it as the address of a house.
- Without an address, the delivery person cannot deliver your package.
- Without a file path, the browser cannot find your files.

## Real-Life Analogy

- Imagine ordering food.
- Instead of saying
    > Deliver to Priyanshu
- you say
    > Deliver to
    > House No. 42
    > ABC Colony
    > New Delhi

That complete location is the file path.

<br>

## Types of File Paths

There are only **two** kinds.

1. Relative File Path
2. Absolute File Path

Everything else is built upon these two ideas.


## 1. Relative File Paths
A **Relative File Path** tells the browser where a file is **relative to the current HTML file**.

- It does **not** start from the entire computer.
- Instead, it starts from the file you are currently writing.
- This is what you will use **99% of the time** in web development.

### Example Project Structure

```
my-website/
│
├── index.html
├── about.html
│
├── images/
│      logo.png
│      hero.jpg
│
└── pages/
       contact.html
       services.html
```


### Scenario 1: Same Folder

```
my-website/
index.html
about.html
```

Both files are neighbors.

```
<a href="about.html">
About
</a>
```

No folder name is needed.
Only the filename.

### Visual Diagram

```
Current File
↓
index.html
↓
about.html
```

<br>

## Scenario 2: Child Folder

```
my-website/
index.html
images/
    logo.png
```

You must enter the images folder.

```
<img src="images/logo.png">
```

Think of it like:

```
Go inside
↓
images
↓
logo.png
```

### Folder Navigation Diagram

```
index.html
↓
images/
↓
logo.png
```

<br>

## Scenario 3: Parent Folder

Suppose you are here.

```
pages/
contact.html
```

The image is here.

```
images/
logo.png
```

You cannot jump directly.
You must first go back.

```
../
```

means

> Go back one folder.

Then

```
images/logo.png
```

Complete path

```html
<img src="../images/logo.png">
```

### Visual Representation

```
contact.html
↓
../
↓
my-website/
↓
images/
↓
logo.png
```

## Scenario 4: Going Back Multiple Folders

Imagine this structure.

```
project/
pages/
blog/
article/
index.html
```

Image

```
project/
images/
logo.png
```

Current location

```
project/pages/blog/article/
```

Need to reach

```
project/images/
```

Go back three times.

```
../../../images/logo.png
```

### Memory Trick

```
./
Current Folder

../
One Folder Back

../../
Two Folders Back

../../../
Three Folders Back
```

### Common Relative Paths

| Path              | Meaning            |
|-------------------|--------------------|
| image.png         | Same folder        |
| images/logo.png   | Child folder       |
| ../logo.png       | Parent folder      |
| ../../logo.png    | Two folders back   |
| ../../../logo.png | Three folders back |

---

## 2. Absolute File Paths
An **Absolute File Path** provides the complete location of a file.

It starts from the beginning.

Usually

```
https://
```

or

```
http://
```

Example

```html
<a href="https://www.google.com">
Google
</a>
```

Image

```html
<img src="https://upload.wikimedia.org/.../logo.png">
```

### When Should You Use Absolute Paths?

✅ External websites
✅ CDN
✅ Google Fonts
✅ Bootstrap CDN
✅ Images hosted online


### When Should You NOT Use Absolute Paths?

Never use

```
C:\Users\YourName\
```

inside HTML.

Example

```html
<img src="C:\Users\John\Desktop\logo.png">
```

❌ Wrong

Works only on your computer.
Nobody else has that folder.

### Why Doesn't This Work?
Because browsers run inside a **Sandbox**.

### Browser Sandbox
Imagine every website inside a prison.

```
Website
↓
Browser Sandbox
↓

Computer Files
```

The website cannot escape.

Otherwise,

A malicious website could do this

```html
<img src="C:\Users\John\Documents\Passwords.txt">
```

That would be a massive security problem.

Therefore browsers block access.

---

### Relative vs Absolute

| Relative | Absolute |
|-----------|----------|
| Starts from current file | Starts from full URL |
| Used inside project | Used outside project |
| Portable | Not portable |
| Most common | Less common |

### Best Practices

✅ Organize folders properly.
✅ Keep images inside an `images` folder.
✅ Keep CSS inside a `css` folder.
✅ Keep JavaScript inside a `js` folder.
✅ Use lowercase filenames.
✅ Avoid spaces in filenames.

Example

```
hero-image.png
```

instead of

```
Hero Image Final New.png
```

### Common Beginner Mistakes

❌ Using Windows paths

```html
C:\Users\Desktop\
```

❌ Using backslashes

```html
images\logo.png
```

HTML always uses

```
/
```

not

```
\
```

❌ Forgetting `../`
❌ Wrong folder names
❌ Wrong capitalization

```
Logo.png
```

is different from

```
logo.png
```

on Linux servers.

---

## Interview Questions

### What is a file path?

A file path is the address of a file inside a computer or website.

### What is the difference between Relative and Absolute Paths?

Relative paths start from the current file.
Absolute paths start from the complete URL or root location.

### Why shouldn't we use

```
C:\Users\
```

inside HTML?
Because it only exists on your computer.

### Why does HTML use `/` instead of `\`?

Because web URLs follow Unix-style path separators.

---

### Revision Sheet

| Topic | Remember |
|--------|----------|
| Relative Path | Inside project |
| Absolute Path | External resources |
| ../ | One folder back |
| ./ | Current folder |
| / | Child folder |
| Browser Sandbox | Blocks access to local files |
| Best Practice | Always use relative paths for your own project |