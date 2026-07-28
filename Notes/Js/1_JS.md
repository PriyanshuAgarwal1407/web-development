# JavaScript Lecture Notes

---

# Lecture 01: Introduction to JavaScript

## Why do we need JavaScript if we already have HTML and CSS?

- **HTML** provides the **structure** of a webpage.
- **CSS** provides the **styling** of a webpage.
- **JavaScript** provides the **logic, behavior, and interactivity**.

| Technology | Purpose               |
|------------|-----------------------|
| HTML       | Structure             |
| CSS        | Styling               |
| JavaScript | Logic & Interactivity |

Examples of what JavaScript enables:

- Button clicks
- Form validation
- Image sliders
- Animations
- Fetching data from APIs
- Interactive web applications

## Why wasn't C++ used inside browsers?

**1. C++ is heavy**

C++ is a compiled systems programming language designed for high-performance applications. Browsers needed a language that was:

- Lightweight
- Interpreted
- Fast to load
- Easy to learn
- Safe for users

JavaScript was designed specifically for this purpose.

**2. Security**

Allowing websites to execute raw C++ code would be dangerous, since C++ has unrestricted access to the operating system. Potential risks include:

- Reading or deleting user files
- Executing system commands
- Accessing raw memory using pointers
- Opening unrestricted network connections
- Installing malware
- Crashing the operating system

JavaScript avoids these issues by running inside a **browser sandbox**, which restricts direct access to the operating system.

### Hardware limitations in 1995

| Component | Typical Specification |
|---|---|
| RAM | 4–8 MB |
| Hard Disk | 200–500 MB |
| CPU | Pentium 75–133 MHz |

Because hardware resources were extremely limited:

- Browsers had to remain lightweight.
- A sandboxed C++ runtime would have consumed too much RAM and CPU.
- JavaScript was small enough to run efficiently on these systems.

### Automatic memory management (garbage collection)

Unlike C++, JavaScript automatically manages memory using **garbage collection (GC)**.

**Benefits**

- No manual memory allocation
- No manual memory deallocation
- Fewer memory leaks
- No dangling pointers
- Easier development

The JavaScript engine automatically frees memory that is no longer in use.

### Final takeaway

- HTML defines **what** appears on a webpage.
- CSS defines **how** it looks.
- JavaScript defines **how** it behaves.

JavaScript became the browser language because it is lightweight, interpreted, sandboxed for security, cross-platform, beginner-friendly, and handles memory automatically.

### Where JavaScript Runs Today

JavaScript is no longer limited to browsers.

- Browsers: Chrome, Firefox, Safari, Edge
- Servers: Node.js
- Modern runtime alternatives: Deno, Bun
- Embedded environments: Electron apps, some smart devices, browser extensions

### JavaScript Language vs Platform APIs

The JavaScript language itself provides syntax, operators, objects, and control flow.

Browser features such as `document`, `window`, `fetch`, and `localStorage` come from the **platform**, not the core language.

That is why the same JavaScript code can run in multiple environments, but platform-specific APIs may differ.

## Interview Questions

### Why can't browsers run C++ directly?

Because native C++ code has unrestricted access to the operating system, making it unsafe and difficult to sandbox.

### What is sandboxing?

A security mechanism that restricts JavaScript so it cannot directly access files, memory, hardware, or the operating system.

### What is Garbage Collection?

Automatic memory management performed by the JavaScript engine to free unused memory.

### Who created JavaScript?

Brendan Eich in 1995.

### Why was JavaScript created?

To add interactivity to web pages while remaining lightweight, secure, and easy to run inside web browsers.

---


# Lecture 02: JavaScript Variables & Data Types

## Declaring variables

- JavaScript provides three ways to declare variables: `var`, `let`, and `const`.
- Modern JavaScript (ES6+) primarily uses **`const`** and **`let`**. Avoid using `var` in new code.


**`const`**

- Block scoped
- Must be initialized during declaration
- Cannot be reassigned
- Hoisted, but remains in the **Temporal Dead Zone (TDZ)**
- If it stores an object or array, its contents can still be modified

```javascript
const PI = 3.14;
// PI = 3.1415; ❌ Error

const user = { name: "John" };
user.name = "Alice"; // ✅ Allowed
```

```javascript
// Objects are Mutable
const user = {
    name: "Alice"
};

user.name = "Bob";   // ✅ Allowed
console.log(user);
```


**`let`**

- Block scoped
- Can be reassigned
- Initialization is optional
- Hoisted, but remains in the TDZ

```javascript
let age = 20;
age = 21;

let city;
console.log(city); // undefined
```


**`var`**

- Function scoped
- Can be reassigned
- Can be redeclared
- Hoisted and initialized with `undefined`
- The old way to declare variables. Avoid using it in modern JavaScript.

```javascript
console.log(a); // undefined
var a = 10;
```

Unlike `let` and `const`, `var` ignores block scope.

### Temporal Dead Zone (TDZ)

The period between entering a scope and the actual declaration of a `let` or `const` variable.

```javascript
console.log(x); // ❌ ReferenceError
let x = 10;
```

### `var` vs `let` vs `const`

| Feature        | var        | let   | const |
|----------------|---------- -|-------|-------|
| Scope          | Function   | Block | Block |
| Reassign       | ✅         | ✅    | ❌    |
| Redeclare      | ✅         | ❌    | ❌    |
| Initialization required| ❌ | ❌    | ✅    |
| Hoisting       | `undefined`| TDZ   | TDZ   |
| Modern practice| Avoid      | Use when value changes | Default choice |

**Best practice:** use `const` by default, `let` only when the value changes, and avoid `var`.


## Data types in JavaScript

JavaScript has two categories of data types:

1. Primitive types
2. Non-primitive types (objects)

