# 📘 Lecture 08: Objects in JavaScript

> Objects are one of the most important data structures in JavaScript. They store data as **key-value pairs** and can also contain **methods (functions)**.

---

# 1. What is an Object?

An object is a collection of **key-value pairs**.

- **Key** → Label (String or Symbol)
- **Value** → Any JavaScript data type

```javascript
const person = {
  name: "Alice",
  age: 30,
  isStudent: true
};
```

---

# 2. CRUD Operations

CRUD = Create • Read • Update • Delete

---

## A. Create Object

```javascript
const car = {};

const user = {
  username: "js_dev",
  loginCount: 57,
  "is-premium-member": true
};
```

---

## B. Read Properties

### Dot Notation

```javascript
console.log(user.username);
```

Works only with valid identifiers.

---

### Bracket Notation

```javascript
console.log(user["username"]);
console.log(user["is-premium-member"]);
```

Required for:

- Spaces
- Hyphens
- Dynamic property names

Example:

```javascript
let key = "username";

console.log(user[key]);
```

---

## C. Update & Add Properties

```javascript
const book = {
  title: "The Hobbit"
};

book.title = "The Lord of the Rings";

book.author = "J.R.R. Tolkien";
book.pages = 1178;
```

---

## D. Delete Property

```javascript
delete book.pages;
```

---

# 3. Methods in Objects

A function inside an object is called a **method**.

```javascript
const user = {
  name: "Alice",

  greet() {
    console.log(`Hello ${this.name}`);
  }
};

user.greet();
```

---

## The `this` Keyword

Inside a method,

```javascript
this
```

refers to **the object calling the method**.

```javascript
const user = {
  name: "Alice",

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Output

```
Alice
```

---

# 4. Looping Through Objects

---

## A. `for...in`

Loops over object keys.

```javascript
const car = {
  make: "Honda",
  model: "Civic",
  year: 2021
};

for (const key in car) {
  console.log(key, car[key]);
}
```

---

## B. Object.keys()

Returns an array of keys.

```javascript
Object.keys(car);
```

Output

```javascript
["make", "model", "year"]
```

Loop:

```javascript
for (const key of Object.keys(car)) {
  console.log(key, car[key]);
}
```

---

## C. Object.values()

Returns only values.

```javascript
Object.values(car);
```

Output

```javascript
["Honda", "Civic", 2021]
```

---

## D. Object.entries()

Returns key-value pairs.

```javascript
Object.entries(car);
```

Output

```javascript
[
  ["make", "Honda"],
  ["model", "Civic"],
  ["year", 2021]
]
```

Best way to loop:

```javascript
for (const [key, value] of Object.entries(car)) {
  console.log(key, value);
}
```

---

# Which Loop Should You Use?

| Method | Best Use |
|---------|----------|
| Object.entries() | ✅ Keys + Values |
| Object.keys() | Keys only |
| Object.values() | Values only |
| for...in | Avoid unless needed |

---

# 5. Objects are Reference Types

Assignment copies the **reference**, not the object.

```javascript
let obj1 = {
  value: 10
};

let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value);
```

Output

```
20
```

Both variables point to the same object.

---

# 6. Shallow Copy

Creates a new top-level object.

Nested objects are still shared.

---

## Spread Operator

```javascript
const original = {
  name: "Alice",
  age: 30
};

const copy = {
  ...original
};

copy.age = 31;

console.log(original.age);
```

Output

```
30
```

---

## Nested Object Problem

```javascript
const user = {
  name: "Alice",
  address: {
    city: "New York"
  }
};

const copy = {
  ...user
};

copy.address.city = "London";

console.log(user.address.city);
```

Output

```
London
```

Spread performs **Shallow Copy**.

---

# 7. Deep Copy

Creates a completely independent clone.

---

## `structuredClone()`

```javascript
const clone = structuredClone(original);
```

Supports

- Objects
- Arrays
- Date
- Map
- Set

---

Example

```javascript
const user = {
  name: "Alice",
  address: {
    city: "New York"
  }
};

