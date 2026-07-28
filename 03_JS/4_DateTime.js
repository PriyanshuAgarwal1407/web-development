// Date and Time in JavaScript

// Creating a new Date object
let currentDate = new Date();
console.log("Current Date and Time: " + currentDate);

// Getting the current year, month, and day
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Months are zero-based
let day = currentDate.getDate();
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);


// ------------------------------------------------------------------------

let timestamp = Date.now();     // Get the current timestamp in milliseconds
let date = new Date(timestamp); // Create a new Date object from the timestamp
console.log("Date from Timestamp: " + date);

// Create a new Date object with specific date and time components
let specificDate = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
console.log("Specific Date: " + specificDate);

// Create a new Date object from a date string
let dateFromString = new Date('2024-06-15');
console.log("Date from String: " + dateFromString);

// Create a new Date object from an ISO 8601 string
let dateFromISO = new Date('2024-06-15T12:00:00Z');
console.log("Date from ISO 8601 String: " + dateFromISO);

// ------------------------------------------------------------------------
console.log(now);       // Output the current date and time
console.log(timestamp); // Output the current timestamp in milliseconds
console.log(date);      // Output the Date object created from the timestamp
console.log(new Date(2024, 5, 15, 12, 0, 0, 0)); // Output the Date object for June 15, 2024, at 12:00:00


/*
Month are zero-indexed in JavaScript, meaning January is 0, February is 1, and so on. 
Therefore, when creating a Date object with specific components, you need to subtract 1 from the month number. 
For example, to create a Date object for June (the 6th month), you would use 5 as the month index.
*/
new Date(2025, 0, 1); // Create a new Date object for January 1, 2025


/*
Getter Methods:
- getFullYear(): Returns the year (4 digits for 4-digit years)
- getMonth(): Returns the month (0-11)
- getDate(): Returns the day of the month (1-31)
- getDay(): Returns the day of the week (0-6)
- getHours(): Returns the hour (0-23)
- getMinutes(): Returns the minutes (0-59)
- getSeconds(): Returns the seconds (0-59)
- getMilliseconds(): Returns the milliseconds (0-999)
*/

let currentYear = now.getFullYear();
let currentMonth = now.getMonth(); // Note: January is 0
let currentDate = now.getDate();
let currentDay = now.getDay(); // Note: Sunday is 0
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();
let currentSeconds = now.getSeconds();
let currentMilliseconds = now.getMilliseconds();

console.log(`Current Year: ${currentYear}`);
console.log(`Current Month: ${currentMonth}`); // Note: January is 0
console.log(`Current Date: ${currentDate}`);
console.log(`Current Day of the Week: ${currentDay}`); // Note: Sunday is 0
console.log(`Current Hours: ${currentHours}`);
console.log(`Current Minutes: ${currentMinutes}`);
console.log(`Current Seconds: ${currentSeconds}`);
console.log(`Current Milliseconds: ${currentMilliseconds}`);


/*
Date objects are mutable:
Setter Methods:
- setFullYear(year): Sets the year (4 digits for 4-digit years)
- setMonth(monthIndex): Sets the month (0-11)
- setDate(day): Sets the day of the month (1-31)
- setHours(hours): Sets the hour (0-23)
- setMinutes(minutes): Sets the minutes (0-59)
- setSeconds(seconds): Sets the seconds (0-59)
- setMilliseconds(milliseconds): Sets the milliseconds (0-999)
*/

let date = new Date();  // Create a new Date object for the current date and time
date.setFullYear(2025); // Set the year to 2025
date.setMonth(0);       // Set the month to January (0)
date.setDate(1);        // Set the day of the month to 1
date.setHours(0);       // Set the hour to 0
date.setMinutes(0);     // Set the minutes to 0
date.setSeconds(0);     // Set the seconds to 0
date.setMilliseconds(0); // Set the milliseconds to 0

console.log(date); // Output the modified Date object (January 1, 2025, at 00:00:00.000)



// Auto correction of date values:
let autoCorrectedDate = new Date(2024, 11, 32); // December 32, 2024 (invalid date)
console.log(autoCorrectedDate); // Output: January 1, 2025 (auto-corrected to the next valid date)

let autoCorrectedMonth = new Date(2024, 12, 15); // Month index 12 (invalid month)
console.log(autoCorrectedMonth); // Output: January 15, 2025 (auto-corrected to the next valid month)