## Primitive Types (7)

Primitive values are **immutable**.

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

### String

Represents text.

```javascript
let name = "Alice";
let city = 'Delhi';

let msg = `Hello ${name}`;
```

### Number

Represents integers and floating-point values.

```javascript
let age = 20;
let price = 99.99;
```

Special values:

```javascript
Infinity
-Infinity
NaN
```

Important notes:

- JavaScript numbers are IEEE-754 floating-point values.
- `NaN` means “Not a Number”, but its type is still `number`.
- `Number.MAX_SAFE_INTEGER` is the largest integer that can be represented exactly.

```javascript
Number.MAX_SAFE_INTEGER;
// 9007199254740991
```

### Boolean

Represents true or false.

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

### Undefined

A variable declared but not assigned.

```javascript
let value;

console.log(value);
// undefined
```

### Null

Represents an intentional absence of value.

```javascript
let user = null;
```

### null vs undefined

| null                   | undefined                |
|------------------------|--------------------------|
| Assigned intentionally | Default value            |
| Means "no value"       | Means "not assigned yet" |

### BigInt

Stores integers larger than `Number.MAX_SAFE_INTEGER`.

```javascript
const num = 12345678901234567890n;
```

BigInt is useful for very large integers, but it cannot be mixed directly with `number` values in arithmetic.

### Symbol

Creates a unique identifier.

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
// false
```

Every Symbol is unique.

Symbols are often used for hidden or non-colliding object keys in advanced JavaScript code.

## Object (Non-Primitive)

Objects store collections of key-value pairs.

```javascript
const person = {
    name: "John",
    age: 25
};
```

Arrays, functions, dates, maps, sets, promises, and regular expressions are also objects.

## JSON and JavaScript Objects

JSON is a data format, not a JavaScript object.

- JSON supports strings, numbers, booleans, null, arrays, and objects.
- JSON does not support functions, undefined, or symbols.

This matters when sending data to APIs or storing structured data.

### Arrays

Arrays are objects used to store ordered data.

```javascript
const numbers = [10,20,30];
```

### Functions

Functions are also objects.

```javascript
function greet() {
    console.log("Hello");
}
```

### Primitive vs Object

### Primitive → Passed by Value

```javascript
let a = 10;

let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Each variable stores its own copy.

### Object → Passed by Reference

```javascript
let obj1 = {
    value: 10
};

let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value);
// 20
```

Both variables point to the same object.

### Immutable vs Mutable

- Primitive values are immutable.
- Objects, arrays, and functions are mutable.

This is why reassigning an object variable is different from changing a property on that object.

### Non-primitive data types

Everything that is not primitive is an **object**, including:

```javascript
const person = { name: "John", age: 20 };  // Object
const numbers = [1, 2, 3];                  // Array
function greet() {}                         // Function
```

Other built-in objects include `Date`, `Map`, `Set`, `RegExp`, and `Promise`.

### Primitive vs object storage

**Primitive → stored by value**

```javascript
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not affect `a`.

**Object → stored by reference**

```javascript
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;

console.log(obj1.value); // 20
console.log(obj2.value); // 20
```

Both variables point to the same object in memory.

## `typeof` operator

```javascript
typeof "Hello";       // "string"
typeof 10;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof 10n;           // "bigint"
typeof Symbol()       // "symbol"
typeof {};            // "object"
typeof [];            // "object"
typeof function(){};  // "function"

typeof null;           // "object" — a long-standing historical bug
```

### Best Practices

- Prefer `const` by default.
- Use `let` only when reassignment is required.
- Avoid `var`.
- Prefer objects for structured data.
- Use `typeof` to inspect unknown values.
- Use `Number.isNaN()` when you specifically want to test for `NaN`.
- Use `Number.isInteger()` when integer-only values matter.


## Interview Questions

### Why prefer `const` over `let`?

Because it prevents accidental reassignment and makes code easier to reason about.

### What is the Temporal Dead Zone (TDZ)?

The period between entering a scope and the variable declaration where `let` and `const` cannot be accessed.

### Difference between `null` and `undefined`?

- `undefined` → value not assigned.
- `null` → intentionally empty value.

### Are arrays primitive?

No. Arrays are objects.

### Why does `typeof null` return `"object"`?

Because of a historical implementation bug preserved for backward compatibility.

### Which data types are primitive?

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

### What is the difference between `number` and `BigInt`?

`number` is used for normal numeric values and decimals, while `BigInt` is used for very large whole numbers.

### Is `NaN` a number?

Yes. Its type is still `number`, even though it means a failed numeric conversion.


### Key Takeaways

- JavaScript has **8 data types**.
- **7 are primitive**, **1 is object**.
- `const` is the default choice.
- `let` is used for mutable variables.
- Avoid `var`.
- Primitive values are copied.
- Objects are referenced.
- `typeof` determines runtime type.

---

# Lecture 03: V8 Engine & Memory Allocation

## What is V8?

**V8** is Google's open-source JavaScript engine. It executes JavaScript by converting it into machine code for faster execution. Used in Chrome, Node.js, Microsoft Edge (Chromium), Electron, and earlier versions of Deno.

### Responsibilities of V8

- Parse JavaScript
- Compile JavaScript
- Execute code
- Allocate memory
- Perform garbage collection
- Optimize frequently executed code

### Memory architecture

When JavaScript runs, memory is divided into two main regions.

```text
                RAM
                 │
      ┌──────────┴──────────┐
      │                     │
   Stack Memory         Heap Memory
