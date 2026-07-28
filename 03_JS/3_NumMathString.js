/*
Number in JS is a primitive data type that represents numeric values. It can be used for mathematical operations, comparisons, and more. In JavaScript, numbers can be integers or floating-point values, and they can be represented in various formats such as decimal, hexadecimal, and exponential notation.

JavaScript has only one numeric type: number, which can represent both integer and floating-point values. The Number type has a range of approximately ±1.7976931348623157e+308 for positive numbers and ±5e-324 for negative numbers.
*/

/*
let num1 = 10;   // Integer
let num2 = 3.1456789; // Floating-point number

console.log("num1:", num1);             // Output: num1: 10
console.log("num2:", num2);             // Output: num2: 3.1456789
console.log("num2:", num2.toFixed(2));  // Output: num2 : 3.15

console.log("Type of num1:", typeof num1); // Output: Type of num1: number
console.log("Type of num2:", typeof num2); // Output: Type of num2: number

let c = num2.toFixed(2); 
console.log("Type of c:", typeof c);      // Output: Type of c: string
// The toFixed() method converts a number into a string, keeping a specified number of decimals. In this case, num2 is converted to a string with 2 decimal places, resulting in "3.15".


console.log(num2.toPrecision(4));    // Output: 3.146
console.log(num2.toExponential(2));  // Output: 3.15e+0
console.log(num2.toString());        // Output: 3.1456789
console.log(num2.toString(16));      // Output: 3.254b365f379e in hexadecimal format
*/

/*
let a = new Number(10);  // Creating a Number object
console.log(a);          // Output: [Number: 10]
console.log(typeof a);   // Output: object

let b = 20;             // Creating a primitive number
console.log(b);         // Output: 20
console.log(typeof b);  // Output: number

console.log(a == b);    // Output: false (value comparison)
console.log(a === b);   // Output: false (type comparison)

let c = a.valueOf();    // Getting the primitive value of the Number object
console.log(c);         // Output: 10
console.log(typeof c);  // Output: number

console.log(a == c);    // Output: true (value comparison)
console.log(a === c);   // Output: false (type comparison)
*/

// ---------------------------------------------------------------------------------

// Exponential notation 
// It is a way to represent numbers that are too large or too small to be conveniently written in decimal form. In JavaScript, you can use exponential notation by using the letter "e" or "E" followed by the exponent.

let largeNumber = 1.23e+6; // Represents 1.23 * 10^6

// You can also use exponential notation with negative exponents to represent very small numbers.
let smallNumber = 4.56e-3; // Represents 4.56 * 10^-3
let verySmallNumber = 7.89e-10; // Represents 7.89 * 10^-10


console.log("Large Number:", largeNumber);          // Output: Large Number: 1230000
console.log("Small Number:", smallNumber);          // Output: Small Number: 0.00456
console.log("Very Small Number:", verySmallNumber); // Output: Very Small Number: 7.89e-10

// You can also use exponential notation in calculations
let result = largeNumber * smallNumber;
console.log("Result of multiplication:", result); // Output: Result of multiplication: 5608.8


// --------------------------------------------------------------------------------------

// Hexadecimal notation is a base-16 number system that uses the digits 0-9 and the letters A-F to represent values. In JavaScript, you can represent hexadecimal numbers by prefixing them with "0x" or "0X".

let hexNumber = 0x1A;                          // Represents 26 in decimal
console.log("Hexadecimal Number:", hexNumber); // Output: Hexadecimal Number: 26

// You can also convert a decimal number to hexadecimal using the toString() method with a radix of 16.
let decimalNumber = 255;
let hexString = decimalNumber.toString(16);        // Convert to hexadecimal string
console.log("Decimal to Hexadecimal:", hexString); // Output: Decimal to Hexadecimal: ff

// You can also convert a hexadecimal string back to a decimal number using the parseInt() function with a radix of 16.
let hexString2 = "1A";
let decimalNumber2 = parseInt(hexString2, 16);          // Convert hexadecimal string to decimal
console.log("Hexadecimal to Decimal:", decimalNumber2); // Output: Hexadecimal to Decimal: 26

// You can also perform arithmetic operations with hexadecimal numbers.
let hexNum1 = 0xA; // Represents 10 in decimal
let hexNum2 = 0x5; // Represents 5 in decimal

let sum = hexNum1 + hexNum2;                     // Addition
console.log("Sum of Hexadecimal Numbers:", sum); // Output: Sum of Hexadecimal Numbers: 15

// --------------------------------------------------------------------------------------

// Binary notation is a base-2 number system that uses only two digits: 0 and 1. In JavaScript, you can represent binary numbers by prefixing them with "0b" or "0B".

let binaryNumber = 0b1010;                          // Represents 10 in decimal
console.log("Binary Number:", binaryNumber);        // Output: Binary Number: 10

// You can also convert a decimal number to binary using the toString() method with a radix of 2.
let decimalNumber3 = 13;
let binaryString = decimalNumber3.toString(2);         // Convert to binary string
console.log("Decimal to Binary:", binaryString);       // Output: Decimal to Binary: 1101

