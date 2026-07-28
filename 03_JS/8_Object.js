/*
Objects: An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
*/

// CRUD operations on objects: Create, Read, Update, Delete
/*
// Creating an object
const person = {
  firstName: "Priyanshu",
  lastName: "Agarwal",
  age: 30,
  email: "priyanshu.agarwal@example.com",
  bankDetails: {
    accountNumber: "1234567890",
    bankName: "ABC Bank",
    ifscCode: "ABC123456"
  }
}

// Reading properties of the object
console.log(person); 
console.log(typeof person);      // Output: object
console.log(person.firstName);   // Output: Priyanshu
console.log(person["lastName"]); // Output: Agarwal
console.log(person.age);         // Output: 30
console.log(person.email);       // Output: "priyanshu.agarwal@example.com"


// Updating properties of the object
person.age = 31; // Update age
person.email = "priyanshu.agarwal@newexample.com"; // Update email

// Adding a new property to the object
person.gender = "Male";
console.log(person); 

// Deleting a property from the object
delete person.bankDetails.ifscCode; // Delete ifscCode property from bankDetails object
console.log(person);
// {
//   firstName: 'Priyanshu',
//   lastName: 'Agarwal',
//   age: 31,
//   email: 'priyanshu.agarwal@newexample.com',
//   bankDetails: { accountNumber: '1234567890', bankName: 'ABC Bank' },
//   gender: 'Male'
// }
*/


// Printing keys, values and entries of an object
/*
const person = {
  firstName: "Priyanshu",
  lastName: "Agarwal",
  age: 21
}


const keys = Object.keys(person);       // Getting keys of the object
const values = Object.values(person);   // Getting values of the object
const entries = Object.entries(person); // Getting entries of the object

console.log(person);              // Output: { firstName: 'Priyanshu', lastName: 'Agarwal', age: 21 }
console.log(keys);                // Output: [ 'firstName', 'lastName', 'age' ]
console.log(values);              // Output: [ 'Priyanshu', 'Agarwal', 21 ]
console.log(entries);             // Output: [ [ 'firstName', 'Priyanshu' ], [ 'lastName', 'Agarwal' ], [ 'age', 21 ] ]

console.log(person["firstName"]);   // Output: Priyanshu
console.log(person.lastName);       // Output: Agarwal
console.log(person.age);            // Output: 21
console.log(person["lastName"]);    // Output: Agarwal
*/


// --------------------------------------------------------------------------------------------------------------------

// Copying an object is done by reference, not by value. 
// This means that when you copy an object, you are actually creating a reference to the original object, rather than creating a new object with the same properties. 
// As a result, if you modify the copied object, the original object will also be affected. 

/*
const person = {
  firstName: "Priyanshu",
  lastName: "Agarwal",
  age: 21
}

const person2 = person;  // Copying the person object to person2
console.log(person2);    // Output: { firstName: 'Priyanshu', lastName: 'Agarwal', age: 21 }

person2.age = 31;        // Updating the age property of person2
console.log(person.age); // Output: 31 (person object is also updated because person2 is a reference to person)
*/


// --------------------------------------------------------------------------------------------------------------------
// Loops
/*
person = {
  firstName: "Priyanshu",
  lastName: "Agarwal",
  age: 30
}

// 1, Using for...in loop to iterate over the properties of an object
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// firstName: Priyanshu
// lastName: Agarwal
// age: 30


// 2. Using for...of loop to iterate over the entries of an object
for (let [key, value] of Object.entries(person)) {
  console.log(key + ": " + value);
}
// Output:
// firstName: Priyanshu
// lastName: Agarwal
// age: 30
*/

// --------------------------------------------------------------------------------------------------------------------
// Nested Objects
// It is possible to have objects within objects, which are called nested objects. You can access the properties of nested objects using dot notation or bracket notation.
/*
const college = {
  name: "XYZ College",
  location: "New York",
  courses: ["Computer Science", "Mathematics", "Physics"],
  students: [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
  ]
}

const name = college.name;          // Accessing the name property of the college object
const location = college.location;  // Accessing the location property of the college object
const courses = college.courses;    // Accessing the courses property of the college object
const students = college.students;  // Accessing the students property of the college object


console.log(name);          // Output: XYZ College
console.log(location);      // Output: New York
console.log(courses);       // Output: [ 'Computer Science', 'Mathematics', 'Physics' ]
console.log(students);      // Output: [ { name: 'Alice', age: 20 }, { name: 'Bob', age: 22 }, { name: 'Charlie', age: 21 } ]



const college1 = {
  name: "XYZ College",
  location: "New York",
  courses: ["Computer Science", "Mathematics", "Physics"],
  students: {
    name: "Alice",
    age: 20,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001"
    }
  }
}

console.log(college.students.address.city); // Output: New York
*/