```

**1. Stack memory**

- Fixed size, very fast
- Stores function execution context, local variables, and references (memory addresses)
- Uses **LIFO** (last in, first out)
- Suitable for: primitive values (small integers in V8), function calls, memory addresses

**2. Heap memory**

- Dynamic size, slower than the stack
- Stores complex and dynamically-sized data
- Managed automatically by the garbage collector
- Suitable for: objects, arrays, strings, functions, BigInt, Symbol, HeapNumbers

### Memory units

| Unit      | Symbol | Conversion | In Bytes |
|-----------|----|----------------|------|
| Byte      | B  | Base unit      | 1 B  |
| Kilobyte  | KB | 1 KB = 1024 B  | 2¹⁰ B |
| Megabyte  | MB | 1 MB = 1024 KB | 2²⁰ B |
| Gigabyte  | GB | 1 GB = 1024 MB | 2³⁰ B |
| Terabyte  | TB | 1 TB = 1024 GB | 2⁴⁰ B |
| Petabyte  | PB | 1 PB = 1024 TB | 2⁵⁰ B |
| Exabyte   | EB | 1 EB = 1024 PB | 2⁶⁰ B |
| Zettabyte | ZB | 1 ZB = 1024 EB | 2⁷⁰ B |
| Yottabyte | YB | 1 YB = 1024 ZB | 2⁸⁰ B |

### 32-bit architecture

In a 32-bit system, one memory slot = 32 bits = 4 bytes. Pointers (memory addresses) occupy 4 bytes.

### Primitive data storage in V8

**Number**

V8 optimizes numbers into two categories:

- **Smi (Small Integer):** 31-bit signed integer, stored directly on the stack, very fast, no heap allocation.
  ```javascript
  let count = 100; // stored directly in the stack
  ```
- **HeapNumber:** used for floating-point values or very large integers. The value lives in the heap; the variable holds a pointer on the stack.
  ```javascript
  let price = 29.99;
  ```

**String, Boolean, Null, Undefined, Symbol, BigInt**

All of these store their actual data in the heap, with the stack holding a pointer:

```javascript
let name = "Alice";    // heap: characters, stack: pointer
let isActive = true;   // heap: singleton object, stack: pointer
let data = null;       // heap: singleton object, stack: pointer
let value;             // heap: singleton object, stack: pointer
const id = Symbol("id");            // heap: Symbol object, stack: pointer
const big = 12345678901234567890n;  // heap: BigInt object, stack: pointer
```

`true`/`false`, `null`, and `undefined` are represented internally as **singleton (oddball) objects** — V8 creates only one global object for each.

### Non-primitive data storage

Objects, arrays, functions, `Date`, `Map`, `Set`, `RegExp`, and `Promise` are always stored in the heap; the stack only holds a pointer to them.

```javascript
let user = { id: 1, name: "Alice" };
// Object stored in heap, variable stores pointer in stack
```

### Example memory layout

```javascript
let counter = 10;
let price = 29.99;
let name = "Alice";
let isActive = true;
let user = { id: counter };
```

**Stack**
```
counter  → 10 (Smi)
price    → Pointer
name     → Pointer
isActive → Pointer
user     → Pointer
```

**Heap**
```
29.99
"Alice"
true (Singleton)
{ id: 10 }
```

### Garbage collector (GC)

The garbage collector removes objects that are no longer reachable by the program. Benefits: prevents memory leaks, removes the need for manual memory management, and frees unused heap memory automatically. Developers never need to manually free memory as in C++.

### Stack vs heap

| Feature | Stack | Heap |
|---|---|---|
| Size | Fixed | Dynamic |
| Speed | Faster | Slower |
| Memory allocation | Automatic | Automatic (GC) |
| Stores | Primitives (Smi), function calls, pointers | Objects, arrays, strings, functions, HeapNumbers |
| Access | LIFO | Random access |

### Data storage summary

| Data Type            | Storage |
|----------------------|---------|
| Small integer (Smi)  | Stack   |
| Floating-point number| Heap    |
| Large integer        | Heap    |
| String               | Heap    |
| Boolean              | Heap    |
| Null                 | Heap    |
| Undefined            | Heap    |
| Symbol               | Heap    |
| BigInt               | Heap    |
| Object               | Heap    |
| Array                | Heap    |
| Function             | Heap    |

> For heap-allocated values, the actual data lives in the heap while the variable on the stack stores only a pointer (reference).

### Interview notes

- V8 is Google's JavaScript engine.
- JavaScript memory is divided into stack and heap.
- Small integers (Smi) are stored directly on the stack.
- Floating-point numbers become HeapNumbers.
- Strings, objects, and arrays always live in the heap.
- The stack stores references (pointers) to heap objects.
- JavaScript manages memory automatically with the garbage collector.
- The stack is fast because of LIFO; the heap is flexible because it supports dynamic allocation.

## Interview Questions

### What is V8?

Google's JavaScript engine used by Chrome and Node.js.

### What is the difference between stack and heap?

Stack stores execution contexts and primitive values, conceptually, while heap stores dynamically allocated objects.

### Why is heap slower?

Because memory allocation and lookup are more complex than sequential stack access.

### What is garbage collection?

Automatic memory cleanup of objects that are no longer reachable.

### Why are objects called reference types?

Because variables store references, not the object itself.

### Does JavaScript have manual memory management?

No. Memory is automatically managed by the JavaScript engine.


---

# Lecture 04: JavaScript Operators, Type Conversion & Control Flow

## What is an operator?

An **operator** is a special symbol or keyword that performs an operation on one or more values (operands).

```javascript
let result = 5 + 10;
// + → Operator, 5 and 10 → Operands, 15 → Result
```

### Assignment Operators

| Operator | Example  |
|----------|----------|
| `=`      | `x = 10` |
| `+=`     | `x += 2` |
| `-=`     | `x -= 2` |
| `*=`     | `x *= 2` |
| `/=`     | `x /= 2` |
| `%=`     | `x %= 2` |
| `**=`    | `x **= 2` |

### Arithmetic Operators

`+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`

```javascript
let a = 5;
console.log(a++);
console.log(++a);
```

**Modulus (`%`)** returns the remainder after division — commonly used for even/odd checks and circular indexing.

```javascript
10 % 3 // 1
10 % 2 // 0
```

**Increment / decrement**

```javascript
let x = 5;
console.log(x++); // 5 (postfix: returns old value, then increments)
console.log(x);   // 6

