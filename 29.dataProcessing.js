// String Methods Examples
const str = "Hello, JavaScript!";
console.log(str.indexOf("Java")); // 7
console.log(str.includes("Script")); // true
console.log(str.search("Java")); // 7
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
console.log(str.charAt(4)); // o
console.log(str.substring(0, 5)); // Hello
console.log(str.slice(-10, -1)); // JavaScrip
console.log(str.toUpperCase()); // HELLO, JAVASCRIPT!
console.log(str.toLowerCase()); // hello, javascript!
console.log("  Trim this!  ".trim()); // "Trim this!"
console.log("Repeat! ".repeat(3)); // "Repeat! Repeat! Repeat! "
console.log(str.replace("JavaScript", "World")); // Hello, World!
console.log(str.split(", ")); // ["Hello", "JavaScript!"]

// Number Methods Examples
console.log(Number.isFinite(123)); // true
console.log(Number.isInteger(123.45)); // false
console.log(Number.isNaN(NaN)); // true
console.log((123.456).toFixed(2)); // 123.46
console.log((123).toString()); // "123"

// Math Methods Examples
console.log(Math.abs(-10)); // 10
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1

// Date Methods Examples
console.log(Date.now()); // Current timestamp in milliseconds
console.log(Date.parse("2024-01-01")); // Timestamp for specific date

const date = new Date();
console.log(date.getFullYear()); // Current year
console.log(date.getMonth()); // Current month (0-11)
console.log(date.getDate()); // Current day of the month
console.log(date.getHours()); // Current hour
console.log(date.getMinutes()); // Current minutes
console.log(date.getSeconds()); // Current seconds
console.log(date.getMilliseconds()); // Current milliseconds
console.log(date.getTime()); // Milliseconds since epoch
console.log(date.getDay()); // Current day of the week (0-6)
console.log(date.getTimezoneOffset()); // Timezone offset in minutes
console.log(date.toLocaleString()); // Locale-specific date and time