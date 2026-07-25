# HTML Audio & Video

HTML5 provides built-in elements to embed **audio** and **video** without requiring plugins like Adobe Flash.

## Benefits

- Native browser support
- Better accessibility
- Responsive media
- Multiple format support

## Main Media Elements

| Element | Purpose |
|---------|---------|
| `<audio>` | Embeds audio |
| `<video>` | Embeds video |
| `<source>` | Provides multiple media sources |
| `<track>` | Adds captions or subtitles |
| `<iframe>` | Embeds external webpages/media |
| `<embed>` | Embeds external resources like PDFs |

---

# 1. `<audio>`

### Purpose

Embeds audio into a webpage.

### Syntax

```html
<audio controls>
    <source
        src="song.mp3"
        type="audio/mpeg">
</audio>
```

### Supported Audio Formats

| Format | MIME Type |
|---------|-----------|
| MP3 | `audio/mpeg` |
| WAV | `audio/wav` |
| OGG | `audio/ogg` |

> Without the `controls` attribute, users cannot play or pause the audio.

### Audio Attributes

| Attribute | Purpose |
|-----------|---------|
| `controls` | Shows playback controls |
| `autoplay` | Starts automatically |
| `loop` | Repeats continuously |
| `muted` | Starts with sound off |
| `preload` | Controls preloading behavior |

---

# 2. `<video>`

### Purpose

Embeds video into a webpage.

### Syntax

```html
<video controls>
    <source
        src="movie.mp4"
        type="video/mp4">
</video>
```

### Supported Video Formats

| Format | MIME Type |
|---------|-----------|
| MP4 | `video/mp4` |
| WebM | `video/webm` |
| OGV (Ogg) | `video/ogg` |

> **Recommended:** MP4 for maximum browser compatibility.


### Video Attributes

| Attribute | Purpose |
|-----------|---------|
| `controls` | Playback controls |
| `autoplay` | Starts automatically |
| `muted` | Starts without sound |
| `loop` | Repeats video |
| `poster` | Thumbnail before playback |
| `playsinline` | Plays inline on mobile |
| `width` | Video width |
| `height` | Video height |

---

# 3. `<source>`

### Purpose

Provides multiple media sources.

Used inside:

- `<audio>`
- `<video>`
- `<picture>`

### Example

```html
<source
    src="movie.webm"
    type="video/webm">
```

The browser automatically selects the **first supported format**.

---

# 4. `<track>`

### Purpose

Adds timed text tracks to videos.

### Common Uses

- Captions
- Subtitles
- Chapters
- Metadata

### Example

```html
<track
    src="captions.vtt"
    kind="captions"
    srclang="en"
    label="English"
    default>
```

> Track files use the **`.vtt`** format.

---

## `controls` Attribute

### Purpose

Displays built-in media controls.

### Includes

- Play
- Pause
- Volume
- Seek bar
- Fullscreen (video)

### Example

```html
<audio controls></audio>
<video controls></video>
```

---

## Captions

### Purpose

Display spoken dialogue and important sounds.

### Example

```html
<track
    kind="captions">
```

Useful for:

- Accessibility
- Hearing-impaired users

---

## Subtitles

### Purpose

Translate spoken dialogue into another language.

### Example

```html
<track
    kind="subtitles"
    srclang="fr">
```

### Difference

| Captions | Subtitles |
|-----------|-----------|
| Dialogue + Sound Effects | Dialogue Translation Only |

---

## `autoplay` Attribute

### Purpose

Starts media automatically.

### Example

```html
<video autoplay>
```

> Most browsers require `muted` for autoplay to work.

---

## `muted` Attribute

### Purpose

Starts media with sound turned off.

### Example

```html
<video
    autoplay
    muted>
```

> Required with `autoplay` in most browsers.

---

## `poster` Attribute

### Purpose

Displays an image before the video starts.

### Example

```html
<video
    poster="poster.jpg">
```

Only applies to videos.

---

## `loop` Attribute

### Purpose

Repeats media continuously.

### Example

```html
<audio loop>

<video loop>
```

---

## `<iframe>`