let y = 5;
console.log(++y); // 6 (prefix: increments first, then returns new value)
```


### Comparison Operators

Use `===` and `!==` whenever possible.

```javascript
7 == "7";   // true
7 === "7";  // false
```

### Equality vs Strict Equality

| Operator | Meaning                               |
|----------|---------------------------------------|
| `==`     | Loose equality with type coercion     |
| `===`    | Strict equality without type coercion |
| `!=`     | Loose inequality                      |
| `!==`    | Strict inequality                     |

Prefer strict equality in modern JavaScript.

### Relational Operators

`<`, `>`, `<=`, `>=`

```javascript
10 > 5;   // true
3 <= 3;   // true
```

### Logical Operators

`&&`, `||`, `!`

Logical operators short-circuit:

- `&&` stops when the left side is falsy.
- `||` stops when the left side is truthy.
- `!` converts a value to its boolean opposite.

```javascript
if (user && user.name === "Admin") { }   // AND, short-circuit evaluation

let username = "";
let displayName = username || "Guest";   // OR, returns first truthy value → "Guest"

let isLoggedIn = false;
if (!isLoggedIn) { }                     // NOT
```

### Truthy & falsy values

Only these values are **falsy**: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else is truthy.

```javascript
Boolean([])       // true
Boolean({})       // true
Boolean("false")  // true
```


### Bitwise Operators

`&`, `|`, `^`, `~`, `<<`, `>>`

### Ternary Operator

```javascript
let msg = age >= 18 ? "Adult" : "Minor";
```

Use ternary operators for simple conditional expressions. Keep `if...else` when the logic becomes harder to read.

### Operator Precedence

```javascript
(2 + 3) * 5;
```

---

## `typeof` Operator

```javascript
typeof null; // "object"
```

`typeof null` returns `"object"` because of a historical JavaScript bug.

Useful `typeof` results:

- `typeof "text"` → `"string"`
- `typeof 10` → `"number"`
- `typeof true` → `"boolean"`
- `typeof undefined` → `"undefined"`
- `typeof 10n` → `"bigint"`
- `typeof Symbol()` → `"symbol"`
- `typeof {}` → `"object"`
- `typeof []` → `"object"`
- `typeof function() {}` → `"function"`

---

## Floating Point Precision

JavaScript uses IEEE-754 floating-point numbers.

```javascript
0.1 + 0.2;
// 0.30000000000000004
```

Use this pattern when comparing floating-point values:

```javascript
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
```

---

## Type Conversion

JavaScript can convert values explicitly or implicitly.

**Implicit conversion** happens automatically (`7 == "7"`) — avoid relying on it.
**Explicit conversion** is done intentionally, and is the recommended approach.

```javascript
// To string
String(123);
String(true);
String(null);

// To number
Number("123");   // 123
Number("3.14");  // 3.14
Number("hello"); // NaN

parseInt("100px");    // 100
parseFloat("3.14em"); // 3.14
+"50";                 // 50 (unary plus)

// To boolean
Boolean(0);       // false
Boolean("");      // false
Boolean("Hello"); // true
Boolean([]);      // true
Boolean({});      // true
```

### Value comparison

```javascript
5 === "5" // false — strict, no coercion
5 == "5"  // true  — loose, uses coercion (avoid)
```

Relational operators (`<`, `>`, `<=`, `>=`): string vs string uses dictionary comparison, otherwise numeric comparison is used.

### Common Conversions

```javascript
Number("100");
String(100);
Boolean(1);
parseInt("100px");
parseFloat("3.14em");
+"50";
```

### Examples

- `Number("100")` converts a string to a number.
- `String(100)` converts a number to a string.
- `Boolean(1)` converts a truthy value to `true`.
- `parseInt("100px")` extracts the integer part.
- `parseFloat("3.14em")` extracts the floating-point part.

### Important Conversion Notes

- `+"50"` converts the string to a number.
- `Number(" ")` becomes `0` because whitespace is treated as empty numeric input.
- `Number("abc")` becomes `NaN`.
- `String(null)` becomes `"null"`.

### Falsy Values

Falsy values:

- `false`
- `0`
- `""`
- `null`
- `undefined`
- `NaN`

Everything else is truthy.

Use `??` when you want a fallback only for `null` or `undefined`.

---

## Conditional Statements

### Control flow

```javascript
// if
if (temperature > 25) { }

// if...else — one block always executes
if (age >= 18) { } else { }

// if...else if...else — checks top to bottom, first true condition runs
if (score >= 90) { }
else if (score >= 80) { }
else if (score >= 70) { }
else { }
```

### `switch`

```javascript
switch (day) {
    case 1:
        console.log("Monday");
        break;
    default:
        console.log("Invalid");
}
```

`switch` uses strict comparison and is best when one value is matched against multiple cases.

### `break` and `continue`

`break` stops the loop entirely.

`continue` skips the current iteration and moves to the next one.

---

## Loops

### `for`

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### `while`

```javascript
while (count < 5) {
    count++;
}
```

### `do...while`

```javascript
do {
    count++;
} while (count < 5);
```

### `for...of`

Use `for...of` when iterating over arrays, strings, or other iterable values.

```javascript
for (const value of [10, 20, 30]) {
    console.log(value);
}
```

### `for...in`

Use `for...in` to iterate over object keys when needed.

```javascript
const user = { name: "Alice", age: 20 };

