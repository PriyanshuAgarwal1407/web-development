// scope and Closue, HOF

/*
### What is Scope?

**Scope** = The **visibility** and **accessibility** of variables. It answers: "From where can I access this variable?"

Think of scope like **rooms in a house**:

- Variables declared in a room are accessible in that room
- You can look OUT from inner rooms to outer rooms
- You CANNOT look IN from outer rooms to inner rooms


Global Scope: Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the code.
Local Scope: Variables declared inside a function are in the local scope. They can only be accessed within that function.
Block Scope: Variables declared with let or const inside a block (like an if statement or loop) are in the block scope. They can only be accessed within that block.
*/

/*

let a = 10;   // Global Scope
const b = 20; // Global Scope


if(true) {
    console.log(a, b); // 10 20
    let d = 40; // Block Scope
    console.log(d); // 40
    var e = 50; // Function Scope (or Global if not in a function)
    console.log(e); // 50
}

function greet() {
    console.log(a, b); // 10 20
    let c = 30; // Local Scope
    var f = 60; // Function Scope
    console.log(c, f); // 30 60
};
greet();

// console.log(c);    // ReferenceError: c is not defined
// console.log(d);    // ReferenceError: d is not defined
console.log(e);       // 50 (because var is function-scoped, and here it's in the global scope)
// console.log(f);    // ReferenceError: f is not defined
*/

// let global = 30;
// function outer() {
//     let global = 20;
//     console.log(global); // 20
// };

// outer();
// console.log(global); // 30

// This happens because of **scope**. The variable `global` inside the function `outer` is in the local scope of that function, while the variable `global` outside the function is in the global scope. When we call `console.log(global)` inside the function, it refers to the local variable, and when we call it outside, it refers to the global variable.

/*
function createCounter() {

    let count = 0;
    function increment() {
        // console.log("I am increment function");
        count++;
        return count;
    }
    return increment;
}

// console.log(count);             // ReferenceError: count is not defined
const counter = createCounter();
console.log(counter);              // [Function: increment]
console.log(counter());            // 1
console.log(counter());            // 2
console.log(counter());            // 3
*/

// This is an example of a **closure**. The `increment` function has access to the `count` variable even after `createCounter` has finished executing.
// This is because `increment` maintains a reference to its outer function's scope, allowing it to "remember" the value of `count` between calls.

// ----------------------------------------------------------------------------------------------------------
// Closure
// Closure is a combination of a function and its lexical environment within which that function was declared.
// In other words, a closure gives you access to an outer function’s scope from an inner function.
// In JS, closures are created every time a function is created, at function creation time.

/*
let globalVar = "I am a global variable";

function outerFunction() {
    let outerVar = "I am an outer variable";

    function innerFunction() {
        let innerVar = "I am an inner variable";
        console.log(globalVar); // Accessing global variable
        console.log(outerVar);  // Accessing outer function's variable
        console.log(innerVar);  // Accessing inner function's variable
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // This will log all three variables, demonstrating closure.
*/

// let user = {
//     balance: 1000,
//     deposit: function(amount) {
//         if(typeof amount !== 'number' || amount <= 0) {
//             console.log("Please enter a valid amount to deposit.");
//             return;
//         }
//         this.balance += amount;
//         console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
//     },
//     withdraw: function(amount) {
//         if(typeof amount !== 'number' || amount <= 0) {
//             console.log("Please enter a valid amount to withdraw.");
//             return;
//         }
//         if(amount > this.balance) {
//             console.log("Insufficient balance.");
//             return;
//         }
//         this.balance -= amount;
//         console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
//     },
//     checkBalance: function() {
//         console.log(`Current Balance: ${this.balance}`);
//     }
// }

// user.checkBalance(); // Current Balance: 1000
// user.deposit(500);   // Deposited: 500. New Balance: 1500
// user.withdraw(200);  // Withdrew: 200. New Balance: 1300
// user.checkBalance(); // Current Balance: 1300

// This example demonstrates how closures can be used to maintain state (the user's balance) across multiple function calls, while also encapsulating the logic for depositing and withdrawing funds.

function createBankAccount() {
  let balance = 1000;
  const user = {
    
    deposit: function (amount) {
      if (typeof amount !== "number" || amount <= 0) {
        console.log("Please enter a valid amount to deposit.");
        return;
      }
      balance += amount;
      console.log(`Deposited: ${amount}. New Balance: ${balance}`);
    },
    withdraw: function (amount) {
      if (typeof amount !== "number" || amount <= 0) {
        console.log("Please enter a valid amount to withdraw.");
        return;
      }
      if (amount > balance) {
        console.log("Insufficient balance.");
        return;
      }
      balance -= amount;
      console.log(`Withdrew: ${amount}. New Balance: ${balance}`);
    },
    checkBalance: function () {
      console.log(`Current Balance: ${balance}`);
    },
  };
  return user;
}

const customerAccount = createBankAccount();
customerAccount.checkBalance();  // Current Balance: 1000
customerAccount.deposit(500);    // Deposited: 500. New Balance: 1500
customerAccount.withdraw(200);   // Withdrew: 200. New Balance: 1300
customerAccount.checkBalance();  // Current Balance: 1300


// This example demonstrates how closures can be used to maintain state (the user's balance) across multiple function calls, while also encapsulating the logic for depositing and withdrawing funds. The `balance` variable is private to the `createBankAccount` function and cannot be accessed directly from outside, ensuring that it can only be modified through the provided methods.





// ------------------------------------
// Higher-Order Functions (HOF)
// A higher-order function is a function that can take another function as an argument, return a function, or both.
// This allows for more abstract and flexible code.

function greetUser(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "Priyanshu";
  console.log(callback(name));
}

processUserInput(greetUser); // This will log: Hello, Priyanshu!

// In this example, `processUserInput` is a higher-order function because it takes another function (`greetUser`) as an argument.
// This allows us to pass different greeting functions to `processUserInput`, making it more versatile.
