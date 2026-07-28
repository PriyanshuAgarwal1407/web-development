# JavaScript Built-in Functions & Objects (Most Important)

JavaScript provides many **built-in functions, methods, and objects** that are available without installing any library.

---

# 1. Number

| Method               | Purpose                  |
| -------------------- | ------------------------ |
| `Number()`           | Convert to number        |
| `Number.isNaN()`     | Check NaN                |
| `Number.isFinite()`  | Check finite number      |
| `Number.isInteger()` | Check integer            |
| `toString()`         | Convert number to string |
| `toFixed()`          | Fixed decimal places     |
| `toPrecision()`      | Significant digits       |

```javascript
Number("100");           // 100
Number.isInteger(10);    // true
(19.99).toFixed(1);      // "20.0"
```

---

# 2. Math

| Method          | Purpose        |
| --------------- | -------------- |
| `Math.abs()`    | Absolute value |
| `Math.round()`  | Round          |
| `Math.floor()`  | Round down     |
| `Math.ceil()`   | Round up       |
| `Math.trunc()`  | Remove decimal |
| `Math.pow()`    | Power          |
| `Math.sqrt()`   | Square root    |
| `Math.max()`    | Largest value  |
| `Math.min()`    | Smallest value |
| `Math.random()` | Random decimal |
| `Math.sign()`   | Number sign    |

```javascript
Math.abs(-10);
Math.floor(4.9);
Math.sqrt(64);
Math.random();
```

---

# 3. String

| Method          | Purpose                                 |
| --------------- | --------------------------------------- |
| `length`        | Length of string                        |
| `charAt()`      | Character at index                      |
| `at()`          | Character using positive/negative index |
| `includes()`    | Search substring                        |
| `indexOf()`     | First occurrence                        |
| `lastIndexOf()` | Last occurrence                         |
| `startsWith()`  | Starts with                             |
| `endsWith()`    | Ends with                               |
| `slice()`       | Extract part                            |
| `substring()`   | Extract substring                       |
| `replace()`     | Replace text                            |
| `replaceAll()`  | Replace all                             |
| `split()`       | String → Array                          |
| `trim()`        | Remove spaces                           |
| `trimStart()`   | Remove left spaces                      |
| `trimEnd()`     | Remove right spaces                     |
| `toUpperCase()` | Uppercase                               |
| `toLowerCase()` | Lowercase                               |
| `concat()`      | Join strings                            |
| `repeat()`      | Repeat string                           |
| `padStart()`    | Add characters at start                 |
| `padEnd()`      | Add characters at end                   |

---

# 4. Array

| Method        | Purpose                |
| ------------- | ---------------------- |
| `push()`      | Add at end             |
| `pop()`       | Remove last            |
| `shift()`     | Remove first           |
| `unshift()`   | Add first              |
| `length`      | Array size             |
| `includes()`  | Search element         |
| `indexOf()`   | Element index          |
| `find()`      | Find first element     |
| `findIndex()` | Find index             |
| `filter()`    | Filter elements        |
| `map()`       | Transform array        |
| `forEach()`   | Iterate                |
| `reduce()`    | Reduce to single value |
| `some()`      | Any element satisfies  |
| `every()`     | All elements satisfy   |
| `sort()`      | Sort array             |
| `reverse()`   | Reverse array          |
| `join()`      | Array → String         |
| `slice()`     | Copy portion           |
| `splice()`    | Add/Remove elements    |
| `concat()`    | Merge arrays           |
| `flat()`      | Flatten nested array   |
| `flatMap()`   | Map + Flatten          |

---

# 5. Object

| Method             | Purpose                            |
| ------------------ | ---------------------------------- |
| `Object.keys()`    | Keys                               |
| `Object.values()`  | Values                             |
| `Object.entries()` | Key-value pairs                    |
| `Object.assign()`  | Copy object                        |
| `Object.freeze()`  | Immutable object                   |
| `Object.seal()`    | Prevent adding/removing properties |
| `Object.hasOwn()`  | Check own property                 |

---

# 6. Date

| Method          | Purpose      |
| --------------- | ------------ |
| `new Date()`    | Current date |
| `getDate()`     | Day          |
| `getMonth()`    | Month        |
| `getFullYear()` | Year         |
| `getHours()`    | Hour         |
| `getMinutes()`  | Minute       |
| `getSeconds()`  | Second       |
| `Date.now()`    | Timestamp    |

---

# 7. JSON

| Method             | Purpose              |
| ------------------ | -------------------- |
| `JSON.stringify()` | Object → JSON String |
| `JSON.parse()`     | JSON String → Object |

---

# 8. Global Functions

| Function          | Purpose               |
| ----------------- | --------------------- |
| `parseInt()`      | String → Integer      |
| `parseFloat()`    | String → Float        |
| `isNaN()`         | Check NaN             |
| `isFinite()`      | Check finite          |
| `encodeURI()`     | Encode URL            |
| `decodeURI()`     | Decode URL            |
| `setTimeout()`    | Run after delay       |
| `setInterval()`   | Repeat after interval |
| `clearTimeout()`  | Stop timeout          |
| `clearInterval()` | Stop interval         |

---

# 9. Console

| Method              | Purpose       |
| ------------------- | ------------- |
| `console.log()`     | Print output  |
| `console.error()`   | Error message |
| `console.warn()`    | Warning       |
| `console.table()`   | Display table |
| `console.time()`    | Start timer   |
| `console.timeEnd()` | Stop timer    |

---

# 10. Type Conversion

| Function    | Purpose            |
| ----------- | ------------------ |
| `Number()`  | Convert to Number  |
| `String()`  | Convert to String  |
| `Boolean()` | Convert to Boolean |
| `BigInt()`  | Convert to BigInt  |

---

# Most Frequently Used in Interviews

* `Math.floor()`
* `Math.random()`
* `Math.max()`
* `Math.min()`
* `Number.isNaN()`
* `Number.isInteger()`
* `parseInt()`
* `parseFloat()`
* `toFixed()`
* `toString()`
* `includes()`
* `slice()`
* `split()`
* `replace()`
* `trim()`
* `push()`
* `pop()`
* `map()`
* `filter()`
* `reduce()`
* `find()`
* `sort()`
* `Object.keys()`
* `Object.values()`
* `JSON.parse()`
* `JSON.stringify()`
* `Date.now()`
* `setTimeout()`
* `setInterval()`

These are the built-in APIs you'll use most often in everyday JavaScript development, coding interviews, and DSA problems.
