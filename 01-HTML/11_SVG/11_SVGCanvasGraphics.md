# Chapter 11 — SVG, Canvas & HTML5 Graphics

> **Difficulty:** ⭐ Beginner → Intermediate
>
> **Estimated Reading Time:** 1.5–2 Hours

---

# 🎯 Learning Objectives

By the end of this chapter, you will:

- Understand SVG graphics.
- Draw basic shapes using SVG.
- Learn the Canvas element.
- Know the difference between SVG and Canvas.
- Understand when to use each.
- Build simple graphics using HTML5.

---

# ==================================
# PART 1 — SVG
# ==================================

# What is SVG?

**SVG (Scalable Vector Graphics)** is an XML-based graphics format used to draw shapes, icons, logos, diagrams, and illustrations.

Unlike normal images, SVG graphics do **not lose quality when zoomed**.

---

## Basic SVG

```html
<svg width="200" height="200">

</svg>
```

---

## Circle

```html
<svg width="200" height="200">

<circle
cx="100"
cy="100"
r="50"
fill="red"/>

</svg>
```

---

## Rectangle

```html
<svg width="300" height="200">

<rect
x="20"
y="20"
width="150"
height="80"
fill="blue"/>

</svg>
```

---

## Line

```html
<svg width="300" height="100">

<line
x1="0"
y1="50"
x2="300"
y2="50"
stroke="black"
stroke-width="3"/>

</svg>
```

---

## Ellipse

```html
<svg width="300" height="200">

<ellipse
cx="150"
cy="100"
rx="80"
ry="40"
fill="green"/>

</svg>
```

---

## Polygon

```html
<svg width="300" height="200">

<polygon
points="100,10 40,180 190,60 10,60 160,180"
fill="orange"/>

</svg>
```

---

## Polyline

```html
<svg width="300" height="200">

<polyline
points="20,20 40,40 80,20 120,60"
fill="none"
stroke="black"/>

</svg>
```

---

## Text

```html
<svg width="300" height="100">

<text
x="20"
y="50"
font-size="30">

Hello SVG

</text>

</svg>
```

---

## SVG Attributes

| Attribute | Purpose |
|-----------|----------|
| width | SVG Width |
| height | SVG Height |
| fill | Fill Color |
| stroke | Border Color |
| stroke-width | Border Thickness |
| x | Horizontal Position |
| y | Vertical Position |
| cx | Circle Center X |
| cy | Circle Center Y |
| r | Radius |

---

# Advantages of SVG

✅ Scalable

✅ Small File Size

✅ Editable

✅ Search Engine Friendly

✅ Animatable

---

# Common Uses

- Logos
- Icons
- Charts
- Maps
- Diagrams
- Illustrations

---

# ==================================
# PART 2 — HTML Canvas
# ==================================

# What is Canvas?

Canvas provides an area where JavaScript can draw graphics.

Unlike SVG,

Canvas draws **pixels**.

---

## Basic Canvas

```html
<canvas
id="canvas"
width="400"
height="300">

</canvas>
```

---

## JavaScript Context

```javascript
const canvas =
document.getElementById("canvas");

const ctx =
canvas.getContext("2d");
```

---

## Draw Rectangle

```javascript
ctx.fillStyle = "blue";

ctx.fillRect(20,20,150,100);
```

---

## Draw Line

```javascript
ctx.beginPath();

ctx.moveTo(20,20);

ctx.lineTo(200,100);

ctx.stroke();
```

---

## Draw Circle

```javascript
ctx.beginPath();

ctx.arc(
100,
100,
50,
0,
2*Math.PI
);

ctx.fill();
```

---

## Draw Text

```javascript
ctx.font = "30px Arial";

ctx.fillText(
"Hello",
50,
80
);
```

---

## Draw Image

```javascript
const img =
new Image();

img.src="cat.jpg";

img.onload=()=>{

ctx.drawImage(img,0,0);

};
```

---

# Common Uses

- Games
- Charts
- Drawing Apps
- Animations
- Image Editors

---

# ==================================
# SVG vs Canvas
# ==================================

| SVG | Canvas |
|------|---------|
| Vector | Pixel |
| Scalable | Not Scalable |
| XML | JavaScript |
| Easy to Edit | Difficult |
| Best for Icons | Best for Games |
| Small Graphics | Complex Graphics |

---

# Which One Should You Use?

Use SVG for

- Logos
- Icons
- Flowcharts
- Graphs

Use Canvas for

- Games
- Animations
- Photo Editors
- Real-time Charts

---

# ==================================
# PART 3 — HTML5 Graphics Best Practices
# ==================================

✅ Use SVG for UI graphics.

✅ Use Canvas for animations.

✅ Optimize SVG files.

✅ Keep Canvas size reasonable.

---

# Common Mistakes

❌ Using Canvas for logos.

❌ Using SVG for games.

❌ Forgetting width and height.

---

# Interview Questions

1. What is SVG?
2. What is Canvas?
3. Difference between SVG and Canvas?
4. Which is better for logos?
5. Which is better for games?
6. Is SVG scalable?
7. Does Canvas require JavaScript?

---

# Practice

1. Draw a rectangle.
2. Draw a circle.
3. Draw a star.
4. Draw text.
5. Build a traffic signal using SVG.
6. Build a smiley face using Canvas.

---

# Revision Sheet

## SVG Tags

| Tag | Purpose |
|------|---------|
| svg | Container |
| circle | Circle |
| rect | Rectangle |
| line | Line |
| ellipse | Ellipse |
| polygon | Polygon |
| polyline | Multiple Lines |
| text | Text |

---

## Canvas Methods

| Method | Purpose |
|---------|---------|
| getContext() | Drawing Context |
| fillRect() | Rectangle |
| stroke() | Border |
| arc() | Circle |
| fillText() | Text |
| drawImage() | Image |

---

# Chapter Summary

You learned:

- SVG Basics
- Canvas Basics
- Shapes
- Drawing
- Graphics
- SVG vs Canvas
- Best Practices
- Interview Questions
- Practice Exercises

SVG is ideal for **icons, logos, and scalable graphics**, while Canvas is best suited for **games, animations, and pixel-based drawing**.