// You can also convert a binary string back to a decimal number using the parseInt() function with a radix of 2.
let binaryString2 = "1101";
let decimalNumber4 = parseInt(binaryString2, 2);          // Convert binary string to decimal
console.log("Binary to Decimal:", decimalNumber4);        // Output: Binary to Decimal: 13

// You can also perform arithmetic operations with binary numbers.
let binaryNum1 = 0b110; // Represents 6 in decimal
let binaryNum2 = 0b101; // Represents 5 in decimal

let sumBinary = binaryNum1 + binaryNum2;                     // Addition
console.log("Sum of Binary Numbers:", sumBinary);            // Output: Sum of Binary Numbers: 11


// --------------------------------------------------------------------------------------
// Number methods in JavaScript provide various functionalities to work with numbers. Some commonly used methods include:

let num = 123.456;

// toFixed() - Formats a number using fixed-point notation.
console.log("toFixed(2):", num.toFixed(2)); // Output: toFixed(2): 123.46

// toPrecision() - Formats a number to a specified length.
console.log("toPrecision(4):", num.toPrecision(4)); // Output: toPrecision(4): 123.5

// toExponential() - Returns a string representing the number in exponential notation.
console.log("toExponential(2):", num.toExponential(2)); // Output: toExponential(2): 1.23e+2

// toString() - Converts a number to a string.
console.log("toString():", num.toString()); // Output: toString(): 123.456

// parseInt() - Parses a string and returns an integer.
let strNum = "42";
console.log("parseInt('42'):", parseInt(strNum)); // Output: parseInt('42'): 42

// parseFloat() - Parses a string and returns a floating-point number.
let strFloat = "3.14";
console.log("parseFloat('3.14'):", parseFloat(strFloat)); // Output: parseFloat('3.14'): 3.14

// isNaN() - Determines whether a value is NaN (Not-a-Number).
console.log("isNaN('hello'):", isNaN('hello')); // Output: isNaN('hello'): true
console.log("isNaN(123):", isNaN(123));         // Output: isNaN(123): false

// isFinite() - Determines whether a value is a finite number.
console.log("isFinite(10):", isFinite(10));     // Output: isFinite(10): true
console.log("isFinite(Infinity):", isFinite(Infinity)); // Output: isFinite(Infinity): false

// --------------------------------------------------------------------------------------
// Special Number Values:

// Infinity: Represents positive or negative infinity. It is returned when a number exceeds the maximum representable value or when dividing by zero.
// -Infinity: Represents negative infinity. It is returned when a number exceeds the minimum representable value or when dividing by zero in the negative direction.

console.log("Infinity:", Infinity);       // Output: Infinity: Infinity
console.log("-Infinity:", -Infinity);     // Output: -Infinity: -Infinity
console.log(1 / 0);                       // Output: Infinity
console.log(typeof Infinity);             // Output: "number"
console.log(-1 / 0);                      // Output: -Infinity


// NaN (Not-a-Number): Represents a value that is not a valid number. It is returned when an operation or function cannot produce a meaningful numeric result.

console.log("NaN:", NaN);                 // Output: NaN: NaN
console.log(typeof NaN);                  // Output: "number"
console.log(0 / 0);                       // Output: NaN
console.log(Math.sqrt(-1));               // Output: NaN

// Interesting Fact: In JavaScript, NaN is the only value that is not equal to itself. This means that if you compare NaN with NaN using the equality operator (== or ===), it will return false.
console.log(NaN === NaN); // Output: false


// --------------------------------------------------------------------------------------
// Number properties in JavaScript provide information about the Number type. Some commonly used properties include:

const maxValue = Number.MAX_VALUE; // The largest representable number
const minValue = Number.MIN_VALUE; // The smallest representable positive number

console.log("Max Value:", maxValue); // Output: Max Value: 1.7976931348623157e+308
console.log("Min Value:", minValue); // Output: Min Value: 5e-324

const maxSafeInteger = Number.MAX_SAFE_INTEGER; // The maximum safe integer value
const minSafeInteger = Number.MIN_SAFE_INTEGER; // The minimum safe integer value

console.log("Max Safe Integer:", maxSafeInteger); // Output: Max Safe Integer: 9007199254740991
console.log("Min Safe Integer:", minSafeInteger); // Output: Min Safe Integer: -9007199254740991

const epsilon = Number.EPSILON;   // The smallest difference between two representable numbers
console.log("Epsilon:", epsilon); // Output: Epsilon: 2.220446049250313e-16

const positiveInfinity = Number.POSITIVE_INFINITY; // Represents positive infinity
const negativeInfinity = Number.NEGATIVE_INFINITY; // Represents negative infinity

console.log("Positive Infinity:", positiveInfinity); // Output: Positive Infinity: Infinity
console.log("Negative Infinity:", negativeInfinity); // Output: Negative Infinity: -Infinity

const notANumber = Number.NaN;   // Represents a value that is not a valid number
console.log("NaN:", notANumber); // Output: NaN: NaN

// --------------------------------------------------------------------------------------
// Checking Numbers