for (const key in user) {
    console.log(key, user[key]);
}
```

---

## Modern Operators

```javascript
name ?? "Guest";
user?.address?.city;
x ||= y;
x &&= y;
x ??= y;
```

### When to use them

- `??` is for fallback values when only `null` or `undefined` should trigger the default.
- `?.` avoids errors when a nested property may not exist.
- `||=` and `&&=` are shorthand logical assignments.
- `??=` assigns only when the variable is `null` or `undefined`.

### Best Practices

- Prefer `===` over `==`
- Prefer explicit conversions when clarity matters
- Use parentheses when operator precedence is unclear
- Use `??` instead of `||` when `0` or `""` are valid values.
- Keep conditions simple and readable.
- Prefer `for...of` for arrays and `for...in` only for object keys.

### Quick Revision

| Topic | Key Idea |
|---|---|
| Comparison | Prefer `===` and `!==` |
| Truthy/Falsy | Only a few values are falsy |
| Floating-point math | Can have precision issues |
| Type conversion | Can be explicit or implicit |
| Control flow | Use `if`, `switch`, and loops appropriately |
| Modern syntax | `??`, `?.`, `||=`, `&&=`, `??=` |

### Common Mistakes

- Using `==` when `===` is safer.
- Assuming `0.1 + 0.2` will equal `0.3` exactly.
- Using `||` for default values when `0` or `""` are valid inputs.
- Forgetting that `switch` uses strict comparison.
- Mixing up `for...of` and `for...in`.

## Interview Questions

### What is the difference between `==` and `===`?

`==` allows type coercion, while `===` checks both value and type.

### What are falsy values?

`false`, `0`, `""`, `null`, `undefined`, and `NaN`.

### Why does `0.1 + 0.2` produce an unexpected result?

Because JavaScript uses IEEE-754 floating-point arithmetic, which cannot represent some decimal numbers exactly.

### What is the difference between `for` and `while`?

`for` is usually used when the number of iterations is known, while `while` is used when looping depends on a condition.

### What is `typeof null`?

It returns `"object"` because of a historical bug.

### When should you use `??` instead of `||`?

Use `??` when only `null` or `undefined` should trigger the fallback value.


## Interview notes

- Prefer `===` over `==`, and `!==` over `!=`.
- Only 6 values are falsy.
- `0.1 + 0.2 !== 0.3` because of IEEE 754 floating-point representation.
- `parseInt()` extracts integers, `parseFloat()` extracts decimals, `Number()` converts the entire value.
- `typeof null` returns `"object"` (historical bug).
- `&&` and `||` use short-circuit evaluation.
- Prefix (`++x`) increments before use; postfix (`x++`) uses the value first, then increments.

### Practice

- Check even or odd
- Find the largest of three numbers
- Reverse a number
- Check whether a number is prime
- Sum numbers from 1 to 100

---

# Lecture 05: Number, Math, String & Date

## Number

JavaScript has only **one** numeric type, `number`, covering both integers and floating-point numbers. Internally, every number is stored as a **64-bit double-precision floating-point number (IEEE 754)**.

```javascript
let age = 20;
let price = 99.99;

typeof age;   // "number"
typeof price; // "number"
```

**Creating numbers**

```javascript
let a = 25;        // integer
let pi = 3.14;      // floating point
1e9;                 // exponential notation → 1000000000
5e-6;                // → 0.000005
0xFF;                // hexadecimal → 255
0b1010;              // binary → 10
0o77;                // octal → 63
```

**Floating point precision**

```javascript
0.1 + 0.2         // 0.30000000000000004
0.1 + 0.2 === 0.3 // false
```

Decimal values like 0.1, 0.2, and 0.3 can't be represented exactly in binary, causing tiny rounding errors.

*Handling it:*

```javascript
// Display
let total = 0.1 + 0.2;
total.toFixed(2); // "0.30"

// Comparison
Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON; // true

// Financial calculations — never store money as decimals, use integers
// ₹10.50 → 1050 paise
```

**Special number values**

```javascript
1 / 0;            // Infinity
-1 / 0;            // -Infinity
typeof Infinity;    // "number"

"Hello" / 2;   // NaN
Math.sqrt(-1); // NaN

NaN === NaN; // false — the only value not equal to itself
```

**Number properties**

| Property | Meaning |
|---|---|
| `Number.MAX_VALUE` | Largest representable number |
| `Number.MIN_VALUE` | Smallest positive number |
| `Number.MAX_SAFE_INTEGER` | `9007199254740991` |
| `Number.MIN_SAFE_INTEGER` | Smallest safe integer |
| `Number.EPSILON` | Smallest difference between two representable numbers, used for float comparison |

**Checking numbers**

```javascript
isNaN("hello");            // true  — old method, performs coercion
Number.isNaN("hello");     // false — modern, preferred method
Number.isNaN(NaN);         // true

Number.isFinite(100);      // true
Number.isFinite(Infinity); // false

Number.isInteger(10);      // true
Number.isInteger(10.5);    // false
```

**Number methods**

```javascript
let num = 255;
num.toString();     // "255"
num.toString(2);     // "11111111" (binary)
num.toString(16);     // "ff" (hexadecimal)

