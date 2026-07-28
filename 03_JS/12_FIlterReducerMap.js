// foreach, Filter, reducer, map, set, 

// forEach() method executes a provided function once for each array element. 
// It does not return a new array, but it can be used to perform side effects, such as logging values or modifying external variables.

/*
const arr = [10, 20, "Programming", 30, "JavaScript", 40];
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

// Output:
// Index: 0, Value: 10
// Index: 1, Value: 20
// Index: 2, Value: Programming
// Index: 3, Value: 30
// Index: 4, Value: JavaScript
// Index: 5, Value: 40
*/


// filter() method creates a new array with all elements that pass the test implemented by the provided function.

/*
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]


// Behing the scenes, the filter() method is implemented using a for loop that iterates over each element of the array 
// and applies the provided callback function to determine if the element should be included in the new array.

// const arr2 = [10,20,30,40,50];
// arr.filtering = function(compare) {

//     const ans = [];
//     for(let num of this) {
//         if(compare(num)) {
//             ans.push(num);
//         }
//     }
//     return ans;
// }

// arr2.filtering(num => num > 30); // Output: [40, 50]
// arr2.filtering(num => num < 30); // Output: [10, 20]





// const arr3 = [1, 2, 3, 4, 5];
// const ans = arr3.filtering(num => num > 3);
// console.log(ans); // Output: arr2.filtering is not a function

// To resolve this issue, we can define the filtering method on the Array prototype so that it is available to all array instances.
Array.prototype.filtering = function(compare) {
    const ans = [];
    for(let num of this) {
        if(compare(num)) {
            ans.push(num);
        }
    }
    return ans;
}

const arr4 = [10, 20, 30, 40, 50];
const result1 = arr4.filtering(num => num > 30);
console.log(result1); // Output: [40, 50]

const result2 = arr4.filtering(num => num < 30);
console.log(result2); // Output: [10, 20]
*/


// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

/*
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);       // Output: [1, 4, 9, 16, 25]


// Behing the scenes, the map() method is implemented using a for loop that iterates over each element of the array
// and applies the provided callback function to transform the element and include it in the new array.

Array.prototype.mapping = function(transform) {
    const ans = [];
    for(let num of this) {
        ans.push(transform(num));
    }
    return ans;
}

const arr5 = [1, 2, 3, 4, 5];
const result3 = arr5.mapping(num => num * 2);
console.log(result3); // Output: [2, 4, 6, 8, 10]

const result4 = arr5.mapping(num => num + 1);
console.log(result4); // Output: [2, 3, 4, 5, 6]   
*/


// reduce() method executes a reducer function on each element of the array, resulting in a single output value.

/*
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
*/



// Data structure: Set and Map

// A Set is a built-in JavaScript object that allows you to store unique values of any type, whether primitive values or object references.

/*
const arr = [1, 2, 3, 4, 5, 1, 2, 3];
const uniqueSet = new Set(arr);
console.log(uniqueSet);        // Output: Set(5) { 1, 2, 3, 4, 5 }
uniqueSet.add(6);
console.log(uniqueSet);        // Output: Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(uniqueSet.has(3)); // Output: true
uniqueSet.delete(2);
console.log(uniqueSet);        // Output: Set(5) { 1, 3, 4, 5, 6 }

console.log(uniqueSet.size);   // Output: 5
uniqueSet.clear();
console.log(uniqueSet.size);   // Output: 0




const email = ["john@example.com", "jane@example.com", "john@example.com"];
const uniqueEmails = new Set(email);
console.log(uniqueEmails); // Output: Set(2) { 'john@example.com', 'jane@example.com' }

// To make it back to an array, we can use the spread operator or Array.from() method.
const uniqueEmailsArray = [...uniqueEmails];
console.log(uniqueEmailsArray);   // Output: [ 'john@example.com', 'jane@example.com' ]



for(let num of uniqueEmails) {
    console.log(num);
}

// Output:
// 'john@example.com'
// 'jane@example.com'
*/




// A Map is a built-in JavaScript object that allows you to store key-value pairs, where keys can be of any type and values can be of any type as well.

const map = new Map([
    ["name", "John"],
    [30, "age"],
    [true, "isStudent"],
    [[1, 2, 3], "numbers"]
]);

console.log(map); 

// Output:
// Map(4) {
//   'name' => 'John',
//   30 => 'age',
//   true => 'isStudent',
//   [ 1, 2, 3 ] => 'numbers'
// }


for (let [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// Output:
// Key: name, Value: John
// Key: 30, Value: age
// Key: true, Value: isStudent
// Key: 1,2,3, Value: numbers


// CRUD operations on Map

const map1 = new Map();
map1.set('name', 'John');
map1.set('age', 30);
console.log(map1.get('name')); // Output: John
console.log(map1.get('age'));  // Output: 30

map1.delete('age');
console.log(map1.has('age'));  // Output: false

console.log(map1.has('name')); // Output: true

map1.clear();
console.log(map1.size);         // Output: 0

console.log(map1.has('name')); // Output: false        



