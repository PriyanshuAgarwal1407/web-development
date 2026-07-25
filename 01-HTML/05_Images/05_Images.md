# HTML Images
The **`<img>`** element is used to embed images into a webpage.

Unlike CSS background images, HTML images become part of the document content, improving **accessibility**, **SEO**, and the overall user experience.

## Benefits

- Visual content
- Better SEO
- Improved accessibility
- Responsive design
- Faster user experience

---

# 1. `<img>` Element

### Purpose

Embeds an image into a webpage.

### Syntax

```html
<img
    src="image.jpg"
    alt="Description">
```

### Characteristics

- Void element (no closing tag)
- Inline replaced element
- Displays images inside the document

---

# 2. `src` Attribute

### Purpose

Specifies the image file location.

### Syntax

```html
<img src="logo.png">
```

### Supports

- Relative URLs
- Absolute URLs
- Base64 Images

---

# 3. `alt` Attribute

### Purpose

Provides alternative text if the image cannot be displayed.

### Example

```html
<img
    src="cat.jpg"
    alt="White Cat Sleeping">
```

### Benefits

- Accessibility
- SEO
- Screen reader support
- Fallback text

> **Best Practice:** Always provide meaningful `alt` text.

---

# 4. `width` Attribute

### Purpose

Specifies the image width.

### Example

```html
<img
    src="photo.jpg"
    width="400">
```

- Measured in CSS pixels.
- Helps reduce layout shifts.

---

# 5. `height` Attribute

### Purpose

Specifies the image height.

### Example

```html
<img
    src="photo.jpg"
    height="300">
```

> **Best Practice:** Specify both `width` and `height` to reserve space and reduce **Cumulative Layout Shift (CLS)**.

---

# 6. `loading` Attribute

### Purpose

Controls when an image loads.

### Values

| Value | Description |
|--------|-------------|
| `eager` | Loads immediately |
| `lazy` | Loads when near the viewport |

### Example

```html
<img
    src="image.jpg"
    loading="lazy">
```

### Benefits

- Faster page loading
- Reduced bandwidth usage
- Better performance

---

# 7. `decoding` Attribute

### Purpose

Hints how the browser should decode the image.

### Values

| Value | Description |
|--------|-------------|
| `sync` | Decode synchronously |
| `async` | Decode asynchronously |
| `auto` | Browser decides |

### Example

```html
<img
    src="photo.jpg"
    decoding="async">
```

> **Recommended:** `async`

---

# 8. `srcset` Attribute

### Purpose

Provides multiple image versions for different screen sizes and resolutions.

### Example

```html
<img
    src="small.jpg"
    srcset="
        small.jpg 480w,
        medium.jpg 768w,
        large.jpg 1200w">
```

The browser automatically selects the most suitable image.

---

# 9. `sizes` Attribute

### Purpose

Works with `srcset` to tell the browser how much space the image will occupy.

### Example

```html
<img
    src="photo.jpg"
    srcset="
        small.jpg 480w,
        large.jpg 1200w"
    sizes="(max-width:600px) 100vw, 50vw">
```

Used for responsive images.

---

# 10. `<picture>` Element

### Purpose

Provides multiple image sources, allowing the browser to choose the best image based on the device, screen size, or supported image format.

### Example

```html
<picture>

    <source
        srcset="photo.avif"
        type="image/avif">

    <source
        srcset="photo.webp"
        type="image/webp">

    <img
        src="photo.jpg"
        alt="Nature">

</picture>
```

### Responsive Example

```html
<picture>

    <source
        media="(max-width:600px)"
        srcset="mobile.jpg">

    <source
        media="(max-width:1000px)"
        srcset="tablet.jpg">

    <img
        src="desktop.jpg"
        alt="Mountain">

</picture>
```

### Benefits

- Responsive images
- Modern image formats
- Art direction
- Better performance

---

# 11. `<source>` Element

### Purpose

Defines an alternative image source inside a `<picture>` element.

### Common Attributes

- `srcset`
- `type`
- `media`

### Example

```html
<source
    srcset="image.avif"
    type="image/avif">
```

---

# 12. `<figure>` Element

### Purpose

A semantic container for self-contained content such as images, diagrams, charts, tables, videos, or code examples.

### Example

```html
<figure>

    <img
        src="mountain.jpg"
        alt="Snow-covered mountain">

    <figcaption>
        Snow-covered mountain during sunrise.
    </figcaption>

</figure>
```