const clone = structuredClone(user);

clone.address.city = "London";

console.log(user.address.city);
```

Output

```
New York
```

---

## Limitations

Cannot clone

- Functions
- DOM Nodes
- Class prototypes

---

# 8. Modern ES6 Object Features

---

## Property Shorthand

Old

```javascript
const name = "Alice";

const user = {
  name: name
};
```

New

```javascript
const name = "Alice";

const user = {
  name
};
```

---

## Method Shorthand

Old

```javascript
const user = {
  greet: function () {}
};
```

New

```javascript
const user = {
  greet() {}
};
```

---

## Computed Property Names

```javascript
const key = "email";

const user = {
  [key]: "alice@example.com"
};
```

Output

```javascript
{
  email: "alice@example.com"
}
```

---

# 9. Destructuring

---

## Object Destructuring

```javascript
const user = {
  name: "Alice",
  age: 30
};

const { name, age } = user;
```

---

### Rename Variables

```javascript
const { name: userName } = user;
```

---

### Default Values

```javascript
const { role = "User" } = user;
```

---

### Nested Destructuring

```javascript
const user = {
  profile: {
    isAdmin: true
  }
};

const {
  profile: { isAdmin }
} = user;
```

---

# 10. Array Destructuring

```javascript
const scores = [98, 85, 100];

const [first, second] = scores;
```

Skip elements

```javascript
const [gold, , bronze] = scores;
```

---

# 11. Symbols

A Symbol is a **unique primitive value** used as an object key.

---

## Create Symbol

```javascript
const id = Symbol("userId");
```

Every Symbol is unique.

```javascript
Symbol("id") === Symbol("id");
```

Output

```
false
```

---

## Using Symbol as Key

```javascript
const id = Symbol("userId");

const user = {
  name: "Alice"
};

user[id] = "abc123";
```

Access

```javascript
console.log(user[id]);
```

---

## Hidden from Normal Iteration

```javascript
Object.keys(user);
```

Does not include Symbol keys.

To retrieve Symbols

```javascript
Object.getOwnPropertySymbols(user);
```

---

# Important Interview Questions

### Q1. Difference between Dot and Bracket notation?

| Dot | Bracket |
|------|----------|
| Simple | Flexible |
| Only valid identifiers | Works with any key |
| Cannot use variables | Can use variables |

---

### Q2. Difference between Shallow Copy and Deep Copy?

| Shallow | Deep |
|----------|------|
| Copies top-level only | Copies everything recursively |
| Nested objects shared | Completely independent |
| Spread Operator | structuredClone() |

---

### Q3. Difference between Object.keys(), values(), entries()

| Method | Returns |
|---------|----------|
| Object.keys() | Keys |
| Object.values() | Values |
| Object.entries() | Key-value pairs |

---

### Q4. Why are objects called Reference Types?

Because variables store the **memory address** of the object, not the object itself.

---

### Q5. When should you use `this`?

Use `this` inside object methods to access the current object's properties.

---

# Cheat Sheet

```javascript
// Create
const obj = {};

// Read
obj.name
obj["name"]

// Update
obj.age = 20

// Delete
delete obj.age

// Keys
Object.keys(obj)

// Values
Object.values(obj)

// Entries
Object.entries(obj)

// Loop
for (const [k, v] of Object.entries(obj)) {}

// Shallow Copy
const copy = { ...obj };

// Deep Copy
const clone = structuredClone(obj);

// Destructuring
const { name, age } = obj;

// Symbol
const id = Symbol("id");
obj[id] = 101;
```

---

# Key Takeaways

- Objects store data as **key-value pairs**.
- Use **dot notation** for normal properties and **bracket notation** for dynamic or special keys.
- Objects are **reference types**.
- Spread (`...`) creates a **shallow copy**.
- `structuredClone()` creates a **deep copy**.
- Prefer **Object.entries()** for iterating over both keys and values.
- Use **destructuring** for cleaner code.
- **Symbols** create unique object keys and avoid property name collisions.