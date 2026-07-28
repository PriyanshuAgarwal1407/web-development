// Operators
// An operator is a symbol or function that performs an operation on one or more operands (values or variables) to produce a result. In programming, operators are used to manipulate data and perform various tasks, such as arithmetic calculations, logical comparisons, and assignment of values.
// Syntax: operand1 operator operand2

// Types of Operators in JavaScript:
// 1. Arithmetic Operators: Used to perform mathematical operations on numbers.
// 2. Assignment Operators: Used to assign values to variables.
// 3. Comparison Operators: Used to compare two values and return a boolean result (true or false).
// 4. Logical Operators: Used to combine multiple boolean expressions and return a boolean result.
// 5. Bitwise Operators: Used to perform bit-level operations on binary numbers.
// 6. Ternary Operator: A shorthand way of writing an if-else statement that returns one of two values based on a condition.
// 7. Type Operators: Used to check the type of a variable or value.
// 8. instanceof Operator: Used to check if an object is an instance of a particular class or constructor function.
// 9. Comma Operator: Used to evaluate multiple expressions and return the value of the last expression.
// 10. Unary Operators: Used to perform operations on a single operand, such as negation or increment/decrement.


// --------------------------------------------------------------------------
// 1. Example of Arithmetic Operators:
let x = 10;
let y = 5;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus (remainder)

// Increment and Decrement
x++; // Post-increment by 1 (x = x + 1)
y--; // Post-decrement by 1 (y = y - 1)
--x; // Pre-decrement by 1 (x = x - 1)
--y; // Pre-increment by 1 (y = y + 1)

console.log(x, y); // Output: 9 5

// --------------------------------------------------------------------------
// 2.Example of Assignment Operators:
let a = 10;     // Basic Assignment

// Compound Assignment
a += 5;         // Equivalent to a = a + 5
a -= 3;         // Equivalent to a = a - 3
a *= 2;         // Equivalent to a = a * 2
a /= 4;         // Equivalent to a = a / 4
a %= 3;         // Equivalent to a = a % 3

console.log(a); // Output: 1


// --------------------------------------------------------------------------
// 3. Example of Comparison Operators:
let b = 10;
let c = 5;

console.log(b == c);  // Equality (Checks value only)
console.log(b != c);  // Inequality (Checks value only)
console.log(b > c);   // Greater than
console.log(b < c);   // Less than
console.log(b >= c);  // Greater than or equal to
console.log(b <= c);  // Less than or equal to


console.log(b === c); // Strict equality (checks value and type)
console.log(b !== c); // Strict inequality (checks value and type)


// --------------------------------------------------------------------------
// 4. Example of Logical Operators:
let d = true;
let e = false;

console.log(d && e); // Logical AND (true if both operands are true)
console.log(d || e); // Logical OR (true if at least one operand is true)
console.log(!d);     // Logical NOT (inverts the boolean value)


// Truthy and Falsy values in JavaScript:
// In JavaScript, values can be classified as either "truthy" or "falsy" based on how they are evaluated in a boolean context. 
// A truthy value is a value that is considered true when evaluated in a boolean context, while a falsy value is a value that is considered false.

// Falsy values in JavaScript:
// 1. false
// 2. 0 (zero)
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not-a-Number)

// All other values are considered truthy, including:
// 1. true
// 2. Non-zero numbers (e.g., 1, -1, 3.14)
// 3. Non-empty strings (e.g., "hello", "false")
// 4. Objects and arrays (even if they are empty)
// 5. Functions


// --------------------------------------------------------------------------
// 5. Example of Bitwise Operators:
let f = 5;  // Binary: 0101
let g = 3;  // Binary: 0011

console.log(f & g);          // Bitwise AND (0101 & 0011 = 0001) => Output: 1
console.log(f | g);          // Bitwise OR (0101 | 0011 = 0111) => Output: 7
console.log(f ^ g);          // Bitwise XOR (0101 ^ 0011 = 0110) => Output: 6
console.log(~f);             // Bitwise NOT (~0101 = 1010) => Output: -6 (two's complement)
console.log(f << 1);         // Left shift (0101 << 1 = 1010) => Output: 10
console.log(f >> 1);         // Right shift (0101 >> 1 = 0010) => Output: 2


// --------------------------------------------------------------------------
// 6. Example of Ternary Operator:
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // If age is greater than or equal to 18, canVote is "Yes", otherwise "No"
console.log(canVote); // Output: Yes


// --------------------------------------------------------------------------
// 7. Example of Type Operators:
let h = 42;
let i = "Hello, World!";
let j = true;

console.log(typeof h); // Output: number
console.log(typeof i); // Output: string
console.log(typeof j); // Output: boolean


// 8. Example of instanceof Operator:
class Person {
    constructor(name) {
        this.name = name;
    }
}

const person1 = new Person("Priyanshu");

console.log(person1 instanceof Person); // Output: true
console.log(person1 instanceof Object); // Output: true


// --------------------------------------------------------------------------
// 9. Example of comma Operator:
let a = 5, b = 10, c = 15;
console.log(a, b, c); // Output: 5 10 15

