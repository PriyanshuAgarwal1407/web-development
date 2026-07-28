// "The DOM (Document Object Model) is a tree-like representation of your HTML document that JavaScript can understand and manipulate. It allows you to access and change the content, structure, and style of your web pages dynamically."


// In simple words, DOM (Document Object Model) = A tree-like representation of an HTML document that JavaScript can read and modify.



/*
===========================
WINDOW OBJECT IN JAVASCRIPT
===========================

The `window` object is the global object provided by the browser.
It represents the browser window (or tab) in which the current web page is running.

Every global variable, function, and browser API is accessed through the `window` object. Since it is the global object, JavaScript automatically assumes `window.` even when you don't write it.

Example:
window.alert("Hello");
alert("Hello");              // Same as above

window.console.log("Hi");
console.log("Hi");           // Same as above

window.setTimeout(() => {}, 1000);
setTimeout(() => {}, 1000);  // Same as above


========================================
WINDOW HIERARCHY
========================================

window
│
├── document
│   ├── html
│   ├── head
│   └── body
│
├── location
├── history
├── navigator
├── screen
├── localStorage
├── sessionStorage
├── console
├── alert()
├── confirm()
├── prompt()
├── setTimeout()
├── setInterval()
└── ...

========================================
WINDOW VS DOCUMENT
========================================

window
------
- Represents the browser window/tab.
- Global object in JavaScript.
- Contains browser APIs.
- Parent of the document object.

document
--------
- Represents the HTML page.
- Used to access and manipulate HTML elements (DOM).
- Child object of window.

Relationship:
-------------
window.document === document    // true
*/



// 1. Selecting Elements
/*
// By ID
const heading = document.getElementById("heading");
console.log(heading); // <h1 id="heading">DOM Manipulation Demo</h1>


// By Class (HTMLCollection)
const removeBtns = document.getElementsByClassName("removeBtn");
console.log(removeBtns); // HTMLCollection(1) [button.removeBtn]


// By Tag Name (HTMLCollection)
const listItems = document.getElementsByTagName("li");
console.log(listItems); // HTMLCollection(4) [li, li, li, li]
*/



// 2. Reading & Changing Content
/*
const contentHeading = document.getElementById("heading");
console.log(contentHeading.textContent); // DOM Manipulation Demo (Returns only text.)
console.log(contentHeading.innerHTML);   // DOM Manipulation Demo (Reads/writes HTML.)
console.log(contentHeading.innerText);   // DOM Manipulation Demo (Returns visible text only.)

// Note: The above code selects the heading element with the id "heading" and logs its content using different properties: textContent, innerHTML, and innerText. 
// All three properties return the same text in this case, but they can behave differently in other scenarios, especially when dealing with HTML tags or hidden elements. 

contentHeading.textContent = "Welcome to DOM Manipulation";          // Change text content 
contentHeading.style.color = "blue";                                 // Change text color
contentHeading.style.backgroundColor = "pink";                       // Change background color

contentHeading.innerHTML = "<b>Bold Text</b>";               // Change inner HTML
contentHeading.innerText = "Plain Text";                     // Change inner text



const list = document.getElementsByTagName("li");
console.log(list);                 // HTMLCollection(4) [li, li, li, li]
console.log(list[0].textContent);  // Apple
console.log(list[1].textContent);  // Mango


// Query Selector
const heading = document.querySelector("#heading");
const lists = document.querySelector("#list");
const button = document.querySelector(".removeBtn");

console.log(heading);  // <h1 id="heading">DOM Manipulation Demo</h1>
console.log(lists);    // <ul id="list">...</ul>
console.log(button);   // <button class="removeBtn">Remove Last Item</button>


// querySelectorAll
const selectorAllHeading = document.querySelectorAll("h2");
console.log(selectorAllHeading); // NodeList(2) [h2#subheading, h2]

console.log(selectorAllHeading[0].textContent); // We are learning DOM Manipulation
console.log(selectorAllHeading[1].textContent); // List of Fruits
*/


// Assign id to h2
// const h2 = document.querySelector("h2");
// h2.id = "newHeading";
// . is class, # is id, tagname is tagname