(19.999).toFixed(2);    // "20.00" — returns a string
(123.456).toPrecision(4); // "123.5"
```

---

## Math

The built-in `Math` object requires no instantiation.

```javascript
Math.PI;    // 3.14159...
Math.E;     // 2.718...
```

**Rounding**

```javascript
Math.round(4.7); // 5
Math.floor(4.9); // 4
Math.ceil(4.1);  // 5
Math.trunc(4.99); // 4
```

**Other functions**

```javascript
Math.abs(-10);      // 10
Math.pow(2, 3);      // 8 (equivalent to 2 ** 3)
Math.sqrt(64);        // 8
Math.max(10, 20, 30);  // 30
Math.min(10, 20, 30);   // 10
```

**`Math.random()`**

Returns a random decimal in the range `[0, 1)` — 0 is possible, 1 is never returned.

**Random integer formula** (inclusive of min and max):

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;

// 1–10
Math.floor(Math.random() * 10) + 1;

// Dice (1–6)
Math.floor(Math.random() * 6) + 1;
```

*How it works, for min = 1, max = 10:*

1. `Math.random()` → range `0 → 0.999999`
2. `× 10` → range `0 → 9.99999`
3. `Math.floor()` → range `0 → 9`
4. `+ 1` → range `1 → 10`

---

## String

A **string** is a primitive data type used to store text.

```javascript
let name = "John";
let city = 'Delhi';
let message = `Hello`;
```

**Characteristics**

- Primitive data type
- Immutable (cannot be modified)
- Indexed, starting from 0
- Has built-in properties and methods

**Creating strings**

```javascript
let str1 = 'Hello';  // single quotes
let str2 = "Hello";   // double quotes

// Template literals (ES6) — support interpolation, expressions, multi-line
let name = "John";
let message = `Hello ${name}`; // "Hello John"
```

**Length and character access**

```javascript
let str = "JavaScript";
str.length;          // 10
str[0];               // "J"
str[4];                // "S"
str[str.length - 1];    // last character
```

**Immutability**

```javascript
let name = "alex";
name[0] = "A";
console.log(name); // "alex" — unchanged

let upper = name.toUpperCase(); // creates a new string
console.log(upper); // "ALEX"
```

**Common string methods**

```javascript
"hello".toUpperCase();               // "HELLO"
"HELLO".toLowerCase();                // "hello"
"  Hello  ".trim();                    // "Hello"
"JavaScript".includes("Script");        // true
"JavaScript".startsWith("Java");         // true
"JavaScript".endsWith("Script");          // true

let str = "JavaScript";
str.slice(0, 4);        // "Java"
str.substring(4, 10);    // "Script"

"Hello World".replace("World", "JS"); // "Hello JS" — first occurrence only
"a,b,c".split(",");                    // ["a", "b", "c"]
"Hi ".repeat(3);                        // "Hi Hi Hi "
```

---

## Date

A `Date` object represents a single point in time, internally storing the **milliseconds elapsed since 1 January 1970 (Unix Epoch, UTC)**.

**Creating dates**

```javascript
let now = new Date();              // current date and time

let timestamp = Date.now();
let date = new Date(timestamp);     // from a timestamp

new Date(year, month, day, hours, minutes, seconds, milliseconds);
new Date(2025, 8, 4); // specific date
```

**Months are zero-indexed**

| Month | Index |
|---|---|
| January | 0 |
| February | 1 |
| March | 2 |
| April | 3 |
| May | 4 |
| June | 5 |
| July | 6 |
| August | 7 |
| September | 8 |
| October | 9 |
| November | 10 |
| December | 11 |

```javascript
new Date(2025, 0, 1); // January 1
```

**Getter methods**

```javascript
date.getFullYear();  // e.g. 2025
date.getMonth();       // 0–11
date.getDate();          // day of month
date.getDay();             // day of week, 0 (Sunday) – 6 (Saturday)
date.getHours();
date.getMinutes();
date.getSeconds();
```

| `getDay()` value | Day |
|---|---|
| 0 | Sunday |
| 1 | Monday |
| 2 | Tuesday |
| 3 | Wednesday |
| 4 | Thursday |
| 5 | Friday |
| 6 | Saturday |

**Setter methods**

`Date` objects are mutable:

```javascript
let date = new Date();
date.setMonth(4); // modifies the original object
```

**Auto-correction**

Invalid dates are automatically corrected:

```javascript
new Date(2025, 1, 30); // February 30 doesn't exist → becomes March 2, 2025
```

**Formatting**

```javascript
date.toString();       // full date & time
date.toDateString();     // date only
date.toISOString();       // UTC format, e.g. "2025-10-01T10:30:00.000Z" — best for APIs
date.toLocaleString();     // formatted per user's region

Date.now(); // timestamp, e.g. 1759262295036
```

**Known problems with JavaScript `Date`**

1. Months start from 0 — confusing.
2. Objects are mutable, e.g. `date.setMonth(10)` changes the original.
3. Weird auto-correction behavior, e.g. `new Date(2025, 1, 30)` silently becomes March 2.
4. String parsing is inconsistent — e.g. `new Date("2025-02-30")` may produce an invalid date; avoid parsing arbitrary date strings.

**Better alternatives**

- Libraries: **Day.js**, **date-fns**, **Luxon**
- Upcoming: the **Temporal API** — immutable, cleaner syntax, better timezone handling, no month-index confusion.
  ```javascript
  const date = Temporal.PlainDate.from("2025-10-01");
  ```

---

## Quick Revision

| Topic | Key Idea |
|---|---|
| Number | Single type (IEEE 754 double), use `Number.EPSILON` for float comparison |
| Math | Use `Math.floor(Math.random() * (max - min + 1)) + min` for random integers |
| String | Immutable, zero-indexed, methods return new strings |
| Date | Months are zero-indexed, mutable, prefer `toISOString()` for APIs |

---

## Interview Questions

### Why doesn't `0.1 + 0.2` equal `0.3` exactly?

Because JavaScript numbers use IEEE 754 binary floating-point representation, which cannot represent decimal values like 0.1 and 0.2 exactly.