let x = (1, 2, 3); // x will be assigned the value 3
console.log(x);    // Output: 3

let y = (console.log("Hello"), console.log("World"), 42); // y will be assigned the value 42
console.log(y);    // Output: 42


// --------------------------------------------------------------------------
// 10. Example of Unary Operators:
let z = 5;
let m = -z;     // Unary negation operator
console.log(m); // Output: -5

let n = 10;
n++;            // Unary increment operator (n = n + 1)
console.log(n); // Output: 11

let p = 20;
p--;            // Unary decrement operator (p = p - 1)
console.log(p); // Output: 19

let q = "Hello";
console.log(+q); // Unary plus operator (attempts to convert q to a number, Output: NaN)


// --------------------------------------------------------------------------
// OPERATOR PRECEDENCE
// Operator precedence determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated before operators with lower precedence. 

// Order of Precedence (from highest to lowest):
// 1. Parentheses ()
// 2. Exponentiation (**)
// 3. Multiplication (*), Division (/), Modulus (%)
// 4. Addition (+), Subtraction (-)
// 5. Relational operators (<, <=, >, >=)
// 6. Equality operators (==, !=, ===, !==)
// 7. Logical AND (&&)
// 8. Logical OR (||)
// 9. Assignment (=, +=, -=, *=, /=, %=, **=)

// If two operators have the same precedence, their associativity determines the order of evaluation (left-to-right or right-to-left).


// Example:
let result = 3 + 4 * 2; // Multiplication (*) has higher precedence than addition (+)
console.log(result);    // Output: 11 (4 * 2 is evaluated first, then added to 3)

let result2 = (3 + 4) * 2;  // Parentheses () have the highest precedence
console.log(result2);       // Output: 14 (3 + 4 is evaluated first, then multiplied by 2)

let result3 = 10 - 2 + 5;  // Both subtraction (-) and addition (+) have the same precedence, evaluated left-to-right
console.log(result3);      // Output: 13 (10 - 2 is evaluated first, then 5 is added)


// ------------------------------------------------------------------------------------------------
// Floating Point Precision
// In JavaScript, floating-point numbers are represented using the IEEE 754 standard, which can lead to precision issues when performing arithmetic operations with decimal numbers. This is because some decimal fractions cannot be represented exactly in binary form, leading to small rounding errors.

// Example of Floating Point Precision Issue:
let a = 0.1;
let b = 0.2;
let sum = a + b;

console.log(sum); // Output: 0.30000000000000004 (not exactly 0.3 due to precision issues)

// To mitigate floating-point precision issues, you can use techniques such as rounding the result to a fixed number of decimal places or using libraries that handle decimal arithmetic more accurately.

let roundedSum = Math.round(sum * 100) / 100; // Rounding to 2 decimal places
console.log(roundedSum);                      // Output: 0.3 (now it is rounded to the expected value)

let preciseSum = parseFloat((a + b).toFixed(2));  // Using toFixed to round to 2 decimal places
console.log(preciseSum);                          // Output: 0.3 (now it is rounded to the expected value)



// ------------------------------------------------------------------------------------------------
/*
Type Coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. JavaScript is a loosely typed language, which means that variables can hold values of any type, and the language will attempt to convert values as needed during operations.

Types of Type Coercion:
1. Implicit Coercion: This occurs when JavaScript automatically converts a value from one type to another during an operation. For example, when using the + operator with a string and a number, JavaScript will convert the number to a string and concatenate them.

Example:
let num = 5;
let str = "The number is: ";
let result = str + num;     // Implicit coercion of num to string
console.log(result);        // Output: "The number is: 5"

2. Explicit Coercion: This occurs when the programmer explicitly converts a value from one type to another using built-in functions or methods. For example, using the Number() function to convert a string to a number.

Example:
let strNum = "42";
let convertedNum = Number(strNum);  // Explicit coercion of strNum to number
console.log(convertedNum);          // Output: 42
console.log(typeof convertedNum);   // Output: "number"
*/


// parseInt() and parseFloat() for converting strings to integers and floating-point numbers, respectively.
parseInt("42");        // Converts string "42" to integer 42
parseFloat("3.14");    // Converts string "3.14" to floating-point number 3.14

// Number() function for converting strings to numbers (both integers and floating-point)
Number("42");          // Converts string "42" to number 42
Number("3.14");        // Converts string "3.14" to number 3.14

// String() function for converting numbers to strings
String(42);            // Converts number 42 to string "42"
String(3.14);          // Converts number 3.14 to string "3.14"

// Boolean() function for converting values to boolean
Boolean(1);            // Converts number 1 to boolean true
Boolean(0);            // Converts number 0 to boolean false
Boolean("");           // Converts empty string "" to boolean false
Boolean("Hello");      // Converts non-empty string "Hello" to boolean true

// Unary + operator can also be used for explicit coercion to number:
let str = "42";
let num = +str;           // Explicit coercion of str to number using unary +
console.log(num);         // Output: 42
console.log(typeof num);  // Output: "number"