// --------------------------------------------------------------------------------------------------------------------
// Destructuring Objects
// Destructuring is a convenient way of extracting multiple properties from an object and assigning them to variables. It allows you to unpack values from objects into distinct variables.

/*
const person1 = {
  firstName: "Priyanshu",
  lastName: "Agarwal",
  age: 30,
  email: "priyanshu.agarwal@example.com"
}

// Destructuring the person1 object
const { firstName, lastName, age, email } = person1;
console.log(firstName); // Output: Priyanshu
console.log(lastName);  // Output: Agarwal
console.log(age);       // Output: 30
console.log(email);     // Output: priyanshu.agarwal@example.com

// Destructuring the  person1 object with renaming the variables
const { firstName: fName, lastName: lName, age: personAge, email: personEmail } = person1;
console.log(fName);        // Output: Priyanshu
console.log(lName);        // Output: Agarwal
console.log(personAge);    // Output: 30
console.log(personEmail);  // Output: priyanshu.agarwal@example.com
*/


// --------------------------------------------------------------------------------------------------------------------
// Function inside an object
/*
const person1 = {
  firstName: "Priyanshu",
  lastName: "Agarwal",
  age: 30,
  greeting: function() {
    console.log("Hello World!");
    // console.log(`My name is ${person.firstName}`);   // Not prefereed
    console.log(`My name is ${this.firstName}`);
    return "Hello King!";
  }
}

const greetingMessage = person1.greeting(); // Calling the greeting method of the person1 object
console.log(greetingMessage);               
// Output
// Hello World!
// My name is Priyanshu
// Hello King!


const person2 = {
    firstName: "Keshav",
    lastName: "Kumar"
}

person2.greeting = person1.greeting;         // Adding the greeting method to the person2 object
const greetingMessage2 = person2.greeting(); // Calling the greeting method of the person2 object
console.log(greetingMessage2);               
// Output
// Hello World!
// My name is Keshav
// Hello King!
*/


// --------------------------------------------------------------------------------------------------------------------
// Shallow Copying and Deep Copying of Objects
/*

// 1. Shallow Copying: A shallow copy of an object is a new object that is created by copying the properties of the original object. However, if the original object contains nested objects, the nested objects are not copied, but rather their references are copied. This means that if you modify a nested object in the shallow copy, it will also affect the original object.

const person = {
    firstName: "Priyanshu",
    lastName: "Agarwal",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}

// const shallowCopy = person;          // Shallow copy of the person object (by reference)
const shallowCopy = { ...person };  // Shallow copy: only first level is copied. Nested objects are still shared.

shallowCopy.address.city = "Los Angeles";  // Modifying the city property of the address object in the shallow copy
console.log(person.address.city);          // Output: Los Angeles (original object is affected because address is a nested object and is shared between the original and the shallow copy)

// Solution: Deep Copying an Object

// 2. Deep Copying: A deep copy of an object is a new object that is created by recursively copying all the properties of the original object, including any nested objects. This means that if you modify a nested object in the deep copy, it will not affect the original object.

const deepCopy = JSON.parse(JSON.stringify(person)); // Deep copy of the person object (by value)
deepCopy.address.city = "Chicago";  // Modifying the city property of the address object in the deep copy
console.log(person.address.city);   // Output: Los Angeles (original object is not affected because deep copy creates a new nested object)

// Limitations: Cannot clone
// - Functions
// - DOM Nodes
// - Class prototypes
*/

// --------------------------------------------------------------------------------------------------------------------
// Js keys can be of type string or symbol. If a key is not a string or symbol, it will be converted to a string.

const sym = Symbol("Hello");
const obj = {
  [sym]: "World", // Using a symbol as a key
  1: "One",       // Number key will be converted to string
  true: "True"    // Boolean key will be converted to string
}

console.log(obj[sym]);       // Output: World
console.log(obj[1]);         // Output: One
console.log(obj["1"]);       // Output: One (number key is converted to string)
console.log(obj[true]);      // Output: True
console.log(obj["true"]);    // Output: True (boolean key is converted to string)