### What is the difference between `Number.isNaN()` and `isNaN()`?

`Number.isNaN()` checks if the value is actually `NaN`; `isNaN()` coerces the value to a number first, so `isNaN("hello")` returns `true`.

### How do you generate a random integer between 1 and 10?

```javascript
Math.floor(Math.random() * 10) + 1;
```

### What is the difference between `slice()` and `substring()`?

`slice()` supports negative indexing; `substring()` does not. For strings, `slice(-2)` gives the last two characters.

### Why are strings immutable in JavaScript?

Because every string method returns a new string; the original is never modified. This allows JavaScript engines to optimize string storage.

### How many days are between two dates?

```javascript
const ms = date2 - date1;
const days = ms / (1000 * 60 * 60 * 24);
```

### Why do months in `Date` start from 0?

Historical quirk; `new Date(2025, 0, 1)` is January 1, 2025. Always subtract 1 when using `new Date()` with month numbers.

---

## Key Takeaways

- JavaScript has only one numeric type; use `Number.EPSILON` for float comparisons.
- `Math.random()` returns `[0, 1)`; use the formula above for random integers.
- Strings are immutable; methods create new strings, not modify the original.
- `toFixed()` returns a string; `toPrecision()` controls significant digits.
- Dates are mutable and zero-indexed for months; prefer libraries like Day.js for complex date work.
- `Date.now()` is faster than `new Date().getTime()`.
- Modern code prefers Day.js, date-fns, or Luxon over native `Date` for readability and safety.

---

# Lecture 06: Arrays in JavaScript

## What is an Array?

An **Array** is an ordered collection of values stored using numeric indexes. Think of it as a list where every item has a position.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```

Indexes

```text
Value : Apple   Banana   Cherry
Index :   0        1        2
```


## Creating Arrays

**Empty Array***

```javascript
let arr = [];
```

**Number Array**

```javascript
let nums = [10,20,30];
```

**String Array**

```javascript
let names = ["Alice","Bob","Charlie"];
```

**Mixed Array**

```javascript
let data = [
    10,
    "Hello",
    true,
    null
];
```

## Array Length

Every array has a **length** property.

```javascript
let fruits = ["Apple","Banana","Cherry"];

console.log(fruits.length);

// 3
```

## Access Elements

Arrays use **Zero-Based Indexing**.

```javascript
let fruits = ["Apple","Banana","Cherry"];

console.log(fruits[0]);
// Apple

console.log(fruits[2]);
// Cherry
```

## Change Elements

```javascript
let fruits = ["Apple","Banana"];

fruits[1] = "Blueberry";

console.log(fruits);
// ["Apple","Blueberry"]
```

## Last Element

```javascript
arr[arr.length - 1]
```


## Invalid Index

```javascript
arr[100]

// undefined
```

---

# Mutating Methods

These methods modify the original array.

## push()

Adds element at the end.

```javascript
let arr = [1,2];

arr.push(3);

console.log(arr);

// [1,2,3]
```

## pop()

Removes last element.

```javascript
let arr = [1,2,3];

arr.pop();

// [1,2]
```

Returns removed element.

## unshift()

Adds element at beginning.

```javascript
let arr = [2,3];

arr.unshift(1);

// [1,2,3]
```

## shift()

Removes first element.

```javascript
let arr = [1,2,3];

arr.shift();

// [2,3]
```

---

# Looping Through Arrays

## 1. for Loop

```javascript
let nums = [10,20,30];

for(let i=0;i<nums.length;i++){

    console.log(nums[i]);

}
```

## 2. for...of

Best when index isn't needed.

```javascript
for(const value of nums){
    console.log(value);
}
```

## 3. for in loop

```javascript
for (let index in marks) {
    console.log(marks[index]);
}
```

---


# splice()

Powerful method for:

- Add
- Remove
- Replace

Changes original array.

## Add

```javascript
let marks = [100, 200, 300, 400, 500];
marks.splice(2, 0, 250); // add 250 at index 2
```

## Remove

```javascript
marks.splice(3, 2);     // remove 2 elements starting from index 3
```

## Replace

```javascript
marks.splice(1, 2, 150, 175); // replace 2 elements starting from index 1 with 150 and 175
```

## slice()

Creates a copy.

Does **NOT** modify original array.

```javascript
let arr = [1,2,3,4,5];
arr.slice(1,4);
// [2,3,4]
```

---

## Copy Entire Array

```javascript
let copy = arr.slice();
```

## Spread Operator (...)

Modern way to copy or merge arrays.

### Copy

```javascript
const copy = [...arr];
```

### Merge

```javascript
const result = [...arr1,...arr2];
```

### Add New Elements

```javascript
const arr = [...a,100,...b];
```

---

# join()

Array → String

```javascript
let arr = ["A","B","C"];

arr.join(",");
// A,B,C
```

---

# Searching

## indexOf()

Returns first index.

```javascript
arr.indexOf(20)
```

Returns

```text
-1
```

if not found.

---

## lastIndexOf()

Returns last occurrence.

---

## includes()

Returns boolean.

```javascript
arr.includes(20)

// true
```

---

# sort()

Sorts original array.

---

## Strings

```javascript
let fruits = [
    "Cherry",
    "Apple",
    "Banana"
];

fruits.sort();
```

Output

```text
Apple
Banana
Cherry
```

---

## Numbers (Wrong)

```javascript
let nums = [100,2,25];

nums.sort();
```

Output

```text
[100,2,25]
```

Because numbers are converted into strings.

---

## Correct Numeric Sort

Ascending

```javascript
nums.sort((a,b)=>a-b);
```

Output

```text
[2,25,100]
```

---

Descending

```javascript
nums.sort((a,b)=>b-a);
```

Output

```text
[100,25,2]
```

---

# flat()

Flattens nested arrays.

```javascript
let arr = [1,[2,3]];

