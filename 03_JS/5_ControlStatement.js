// Control statements are used to control the flow of execution in a program. They allow you to make decisions, repeat actions, and handle different scenarios based on conditions. Here are some common control statements in JavaScript:

// 1. Conditional Statements (if, else if, else)
// 2. Switch Statement
// 3. Loops (for, while, do...while)
// 4. Break and Continue Statements
// 5. Ternary Operator

// ------------------------------------------------------------------------------------------
// 1. Conditional Statements (if, else if, else): Conditional statements allow you to execute different blocks of code based on certain conditions.

/*
if (condition) {
    // Code to execute if the condition is true
}

if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}

if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if both conditions are false
}
*/

let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// ------------------------------------------------------------------------------------------
// 2. Switch Statement: The switch statement allows you to execute different blocks of code based on the value of a variable.

/*
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if none of the cases match
}
*/

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// ------------------------------------------------------------------------------------------
// 3. Loops (for, while, do...while): Loops allow you to execute a block of code multiple times based on a condition.

// For Loop
/*
for (initialization; condition; increment/decrement) {
    // Code to execute in each iteration
}
*/

for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}

// While Loop
/*
while (condition) {
    // Code to execute as long as the condition is true
}
*/

let count = 1;
while (count <= 5) {
    console.log("Count: " + count);
    count++;
}

// Do...While Loop
/*
do {
    // Code to execute at least once and then repeat as long as the condition is true
} while (condition);
*/

let num = 1;
do {
    console.log("Number: " + num);
    num++;
} while (num <= 5);

// ------------------------------------------------------------------------------------------
// 4. Break and Continue Statements: The break statement is used to exit a loop or switch statement, while the continue statement skips the current iteration and moves to the next one.

// Break Statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log("Break Example: " + i);
}

// Continue Statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the iteration when i is 5
    }
    console.log("Continue Example: " + i);
}

// ------------------------------------------------------------------------------------------
// 5. Ternary Operator: The ternary operator is a shorthand way of writing an if-else statement.

/*
condition ? expressionIfTrue : expressionIfFalse;
*/

let isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(isAdult);