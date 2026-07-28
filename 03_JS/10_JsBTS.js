// ===============================
// Global Execution Context (GEC)
// ===============================

// Step 1: Variable declaration
var a = 10;
var b = 20;

// Step 2: Function declaration
// During Memory Creation Phase, the entire function
// is stored in memory. The function body is NOT executed yet.
function addNumber(num1, num2) {

    // Local variable inside function
    var sum = num1 + num2;

    // Return the calculated value
    return sum;
}

// ===============================
// Function Call - 1
// ===============================

// A new Function Execution Context (FEC) is created.

// Memory Phase of FEC:
// num1 = 10
// num2 = 20
// sum = undefined

// Execution Phase:
// sum = 10 + 20 = 30
// return 30

var sumResult1 = addNumber(a, b);

// Now:
// sumResult1 = 30

// ===============================
// Function Call - 2
// ===============================

// Another NEW Function Execution Context is created.

// Memory Phase:
// num1 = 4
// num2 = 5
// sum = undefined

// Execution Phase:
// sum = 4 + 5 = 9
// return 9

var sumResult2 = addNumber(4, 5);

// Now:
// sumResult2 = 9

// Print the results
console.log(sumResult1, sumResult2);

// Output:
// 30 9




// ===============================
// Hoisting in JavaScript
// Big mith. Hoisting is when the variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
// Hoisting is a JavaScript's behavior of knowing about variables and functions before executing the code. How it treats that knowledge depends on the keyword(var, let, const, function).