arr.flat();

// [1,2,3]
```

---

## Multiple Levels

```javascript
arr.flat(2)
```

---

## Complete Flatten

```javascript
arr.flat(Infinity)
```

---

# Delete Elements

---

## pop()

Remove last.

---

## shift()

Remove first.

---

## splice()

Remove from middle.

Recommended.

---

## delete Operator (Avoid)

```javascript
let arr = ["A","B","C"];

delete arr[1];
```

Output

```text
["A", empty, "C"]
```

Length remains same.

```javascript
arr.length

// 3
```

Avoid using `delete`.

---

# Why JavaScript Array is NOT a Real Array?

JavaScript arrays are actually **special objects**.

Example

```javascript
let arr = [];

arr[0] = "A";

arr[1000] = "B";
```

Works perfectly.

A C++ array would not allow this.

---

# C++ Array

Characteristics

- Contiguous memory
- Same data type
- Fixed structure
- Mathematical indexing
- No gaps

---

# JavaScript Array

Characteristics

- Special Object
- Numeric property keys
- Different data types
- Sparse array allowed
- Dynamic size

---

Example

```javascript
let arr = [];

arr[1000] = "Hello";
```

Length becomes

```javascript
1001
```

Only two properties actually exist.

---

# Mixed Data Types

```javascript
let arr = [

    10,

    "Hello",

    true,

    {

        id:1

    }

];
```

Possible because JavaScript arrays are objects.

---

# V8 Optimization

Normally JavaScript arrays are objects.

But V8 optimizes arrays.

---

## Fast Array

```javascript
[1,2,3,4]
```

Stored efficiently.

---

## De-Optimization

Occurs when:

```javascript
arr[500] = 100;
```

or

```javascript
arr.push({});
```

or

```javascript
delete arr[2];
```

V8 converts array into slower object representation.

---

# Array vs C++ Array

| Feature | C++ Array | JavaScript Array |
|----------|-----------|------------------|
| Memory | Contiguous | Object-based |
| Types | Same Type | Mixed Types |
| Dynamic Size | No | Yes |
| Sparse | No | Yes |
| Gaps Allowed | No | Yes |
| Underlying Structure | Memory Block | Specialized Object |

---

## Quick Revision

| Method | Mutating | Returns | Time Complexity |
|--------|----------|---------|-----------------|
| push() | Yes | New length | O(1) amortized |
| pop() | Yes | Removed element | O(1) |
| shift() | Yes | Removed element | O(n) |
| unshift() | Yes | New length | O(n) |
| slice() | No | New array | O(n) |
| splice() | Yes | Removed elements | O(n) |
| concat() | No | New array | O(n) |
| join() | No | String | O(n) |
| indexOf() | No | Index or -1 | O(n) |
| includes() | No | Boolean | O(n) |
| sort() | Yes | Sorted array | O(n log n) |
| flat() | No | Flattened array | O(n) |

---

## Interview Questions

### What is the difference between `push()` and `unshift()`?

`push()` adds to the end and returns new length; `unshift()` adds to the beginning and also returns new length. `unshift()` is O(n) because it must shift all elements.

### What is the difference between `slice()` and `splice()`?

`slice()` creates a new array without modifying the original; `splice()` modifies the original and can add, remove, or replace elements.

### Why doesn't `delete arr[index]` work properly?

`delete` removes the value but leaves a "hole" in the array, and `length` remains unchanged. Always use `splice()` instead.

### How do you sort numbers in ascending order?

```javascript
arr.sort((a, b) => a - b);
```

Without the comparator, numbers are sorted as strings: `[100, 2, 25].sort()` → `[100, 2, 25]` (wrong).

### What is the time complexity of searching an array?

`indexOf()`, `includes()`, and `find()` are **O(n)** because they must check every element. For large datasets, consider storing data in a `Set` or `Map`.

### What is the difference between for-of and for-in loops?

`for-of` iterates over values; `for-in` iterates over indexes (and other enumerable properties, which is why it's not ideal for arrays). For arrays, always use `for-of` or `forEach()`.

### How do you create a shallow copy of an array?

```javascript
const copy = arr.slice();
// or
const copy = [...arr];
// or
const copy = Array.from(arr);
```

### What is the difference between `flat()` and `flatMap()`?

`flat()` removes nesting; `flatMap()` maps then flattens in one pass.

```javascript
[[1, 2], [3, 4]].flat();     // [1, 2, 3, 4]
[1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

### Why are JavaScript arrays not "real" arrays?

JavaScript arrays are objects with numeric string keys, not contiguous memory blocks like C++ arrays. This allows sparse arrays (with gaps) and mixed types, but costs performance.

### How does V8 optimize arrays?

V8 keeps "fast arrays" (dense, homogeneous) in optimized internal representation. Adding large gaps, storing arbitrary objects, or using `delete` "de-optimizes" the array, converting it to slower object representation.

---

## Key Takeaways

- Arrays are zero-indexed and stored as special objects in JavaScript.
- Use `push()` and `pop()` for O(1) stack operations.
- Use `shift()` and `unshift()` sparingly (they are O(n)).
- Always use `splice()` to remove elements; never use `delete`.
- Numeric sorting requires a comparator: `(a, b) => a - b`.
- `slice()` is non-mutating; `splice()` is mutating.
- For large arrays with frequent searches, use `Set` or `Map` instead of arrays.
- V8 optimizes dense homogeneous arrays; avoid sparse arrays and mixed types for performance.
- Modern alternatives like `flatMap()` and `reduce()` combine operations for efficiency.
- Array methods are non-destructive by design (except mutating ones); always reassign if using non-mutating methods.

---