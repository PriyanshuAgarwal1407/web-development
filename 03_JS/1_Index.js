// JavaScript 
// It is a programming language that is commonly used in web development to create interactive effects within web browsers.
// It is a versatile language that can be used for both front-end and back-end development, and it is an essential part of the web development stack alongside HTML and CSS.
// It is developed by Brendan Eich in 1995 and has since become one of the most popular programming languages in the world. Its name is derived from the programming language Java, but it is not directly related to it. 
// JavaScript is an interpreted language, which means that it does not need to be compiled before it can be run. It is also a dynamically typed language, which means that variable types are determined at runtime rather than at compile time.



console.log("Hello, World!"); // Used to print a message to the console, which is useful for debugging and testing code.


// Variables in JavaScript are used to store data values. They can be declared using the keywords var, let, or const. The choice of keyword affects the scope and mutability of the variable.

// var: Declares a variable that is function-scoped or globally-scoped. It can be re-declared and updated within its scope.
// let: Declares a block-scoped variable that can be updated but not re-declared within its scope.
// const: Declares a block-scoped variable that cannot be updated or re-declared. It must be initialized at the time of declaration.


let name = "Priyanshu";
let age = 21;
// let age = 22; // This will throw an error because 'age' is already declared with 'let' and cannot be re-declared in the same scope.

age = 30; // This is valid because 'age' was declared with 'let', which allows updating the value.
console.log(name , age); 



const accountNumber = 1234567890;
// accountNumber = 9876543210; // This will throw an error because 'accountNumber' is declared with 'const' and cannot be updated.
console.log(accountNumber);


// Old way of declaring variables
// var a = 10;
// var a = 20;
// console.log(a);


// if(true){
//     var a = 20;
// }
// console.log(a); // var is function scoped

// This means that the variable 'a' is accessible outside of the if block because it is declared with 'var', which has function scope rather than block scope.


// function fun(){
//     var c = 20;
// }
// console.log(c); // Error: c is not defined

// THis happens because 'var' is function-scoped, meaning that the variable 'c' is only accessible within the function 'fun' and not outside of it.



// ----------------------------------------------------------------------------------------------------
// ✅ Default to const. Use let only when reassignment is needed. Never use var in new code.
// ----------------------------------------------------------------------------------------------------


// Datatypes in JS is a classification of data that tells the interpreter or compiler how the programmer intends to use the data. JavaScript has two main categories of datatypes: Primitive and Non-Primitive (Reference) datatypes.

// 1, Primitive Datatypes (immutable, stored by value): String, Number, Boolean, Undefined, Null, Symbol, BigInt

const name1 = "Priyanshu Agarwal";           // String
const greeting = 'Hello';                   // String
const message = `Welcome to JavaScript!`;   // String (template literal. used for multi-line strings and string interpolation)

const age1 = 21;      // Number
const pi = 3.14;     // Number

let isStudent = true;    // Boolean
let isEmployed = false;  // Boolean

let notSet;                      // undefined
const empty = null;              // intentional absence of value
const sym = Symbol("unique");    // Symbol used to create unique identifiers for object properties
const big = 9007199254740993n;   // BigInt for numbers beyond Number.MAX_SAFE_INTEGER



console.log(name1, greeting, message, age1, pi, isStudent, isEmployed, notSet, empty, sym, big);
console.log(typeof name1, typeof greeting, typeof message, typeof age1, typeof pi, typeof isStudent, typeof isEmployed, typeof notSet, typeof empty, typeof sym, typeof big);
    

/*
💡 Note: 
undefined = variable declared but not assigned. 
null = intentional "no value" assigned explicitly by the developer.
*/


// ----------------------------------------------------------------------------------------------------
// 2. Non-Primitive Datatypes or reference types (objects, stored by reference): Object, Array, Function
// ----------------------------------------------------------------------------------------------------

// Object: A collection of key-value pairs. Keys are strings (or Symbols), and values can be any datatype.
const person = {
    name: "Priyanshu",
    age: 21,
    isStudent: true
};

// Array: An ordered collection of values. Values can be of any datatype, and arrays can contain mixed types.
const numbers = [1, 2, 3, 4, 5];
const mixedArray = [1, "two", true, null, { key: "value" }];

console.log(person, numbers, mixedArray);


// Function: A block of code designed to perform a particular task. Functions can take parameters and return values.
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Priyanshu")); // Output: Hello, Priyanshu!

console.log(typeof person, typeof numbers, typeof mixedArray, typeof greet); 
// Output: object object object function



// ------------------------------------------------------------------------------------
/*
Identifiers: Names for variables, functions, classes. Rules:
    Must start with a letter, _, or $.
    Can contain letters, digits, _, $ (not at the start with digits).
    Case-sensitive.
    Cannot be reserved words (class, function, return, etc.).
    It follows camelCase convention for multi-word identifiers (e.g., myVariableName).
    
Examples of valid identifiers:
let myVariable = 10;
let _myVariable = 20;
let $myVariable = 30;
let myVariable1 = 40;
let myVariableName = "Hello";

Examples of invalid identifiers:
let 1myVariable = 50; // ❌ Invalid: starts with a digit
let my-variable = 60; // ❌ Invalid: contains a hyphen
let my variable = 70; // ❌ Invalid: contains a space
let class = 80;       // ❌ Invalid: 'class' is a reserved word
*/
// ------------------------------------------------------------------------------------


// Type Checking: typeof
/*
typeof "hi";         // "string"
typeof 42;           // "number"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object"  ⚠️ known quirk/bug
typeof Symbol();     // "symbol"
typeof 10n;          // "bigint"
typeof {};           // "object"
typeof [];           // "object"
typeof function(){}; // "function"
*/

// typeof (Non primitive datatypes) is "object".

// Primitive vs Non-Primitive Datatypes
/*
Primitive Datatypes:
    - Immutable (cannot be changed)
    - Stored by value
    - Examples: String, Number, Boolean, Undefined, Null, Symbol, BigInt

Non-Primitive Datatypes:
    - Mutable (can be changed)
    - Stored by reference
    - Examples: Object, Array, Function
*/