let autoCorrectedNegativeDate = new Date(2024, 0, -5); // January -5, 2024 (invalid date)
console.log(autoCorrectedNegativeDate); // Output: December 26, 2023 (auto-corrected to the previous valid date)

let autoCorrectedNegativeMonth = new Date(2024, -1, 15); // Month index -1 (invalid month)
console.log(autoCorrectedNegativeMonth); // Output: November 15, 2023 (auto-corrected to the previous valid month)  


/*
Formatting Dates:
- toString(): Returns the date and time as a human-readable string
- toDateString(): Returns the date portion of a Date object as a human-readable string
- toTimeString(): Returns the time portion of a Date object as a human-readable string
- toISOString(): Returns the date and time in ISO 8601 format
- toLocaleDateString(): Returns the date portion of a Date object as a string, formatted according to locale conventions
- toLocaleTimeString(): Returns the time portion of a Date object as a string, formatted according to locale conventions
- toLocaleString(): Returns the date and time as a string, formatted according to locale conventions
*/

dateFormat = new Date();                        // Create a new Date object for the current date and time
console.log(dateFormat.toString());             // Output the date and time as a human-readable string
console.log(dateFormat.toDateString());         // Output the date portion as a human-readable string
console.log(dateFormat.toTimeString());         // Output the time portion as a human-readable string
console.log(dateFormat.toISOString());          // Output the date and time in ISO 8601 format
console.log(dateFormat.toLocaleDateString());   // Output the date portion formatted according to locale conventions
console.log(dateFormat.toLocaleTimeString());   // Output the time portion formatted according to locale conventions
console.log(dateFormat.toLocaleString());       // Output the date and time formatted according to locale conventions


/*
Known problems with JavaScript Date

- Timezone issues: JavaScript Date objects are based on the local timezone of the environment in which they are created. This can lead to unexpected results when working with dates across different timezones.

- Inconsistent behavior across browsers: Different browsers may implement the Date object differently, leading to inconsistencies in date parsing and formatting.

- Limited range: The Date object can only represent dates between approximately 100 million days before or after January 1, 1970. This can be limiting for applications that need to work with dates outside of this range.

- Lack of support for certain date formats: The Date object may not support all date formats, leading to issues when parsing or formatting dates.

- Performance issues: The Date object can be slow and inefficient when working with large datasets or performing complex date calculations.

- Lack of support for time zones: The Date object does not provide built-in support for working with time zones, which can lead to issues when working with dates across different time zones.
*/

// Better alternatives to JavaScript Date:
// - Moment.js: A popular library for working with dates and times in JavaScript, providing a simple and consistent API for parsing, formatting, and manipulating dates.
// - Luxon: A modern library for working with dates and times in JavaScript, built on top of the Intl API and providing a more powerful and flexible API than Moment.js.
// - date-fns: A lightweight library for working with dates in JavaScript, providing a functional programming approach to date manipulation and formatting. 


// Summary:
/*

| Creating Dates     | `new Date()`, `Date.now()`, `new Date(timestamp)`, `new Date(year, month, day, ...)`, `new Date("YYYY-MM-DD")`, `new Date(ISO_String)` |
| Timestamp          | `Date.now()` returns milliseconds since **1 Jan 1970 UTC**                                                                             |
| Month Index        | Months are **0–11** (January = `0`, December = `11`)                                                                                   |
| Getter Methods     | `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`              |
| Setter Methods     | `setFullYear()`, `setMonth()`, `setDate()`, `setHours()`, `setMinutes()`, `setSeconds()`, `setMilliseconds()`                          |
| Date Mutability    | `Date` objects are **mutable**—setter methods modify the existing object.                                                              |
| Auto-Correction    | Invalid values automatically roll over (e.g., `new Date(2024,11,32)` → **Jan 1, 2025**)                                                |
| Formatting Methods | `toString()`, `toDateString()`, `toTimeString()`, `toISOString()`, `toLocaleDateString()`, `toLocaleTimeString()`, `toLocaleString()`  |
| Common Issues      | Time zones, browser inconsistencies, parsing problems, limited range, no built-in timezone support                                     |
| Better Libraries   | **date-fns**, **Luxon**, **Moment.js** (legacy, maintenance mode)                                                                      |
*/