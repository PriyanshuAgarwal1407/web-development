// Array in JS
// An array is a special variable, which can hold more than one value at a time.
// It is a data structure that can store a collection of elements, such as numbers, strings, or objects, in a single variable. Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

/*
// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Accessing elements in an array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// Modifying elements in an array
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// -----------------------------------------------------------------------------------

// Mutating Methods
// 1. Adding elements to an array
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

// 2. Removing elements from an array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// 3. unshift() - add element at the beginning of array
fruits.unshift("Apricot");
console.log(fruits); // Output: ["Apricot", "Apple", "Blueberry", "Cherry"]

// 4. shift() - remove element from the beginning of array
fruits.shift();
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// -----------------------------------------------------------------------------------

// Array length
console.log(fruits.length); // Output: 3

// Invalid Index
// console.log(fruits[10]); // undefined

// Last element of array
console.log(fruits[fruits.length - 1]); // Output: Cherry

// Type of array
console.log(typeof fruits); // Output: object

// ----------------------------------------------------------------------------------

// Array with different data types
let mixedArray = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(mixedArray);
// Output: [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]]

// Accessing elements in a mixed array
console.log(mixedArray[0]);      // Output: 1
console.log(mixedArray[1]);      // Output: Hello
console.log(mixedArray[5].name); // Output: John
console.log(mixedArray[6][1]);   // Output: 2

// ---------------------------------------------------------------------------------

// Looping through an array

// 1. for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// Apple
// Blueberry
// Cherry

// 2. forEach method
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// Apple
// Blueberry
// Cherry

// 3. for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// Apple
// Blueberry
// Cherry

// 4. for...in loop (not recommended for arrays, but works)
for (let index in fruits) {
    console.log(fruits[index]);
}
// Output:
// Apple
// Blueberry
// Cherry

// ---------------------------------------------------------------------------------

// object(non primitive) data type is passed by reference
// primitive data type is passed by value

let arrNum = [10, 20, 30, 40, 50];
let arrNum2 = arrNum;    // arrNum2 is a reference to arrNum
arrNum2[0] = 100;        // Modifying arrNum2 will also modify arrNum
arrNum2.push(60);        // Adding an element to arrNum2 will also affect arrNum
console.log(arrNum);     // Output: [100, 20, 30, 40, 50]

const arrNum3 = [1, 2, 3];
// arrNum3 = [4, 5, 6];    // This will throw an error because arrNum3 is a constant reference


/*
// splice() method - add/remove/replace elements from original array
// 1. add elements
let marks = [100, 200, 300, 400, 500];
marks.splice(2, 0, 250); // add 250 at index 2
console.log(marks);      // Output: [100, 200, 250, 300, 400, 500]

// 2. remove elements
marks.splice(3, 2);     // remove 2 elements starting from index 3
console.log(marks);     // Output: [100, 200, 250, 500]

// 3. replace elements
marks.splice(1, 2, 150, 175); // replace 2 elements starting from index 1 with 150 and 175
console.log(marks);           // Output: [100, 150, 175, 500]


// slice() method - returns a shallow copy of a portion of an array into a new array object

let arr = [10, 20, 30, 40, 50];
let newArr = arr.slice(1, 4); // returns elements from index 1 to 3
console.log(newArr);          // Output: [20, 30, 40]
console.log(arr);             // Original array remains unchanged: [10, 20, 30, 40, 50]
*/


/*
const arr = [10, 20, 30, 40, 50];
const arr2 = ["Priyanshu",11,true];

// arr.push(arr2);     // Adding arr2 as a single element to arr
// console.log(arr);   // Output: [10, 20, 30, 40, 50, ["Priyanshu", 11, true]]

const combinedArr = arr.concat(arr2); // Combining arr and arr2 into a new array
console.log(combinedArr); // Output: [10, 20, 30, 40, 50, "Priyanshu", 11, true]
console.log(arr);         // Original array remains unchanged: [10, 20, 30, 40, 50]
console.log(arr2);        // Original array remains unchanged: ["Priyanshu", 11, true]


const arr3 = [90,4,true,"Hello"];
const combinedArr2 = arr.concat(arr2, arr3); // Combining arr, arr2, and arr3 into a new array
console.log(combinedArr2); // Output: [10, 20, 30, 40, 50, "Priyanshu", 11, true, 90, 4, true, "Hello"]


// --------------------------------------------------------------------------------------
// Spread Operator
// The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. It provides a concise way to copy, merge, or expand arrays and objects.

// Example of using the spread operator with arrays
const arrA = [1, 2, 3];
const arrB = [...arrA, 4, 5, 6]; // Expanding arrA into arrB
console.log(arrB);               // Output: [1, 2, 3, 4, 5, 6]


// Array Destructuring
// Array destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a concise and readable way to extract data from arrays and objects.

// Example of array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers; // Destructuring the first three elements
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3

// You can also skip elements during destructuring
const [one, , three] = numbers; // Skipping the second element
console.log(one);   // Output: 1
console.log(three); // Output: 3

// You can also use the rest operator to collect the remaining elements
// Why rest operator is used in destructuring? The rest operator is used in destructuring to collect the remaining elements of an array into a new array. It allows you to extract specific elements while grouping the rest into a single variable, making it easier to work with arrays of varying lengths.
// Why not spread operator? The spread operator is used to expand elements of an array or object, while the rest operator is used to collect remaining elements into a new array. In destructuring, the rest operator is more appropriate for gathering leftover elements after extracting specific ones.

const [head, ...tail] = numbers; // head gets the first element, tail gets the rest
console.log(head);               // Output: 1
console.log(tail);               // Output: [2, 3, 4, 5]
*/