// Old way to check if a value is a number
isNaN(42);      // false
isNaN("Hello"); // true

// New way to check if a value is a number, finite, or an integer
Number.isNaN(42);      // false
Number.isNaN("Hello"); // false

Number.isFinite(42);       // true
Number.isFinite(Infinity); // false

Number.isInteger(42);       // true
Number.isInteger(42.5);     // false
Number.isInteger("Hello");  // false
Number.isInteger(NaN);      // false
Number.isInteger(Infinity); // false

// ----------------------------------------------------------------------------------------
// Math Object in JavaScript provides various mathematical functions and constants. Some commonly used methods include:

const pi = Math.PI;              // The value of π (pi)
const sqrt2 = Math.SQRT2;        // The square root of 2
const sqrt1_2 = Math.SQRT1_2;    // The square root of 1/2
const sqrt16 = Math.sqrt(16);    // The square root of 16
const powValue = Math.pow(2, 3); // 2 raised to the power of 3
const expValue = Math.exp(1);    // e raised to the power of 1
const logValue = Math.log(10);   // Natural logarithm of 10
const log10Value = Math.log10(100); // Base 10 logarithm of 100
const euler = Math.E;              // The value of e (Euler's number)

const absValue = Math.abs(-10);     // Absolute value
const ceilValue = Math.ceil(4.2);   // Ceiling value
const floorValue = Math.floor(4.8); // Floor value
const roundValue = Math.round(4.5); // Round to nearest integer

const maxValue2 = Math.max(10, 20, 5); // Maximum value
const minValue2 = Math.min(10, 20, 5); // Minimum value


// Random number generation
const randomValue = Math.random();
console.log("Random Value:", randomValue); // Output: Random Value: (a random number between 0 and 1)

// Math.floor(Math.random() * (max - min + 1)) + min is a common formula to generate a random integer between a specified range (inclusive of both min and max). Here's how it works:
console.log("Random number between 1 and 10:", Math.floor(Math.random() * 10) + 1); // Output: Random number between 1 and 10: <random_value>
console.log("Random number between 50 and 100:", Math.floor(Math.random() * (100 - 50 + 1)) + 50); // Output: Random number between 50 and 100: <random_value>
console.log("Random number between -10 and 10:", Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)); // Output: Random number between -10 and 10: <random_value>


// Trigonometric functions
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // Output: 1
console.log("Math.cos(Math.PI):", Math.cos(Math.PI));         // Output: -1
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // Output: 1


// ----------------------------------------------------------------------------------------

// String: A string is a sequence of characters used to represent text. In JavaScript, strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals. Strings can contain letters, numbers, symbols, and whitespace.

// Creating strings
let str1 = 'Hello, World!'; // Using single quotes
let str2 = "JavaScript is awesome!"; // Using double quotes
let str3 = `The value of pi is approximately ${Math.PI}`; // Using backticks for template literals

// String properties and methods
console.log("Length of str1:", str1.length);
console.log("Uppercase str2:", str2.toUpperCase());
console.log("Lowercase str2:", str2.toLowerCase());
console.log("Substring of str1:", str1.substring(0, 5));
console.log("Index of 'World' in str1:", str1.indexOf('World'));
console.log("Last index of 'o' in str1:", str1.lastIndexOf('o'));
console.log("Includes 'JavaScript' in str2:", str2.includes('JavaScript'));
console.log("Replace 'World' with 'JavaScript':", str1.replace('World', 'JavaScript'));
console.log("Slice (7, 17):", str1.slice(7, 17));n
console.log("Trimmed str1:", str1.trim());
console.log("Split str2 by space:", str2.split(' '));
console.log("Starts with 'Hello':", str1.startsWith('Hello'));
console.log("Ends with 'awesome!':", str2.endsWith('awesome!'));
console.log("Character at index 7 in str1:", str1.charAt(7));
console.log("Character code at index 7 in str1:", str1.charCodeAt(7));

// String concatenation
let greeting = str1 + " " + str2;
console.log("Concatenated string:", greeting);

let name = "Alice";
let age = 30;
let introduction = "My name is " + name + " and I am " + age + " years old.";
console.log(introduction);

let str1 = "Hello";
let str2 = " World!";
let concatenatedString2 = str1.concat(str2); // Using concat() method
console.log("Concatenated string (using concat()):", concatenatedString2);

// Template literals allow for easier string interpolation and multi-line strings
let name = "Alice";
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// String comparison
let strA = "apple";
let strB = "banana";
console.log("Is strA equal to strB?", strA === strB); // Output: false
console.log("Is strA less than strB?", strA < strB);  // Output: true (lexicographical comparison)


// ----------------------------------------------------------------------------------------
// String immutability in JavaScript means that once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.

let originalString = "Hello";
let modifiedString = originalString.toUpperCase(); // Creates a new string
console.log("Original String:", originalString); // Output: Original String: Hello
console.log("Modified String:", modifiedString); // Output: Modified String: HELLO

// Even though we called toUpperCase() on originalString, it remains unchanged because strings are immutable in JavaScript.
