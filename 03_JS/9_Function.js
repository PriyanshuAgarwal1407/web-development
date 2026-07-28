// FUNCTION in JavaScript
// A function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it).
// A function can take inputs (parameters) and return an output (return value).
// There are different ways to define a function in JavaScript, including function declarations, function expressions, and arrow functions.

/*
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (x, y) => x * y;

// Calling the functions
console.log(greet("Priyanshu")); // Output: Hello, Priyanshu!
console.log(add(5, 3));          // Output: 8
console.log(multiply(4, 2));     // Output: 8

console.log(greet);                 // Output: [Function: greet]


// Function call with arguments
function addNumbers(a, b) {
    const sum = a + b;
    console.log(sum)
}
addNumbers(5, 3);   // Output: 8
addNumbers(10, 20); // Output: 30


// Default Parameters

function greetUser(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greetUser());                    // Output: Hello, Guest!
console.log(greetUser("Priyanshu"));         // Output: Hello, Priyanshu!
console.log(greetUser("Ram", "Shyam"));      // Output: Hello, Ram!

// Function with Rest Parameters is used to handle an indefinite number of arguments as an array.
// Rest Parameters (`...`) (ES6)
// This allows us to represent an indefinite number of arguments as an array.

function sumAll(...numbers) {
    console.log(numbers);
}

sumAll(1, 2, 3);          // Output: [1, 2, 3]
sumAll(4, 5, 6, 7, 8);    // Output: [4, 5, 6, 7, 8]
sumAll(10);               // Output: [10]
sumAll();                 // Output: [] (no arguments passed, so an empty array is returned)


// Rest vs Spread Operator
// The rest operator is used in function parameters to collect all remaining arguments into an array, while the spread operator is used to expand an array into individual elements.
// Spread Operator is used to expand an array into individual elements, while the rest operator is used to collect multiple elements into a single array.

// Spread Operator
const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3

// Rest Operator
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3));     // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
*/

// ---------------------------------------------------------------------------------------------------------------------
// Function Expressions
// A function expression is a function that is assigned to a variable. It can be anonymous (without a name) or named. Function expressions are not hoisted, meaning they cannot be called before they are defined.
/*
const greet = function(name) {              // Anonymous Function Expression
    return "Hello, " + name + "!";
};

const add = function addNumbers(a, b) {     // Named Function Expression
    return a + b;
};

// Calling the functions
console.log(greet("Priyanshu")); // Output: Hello, Priyanshu!
console.log(add(5, 3));          // Output: 8
*/
// ---------------------------------------------------------------------------------------------------------------------

// Arrow Functions (ES6)
// Arrow functions are a more concise syntax for writing function expressions. They are always anonymous and do not have their own `this` context, which makes them useful in certain situations, such as when working with callbacks or methods that require a specific `this` value.
/*

const greet = (name) => {
    return "Hello, " + name + "!";
};

const add = (a, b) => {
    return a + b;
};

// Calling the functions
console.log(greet("Priyanshu")); // Output: Hello, Priyanshu!
console.log(add(5, 3));          // Output: 8

// Arrow function with implicit return (for single expression)
const multiply = (x, y) => x * y;
console.log(multiply(4, 2));     // Output: 8


// const square = (x) => x * x;  // Single parameter
const square = x => x * x;       // Single parameter, no parentheses needed
console.log(square(5));          // Output: 25


// const greeting = () => {
//     return user = {
//         name: "Priyanshu",
//         age: 22,
//         address: "Fatehabad, India"
//     }
// };

const greeting = () => ({name: "Priyanshu", age: 22, address: "Fatehabad, India"}); // Implicit return of an object
console.log(greeting());             // Output: { name: 'Priyanshu', age: 22, address: 'Fatehabad, India' }
*/


// ---------------------------------------------------------------------------------------------------------------------

// Immediately Invoked Function Expressions (IIFE)
// An IIFE is a function that is executed immediately after it is defined. It is often used to create a new scope and avoid polluting the global namespace.
/*
(function() {
    console.log("This is an IIFE!");
})();

// With arguments
(function(name) {
    console.log("Hello, " + name + "!");
})("Priyanshu");

// Arrow function IIFE
(() => {
    console.log("This is an arrow function IIFE!");
})();
*/

// ---------------------------------------------------------------------------------------------------------------------
// Function Callbacks
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used for asynchronous operations, such as handling events or making API requests.

// function meet(callback) {
//     console.log("Hello, Priyanshu!");
//     callback();
// };

// function sayGoodbye() {
//     console.log("Goodbye, Priyanshu!");
// };

// meet(sayGoodbye); 
// Output: 
// Hello, Priyanshu! 
// Goodbye, Priyanshu!


function greet() {
    console.log("Welcome to the world of JavaScript!");
}

function dance() {
    console.log("Let's dance!");
}

function meet(callback) {
    console.log("Hello, Priyanshu!");
    // greet(); // This would call the greet function directly, not as a callback
    // dance(); // This would call the dance function directly, not as a callback
    callback();
    console.log("I like JavaScript!");
}

meet(greet);
console.log();
meet(dance);