### Common Uses

- Images
- Charts
- Diagrams
- Code examples
- Tables

---

# 13. `<figcaption>` Element

### Purpose

Provides a caption for a `<figure>`.

### Example

```html
<figcaption>
    HTML5 Official Logo
</figcaption>
```

> It can appear **before or after** the image.

---

# Responsive Images

Responsive images automatically adapt to:

- Screen size
- Resolution
- Device pixel ratio

### Techniques

- `srcset`
- `sizes`
- `<picture>`
- CSS `max-width:100%`

---

# Lazy Loading

```html
loading="lazy"
```

Loads images only when they approach the viewport.

### Benefits

- Faster initial page load
- Lower bandwidth usage
- Better Core Web Vitals

### Recommended For

- Gallery images
- Blog images
- Product images

### Avoid For

- Hero images
- Above-the-fold images

---

# Modern Image Formats

| Format | Best For |
|---------|----------|
| JPEG (`.jpg`) | Photos |
| PNG (`.png`) | Logos, Transparency |
| SVG (`.svg`) | Icons, Vector Graphics |
| WebP (`.webp`) | Smaller files, Transparency |
| AVIF (`.avif`) | Best compression and quality |

### Recommended Order

```text
AVIF
 ↓
WebP
 ↓
JPEG / PNG
```

---

# Complete Example

```html
<picture>

    <source
        srcset="images/photo.avif"
        type="image/avif">

    <source
        srcset="images/photo.webp"
        type="image/webp">

    <img
        src="images/photo.jpg"
        alt="Nature"
        width="600"
        height="400"
        loading="lazy"
        decoding="async">

</picture>
```

---

# Best Practices

- Always provide meaningful `alt` text.
- Specify both `width` and `height`.
- Use `loading="lazy"` for below-the-fold images.
- Prefer AVIF or WebP over JPEG/PNG.
- Use `srcset` for responsive images.
- Use `<picture>` for modern image fallbacks.
- Optimize image size before uploading.

---

# Quick Comparison

| Feature | Purpose |
|---------|---------|
| `<img>` | Displays an image |
| `src` | Image source |
| `alt` | Alternative text |
| `width` | Image width |
| `height` | Image height |
| `loading` | Lazy or eager loading |
| `decoding` | Image decoding hint |
| `srcset` | Multiple image versions |
| `sizes` | Image display size |
| `<picture>` | Multiple image sources |
| `<source>` | Alternative image source |
| `<figure>` | Semantic media container |
| `<figcaption>` | Caption for a figure |

---

# Interview Questions

### Q1. Which HTML element is used to display an image?
**Answer:** `<img>`

### Q2. Is the `<img>` element a void element?
**Answer:** Yes. It has no closing tag.

### Q3. What is the purpose of the `src` attribute?
**Answer:** It specifies the image source.

### Q4. Why is the `alt` attribute important?
**Answer:** It improves accessibility, SEO, and provides fallback text if the image cannot load.

### Q5. What is the benefit of specifying `width` and `height`?
**Answer:** It reserves space for the image and reduces **Cumulative Layout Shift (CLS)**.

### Q6. What does `loading="lazy"` do?
**Answer:** It delays loading images until they are near the viewport.

### Q7. What is the purpose of `decoding="async"`?
**Answer:** It allows the browser to decode images asynchronously for better performance.

### Q8. What is the difference between `src` and `srcset`?
**Answer:**
- `src` specifies a single image.
- `srcset` provides multiple image versions for different devices.

### Q9. Why is the `sizes` attribute used?
**Answer:** It tells the browser how much space the image will occupy so it can choose the best image from `srcset`.

### Q10. What is the purpose of the `<picture>` element?
**Answer:** It provides multiple image sources for responsive images and modern image formats.

### Q11. Which image formats are recommended for modern websites?
**Answer:** AVIF and WebP, with JPEG/PNG as fallbacks.

### Q12. What is the purpose of `<figure>` and `<figcaption>`?
**Answer:**
- `<figure>` groups self-contained media.
- `<figcaption>` provides a caption for the figure.

### Q13. How can you make an image responsive?
**Answer:**
- Use `srcset` and `sizes`.
- Use the `<picture>` element.
- Apply CSS:

```css
img {
    max-width: 100%;
    height: auto;
}
```