### Purpose

Embeds another webpage or external content.

### Common Uses

- YouTube
- Google Maps
- PDFs
- Forms

### Example

```html
<iframe
    src="https://www.youtube.com/embed/..."
    width="700"
    height="400"
    allowfullscreen>
</iframe>
```

### Important Attributes

- `src`
- `width`
- `height`
- `title`
- `allow`
- `allowfullscreen`
- `loading="lazy"`

---

## `<embed>`

### Purpose

Embeds external resources directly.

### Common Uses

- PDF
- SVG
- Multimedia

### Example

```html
<embed
    src="file.pdf"
    type="application/pdf">
```

Modern HTML usually prefers:

- `<iframe>`
- `<object>`

depending on the content.

---

# Complete Audio Example

```html
<audio controls>
    <source
        src="song.mp3"
        type="audio/mpeg">

    <source
        src="song.wav"
        type="audio/wav">

    Your browser does not support the audio element.
</audio>
```

---

# Complete Video Example

```html
<video
    controls
    muted
    loop
    width="700"
    height="400"
    poster="poster.png">

    <source
        src="sample.mp4"
        type="video/mp4">

    <source
        src="sample.webm"
        type="video/webm">

    <track
        src="captions.vtt"
        kind="captions"
        srclang="en"
        label="English"
        default>

</video>
```

---

## Common Media Attributes

| Attribute | Purpose |
|-----------|---------|
| `controls` | Show playback controls |
| `autoplay` | Start automatically |
| `muted` | Mute media |
| `loop` | Repeat playback |
| `preload` | Controls preloading |
| `poster` | Video thumbnail |
| `playsinline` | Play inline on mobile |


## Supported Formats

### Audio

| Format | Recommended|
|--------|------------|
| MP3    | ✅         |
| WAV    | ✅         |
| OGG    | ✅         |


### Video

| Format  | Recommended |
|---------|-------------|
| MP4     | ✅ Best     |
| WebM    | ✅          |
| OGV     | Supported   |

---

## Best Practices

- Always provide multiple media formats.
- Include captions for accessibility.
- Use `controls` unless building a custom player.
- Use `poster` images for videos.
- Avoid autoplay with sound.
- Use `loading="lazy"` for iframes when appropriate.
- Prefer MP4 for videos.
- Prefer MP3 for audio.

## Quick Comparison

| Element | Purpose |
|---------|---------|
| `<audio>` | Audio player |
| `<video>` | Video player |
| `<source>` | Multiple media sources |
| `<track>` | Captions and subtitles |
| `<iframe>` | External webpage/media |
| `<embed>` | External resource |

---

## Interview Questions

### Q1. Which HTML elements are used to embed audio and video?

**Answer:** `<audio>` and `<video>`.


### Q2. What is the purpose of the `<source>` element?

**Answer:** It provides alternative media files in different formats.


### Q3. Why is the `<track>` element used?

**Answer:** To add captions, subtitles, chapters, or metadata to media.


### Q4. What is the difference between captions and subtitles?

**Answer:**
- **Captions:** Dialogue + sound effects.
- **Subtitles:** Dialogue translation only.


### Q5. What does the `controls` attribute do?

**Answer:** Displays the browser's built-in media controls.


### Q6. Why is `muted` commonly used with `autoplay`?

**Answer:** Most browsers block autoplay with sound, so media must be muted for autoplay to work.


### Q7. What is the purpose of the `poster` attribute?

**Answer:** Displays a preview image before the video starts playing.


### Q8. What does the `loop` attribute do?

**Answer:** Continuously repeats the media.


### Q9. What is the purpose of the `<iframe>` element?

**Answer:** It embeds another webpage or external content such as YouTube videos, Google Maps, or PDFs.


### Q10. What is the difference between `<iframe>` and `<embed>`?

**Answer:**
- `<iframe>` embeds an entire webpage or external document.
- `<embed>` embeds external media or resources like PDFs.


### Q11. Which video format is most widely supported?

**Answer:** MP4.

### Q12. Which audio format is most widely supported?

**Answer:** MP3.

---