// ---------------------------------------------------------------------------------------
// Array Methods: join(), split(), reverse(), indexOf(), .lastIndexOf(), includes(), find();
/*
// 1. join() method - joins all elements of an array into a string
const arrJoin = ["Hello", "World", "from", "JavaScript"];
const joinedString = arrJoin.join(" "); // Joining with space
console.log(joinedString);              // Output: "Hello World from JavaScript"

// 2. split() method - splits a string into an array of substrings
const str = "Hello World from JavaScript";
const splitArray = str.split(" "); // Splitting by space
console.log(splitArray);           // Output: ["Hello", "World", "from", "JavaScript"]

// 3. reverse() method - reverses the order of elements in an array
const arrReverse = [1, 2, 3, 4, 5];
arrReverse.reverse();
console.log(arrReverse); // Output: [5, 4, 3, 2, 1]

// 4. indexOf() method - returns the first index of a specified element in an array
const arrIndexOf = ["Apple", "Banana", "Cherry", "Date"];
const index = arrIndexOf.indexOf("Cherry");
console.log(index);      // Output: 2

// 5. lastIndexOf() method - returns the last index of a specified element in an array
const arrLastIndexOf = ["Apple", "Banana", "Cherry", "Date", "Cherry"];
const lastIndex = arrLastIndexOf.lastIndexOf("Cherry");
console.log(lastIndex);  // Output: 4

// 6. includes() method - checks if an array contains a specified element
const arrIncludes = ["Apple", "Banana", "Cherry"];
const hasBanana = arrIncludes.includes("Banana");
console.log(hasBanana);  // Output: true

// 7. find() method - returns the first element that satisfies a provided testing function
const arrFind = [10, 20, 30, 40, 50];
const foundElement = arrFind.find(element => element > 25);
console.log(foundElement); // Output: 30

const notFoundLastIndex = arrFind.lastIndexOf(100); // Element not found
console.log(notFoundLastIndex); // Output: -1 (indicates that the element is not found in the array)
*/

// ---------------------------------------------------------------------------------------
/*
// Sorting Arrays

// sort() method - sorts the elements of an array in place and returns the sorted array

const arrSort = [3, 1, 4, 2, 5];
arrSort.sort();       // Sorts in ascending order by default
console.log(arrSort); // Output: [1, 2, 3, 4, 5]

const arrSortStr = ["Banana", "Apple", "Cherry"];
arrSortStr.sort();          // Sorts in ascending order by default
console.log(arrSortStr);    // Output: ["Apple", "Banana", "Cherry"]

const names = ["Priyanshu", "Rohit", "amit", "Saurabh"];
names.sort();        // Sorting the array in ascending order
console.log(names);  // Output: ["Priyanshu", "Rohit", "Saurabh", "amit"] (case-sensitive sorting)



const arrSorts = [40, 100, 1, 5, 25, 10];
arrSorts.sort();       // Default sort (lexicographical order)
console.log(arrSorts); // Output: [1, 10, 100, 25, 40, 5]

// To sort numbers correctly, we need to provide a compare function
arrSorts.sort((a, b) => a - b); // Sorts in ascending order
console.log(arrSorts);          // Output: [1, 5, 10, 25, 40, 100]

arrSorts.sort((a, b) => b - a); // Sorts in descending order
console.log(arrSorts);          // Output: [100, 40, 25, 10, 5, 1]
*/

// ---------------------------------------------------------------------------------------
// Flattening an array - converting a multi-dimensional array into a single-dimensional array
/*
const multiDimensionalArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(multiDimensionalArray);       // Output: [1, [2, 3], [4, [5, 6]], 7]
console.log(multiDimensionalArray[2]);    // Output: [4, [5, 6]]
console.log(multiDimensionalArray[2][1]); // Output: [5, 6]

// Using flat() method to flatten the array
const flattenedArray = multiDimensionalArray.flat(2); // Flattening 2 levels deep
console.log(flattenedArray);                          // Output: [1, 2, 3, 4, 5, 6, 7]

// Flattening the array completely
const completelyFlattenedArray = multiDimensionalArray.flat(Infinity); // Flattening all levels
console.log(completelyFlattenedArray);               // Output: [1, 2, 3, 4, 5, 6, 7]

// Using flatMap() method to flatten the array
const arrFlatMap = [1, 2, 3, 4];
const flattenedWithFlatMap = arrFlatMap.flatMap(x => [x, x * 2]);
console.log(flattenedWithFlatMap); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
*/

// ---------------------------------------------------------------------------------------
// Arrays are objects because they store values as string-keyed properties ("0", "1", ...) while adding special array features like length and push(). 

const a = [10, 309, "Priyanshu", true, 9.3];
console.log(a["0"]); // Output: 10
console.log(a[0]);   // Output: 10

a.name = "Krishna"; // Adding a property to the array object
console.log(a);     // Output: [10, 309, "Priyanshu", true, 9.3, name: "Krishna"]

const b = [1, 2, 3];
b[5] = 6;       // Adding an element at index 5, leaving index 3 and 4 undefined
console.log(b); // Output: [ 1, 2, 3, <2 empty items>, 6 ]