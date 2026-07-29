// -----------------------------------------------------------------------------------------------
// Js is single threaded synchronous language, it means that it can only execute one task at a time.

// Example:
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// Output:
// Task 1
// Task 2
// Task 3

// In the above example, the tasks are executed one after another in a synchronous manner.
// If any task takes time to complete, it will block the execution of the next task until it is finished.

// -----------------------------------------------------------------------------------------------
// console.log("Hi Ji");

// const button1 = document.getElementById("button1");
// button1.addEventListener('click',()=>{
//     console.log("Button 1 is clicked");
// });

// const button2 = document.getElementById("button2");
// button2.addEventListener('click',()=>{
//     console.log("Button 2 is clicked");
// });

// const button3 = document.getElementById("button3");
// button3.addEventListener('click',()=>{
//     console.log("Button 3 is clicked");
// });

// console.log("I am the end");

// Web-APIs are the APIs(Application Programming Interfaces) provided by the browser to handle asynchronous operations like setTimeout, fetch, etc. These APIs are not part of the JavaScript language itself but are provided by the environment in which JavaScript runs (like browsers or Node.js).

// ----------------------------------------------------------------------------------------------

// It uses an event loop to handle asynchronous operations, allowing it to perform non-blocking I/O operations while still maintaining a single thread of execution.
// This design allows for efficient handling of multiple tasks without the need for multi-threading, but it also means that long-running tasks can block the execution of other tasks if not handled properly.

console.log("Start the Operation");

fetch("https://api.github.com/users").then(() => {
  console.log("Git Hub user info");
});

console.log("end of operation");
