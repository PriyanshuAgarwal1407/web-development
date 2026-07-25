# Chapter 9 — HTML Embedded Content

Embedded content allows external resources or documents to be displayed inside a webpage.

---

# Common Examples

- ✔ YouTube Videos
- ✔ Google Maps
- ✔ PDF Files
- ✔ SVG Images
- ✔ HTML Documents
- ✔ Multimedia
- ✔ Third-party Widgets

---

# Main Elements

```html
<iframe>
<embed>
<object>
<param>
```

---

# 9.1 `<iframe>`

## Definition

The `<iframe>` (Inline Frame) element embeds another HTML document or external webpage inside the current webpage.

It is the most commonly used embedding element in modern web development.

---

## Common Uses

- YouTube Videos
- Google Maps
- Payment Gateways
- Dashboards
- Documentation
- Forms
- Third-party Widgets

---

## Basic Example

```html
<iframe
    src="page.html">
</iframe>
```

---

## Common Attributes

| Attribute | Purpose |
|------------|---------|
| `src` | URL of embedded content |
| `title` | Accessibility description |
| `width` | Width of iframe |
| `height` | Height of iframe |
| `loading="lazy"` | Loads only when needed |
| `sandbox` | Restricts iframe capabilities |
| `allow` | Grants browser permissions |
| `allowfullscreen` | Enables fullscreen mode |

---

## YouTube Example

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube Video"
    loading="lazy"
    allowfullscreen>
</iframe>
```

---

## Google Maps Example

```html
<iframe
    src="GOOGLE_MAP_EMBED_URL"
    width="600"
    height="450"
    loading="lazy">
</iframe>
```

---

## PDF Example

```html
<iframe
    src="resume.pdf"
    width="600"
    height="700"
    title="Resume">
</iframe>
```

---

# `sandbox` Attribute

## Purpose

Restricts what an embedded webpage is allowed to do.

Improves security when embedding third-party websites.

### Example

```html
<iframe
    src="page.html"
    sandbox>
</iframe>
```

---

## Common Sandbox Permissions

```text
allow-scripts
allow-forms
allow-popups
allow-downloads
allow-same-origin
```

### Example

```html
<iframe
    src="page.html"
    sandbox="allow-scripts allow-forms">
</iframe>
```

---

# `allow` Attribute

## Purpose

Grants specific browser permissions to the embedded content.

### Example

```html
<iframe
    allow="
    fullscreen;
    camera;
    microphone;
    clipboard-write">
</iframe>
```

---

## Common Permissions

- fullscreen
- camera
- microphone
- geolocation
- clipboard-write
- payment

---

# Security Best Practices

- Always use HTTPS resources.
- Add a meaningful `title`.
- Use `loading="lazy"` whenever possible.
- Apply `sandbox` for untrusted websites.
- Grant only the permissions you actually need.
- Avoid embedding unknown or untrusted websites.
- Prefer using a Content Security Policy (CSP).

---

# 9.2 `<embed>`

## Definition

The `<embed>` element embeds external resources directly into a webpage.

It is commonly used for simple media embedding.

---

## Common Uses

- PDF
- SVG
- Multimedia

---

## Example

```html
<embed
    src="sample.pdf"
    type="application/pdf"
    width="700"
    height="500">
```

---

## Notes

- Very simple element.
- Does not support fallback content.
- Modern websites often prefer `<iframe>` or `<object>`.

---

# 9.3 `<object>`

## Definition

The `<object>` element embeds external resources while providing fallback content if the resource cannot be displayed.

It is more flexible than `<embed>`.

---

## Common Uses

- PDF
- Images
- SVG
- HTML
- Multimedia

---

## Example

```html
<object
    data="sample.pdf"
    type="application/pdf"
    width="700"
    height="500">

    PDF is not supported.

</object>
```

---

## Advantages

- Supports fallback content.
- More flexible than `<embed>`.
- Can display different types of external resources.

---

# 9.4 `<param>` (Legacy)

## Definition

The `<param>` element provides parameters to an `<object>` element.

It was mainly used with Flash and other browser plugins.

Modern websites rarely use it because Flash and Java Applets are obsolete.

---

## Example

```html
<object data="movie.swf">

    <param
        name="autoplay"
        value="true">

</object>
```

---

# iframe vs embed vs object

| Element | Best Used For | Supports Fallback |
|----------|---------------|------------------|
| `<iframe>` | Webpages, Maps, YouTube | ❌ |
| `<embed>` | PDFs, Media | ❌ |
| `<object>` | PDFs, SVG, Images | ✔ |

---

# Common iframe Attributes

| Attribute | Purpose |
|------------|---------|
| `src` | Embedded URL |
| `title` | Accessibility |
| `width` | Width |
| `height` | Height |
| `loading="lazy"` | Lazy Loading |
| `sandbox` | Security Restrictions |
| `allow` | Browser Permissions |
| `allowfullscreen` | Fullscreen Support |

---

# Best Practices

- Use `<iframe>` for webpages and third-party content.
- Use `<object>` when fallback content is needed.
- Use `<embed>` for simple media embedding.
- Always provide a meaningful `title`.
- Apply `sandbox` to untrusted content.
- Use lazy loading.
- Keep iframe permissions minimal.

---

# Common Mistakes

- Embedding untrusted websites without `sandbox`
- Forgetting the `title` attribute on iframes
- Giving unnecessary iframe permissions
- Not using `loading="lazy"` for off-screen content
- Using `<embed>` when fallback content is required
- Using obsolete Flash (`.swf`) content in modern websites

---

# Interview Questions

1. What is an `<iframe>`?
2. What is the purpose of the `sandbox` attribute?
3. What does the `allow` attribute do?
4. Why is the `title` attribute important on an iframe?
5. What is the difference between `<iframe>` and `<embed>`?
6. What is the difference between `<embed>` and `<object>`?
7. Which element supports fallback content?
8. What is the purpose of the `<param>` element?
9. Why should `loading="lazy"` be used?
10. When should you use `<iframe>`, `<embed>`, or `<object>`?

---

# Practice

1. Embed a YouTube video.
2. Embed Google Maps.
3. Display a PDF using `<iframe>`.
4. Display a PDF using `<object>`.
5. Embed an SVG file.
6. Add `sandbox` restrictions to an iframe.
7. Grant fullscreen permission using the `allow` attribute.
8. Compare `<iframe>`, `<embed>`, and `<object>`.

---

# Revision Sheet

| Element | Purpose |
|----------|---------|
| `<iframe>` | Embed webpages and external content |
| `<embed>` | Embed PDFs and multimedia |
| `<object>` | Embed resources with fallback content |
| `<param>` | Legacy parameters for `<object>` |

---

# Chapter Summary

In this chapter, you learned:

- HTML Embedded Content
- `<iframe>`
- `<embed>`
- `<object>`
- `<param>` (Legacy)
- Sandbox & Security
- Permission Policies (`allow`)
- Lazy Loading
- Embedding PDFs, Videos, Maps, and External Pages
- Modern Best Practices

You now understand how to securely embed external content into modern HTML webpages using the appropriate embedding elements.