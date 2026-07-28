// ===============================
// Events & Event Listeners
// ===============================

// An event is any action performed in the browser,
// like clicking a button, typing, scrolling, or moving the mouse.

// An event listener waits for an event and runs a function
// when that event happens.


// -------------------------------
// onclick
// -------------------------------

// onclick can hold only ONE function.

// const element = document.getElementById("title");

// element.onclick = function () {
//     element.style.color = "red";
// };

// element.onclick = function () {
//     element.textContent = "Clicked!";
// };

// The second function replaces the first one.


// -------------------------------
// addEventListener()
// -------------------------------

// Allows multiple functions for the same event.

// const element = document.getElementById("title");

// element.addEventListener("click", () => {
//     element.style.color = "red";
// });

// element.addEventListener("click", () => {
//     element.textContent = "Clicked!";
// });

// element.addEventListener("mouseenter", () => {
//     element.style.color = "blue";
// });

// element.addEventListener("mouseleave", () => {
//     element.style.color = "black";
// });


// -------------------------------
// Common Events
// -------------------------------

/*
click             → Single click
dblclick          → Double click
input             → While typing
change            → Value changed
submit            → Form submitted
keydown           → Key pressed
keyup             → Key released
mouseenter        → Mouse enters
mouseleave        → Mouse leaves
mouseover         → Mouse enters (includes children)
mouseout          → Mouse leaves (includes children)
mousemove         → Mouse moves
focus             → Gets focus
blur              → Loses focus
DOMContentLoaded  → HTML loaded
load              → Entire page loaded
scroll            → Page scrolls
resize            → Window resized
contextmenu       → Right click
wheel             → Mouse wheel
*/


// -------------------------------
// Multiple Elements
// -------------------------------

// const parent = document.getElementById("parent");

// for (const child of parent.children) {
//     child.addEventListener("click", () => {
//         child.textContent = `${child.id} clicked!`;
//     });
// }


// -------------------------------
// Event Bubbling
// -------------------------------

// Default order:
//
// Child
//   ↓
// Parent
//   ↓
// Grandparent


// -------------------------------
// Event Capturing
// -------------------------------

// Reverse order:
//
// Grandparent
//   ↓
// Parent
//   ↓
// Child
//
// Pass true as the third argument.


// -------------------------------
// Bubbling Example
// -------------------------------

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", (event) => {
    console.log("Grandparent");
    console.log(event.target);         // Actual clicked element
    console.log(event.currentTarget);  // Current listener
});

parent.addEventListener("click", (event) => {
    console.log("Parent");
    event.stopPropagation();
});

child.addEventListener("click", (event) => {
    console.log("Child");
    event.stopPropagation();
});


// -------------------------------
// Capturing Example
// -------------------------------

// grandparent.addEventListener("click", () => {
//     console.log("Grandparent");
// }, true);

// parent.addEventListener("click", () => {
//     console.log("Parent");
// }, true);

// child.addEventListener("click", () => {
//     console.log("Child");
// }, true);


// -------------------------------
// preventDefault()
// -------------------------------

// Stops the browser's default behaviour.

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
// });


// -------------------------------
// removeEventListener()
// -------------------------------

// You must pass the same function reference.

function handleClick() {
    console.log("Clicked");
}

// parent.addEventListener("click", handleClick);

// parent.removeEventListener("click", handleClick);


// -------------------------------
// Quick Revision
// -------------------------------

/*
onclick               → One function only
addEventListener()    → Multiple listeners
removeEventListener() → Removes listener

event.target          → Actual clicked element
event.currentTarget   → Element handling the event

stopPropagation()     → Stops bubbling
preventDefault()      → Stops default browser action

Bubbling  : Child → Parent → Grandparent
Capturing : Grandparent → Parent → Child
*/