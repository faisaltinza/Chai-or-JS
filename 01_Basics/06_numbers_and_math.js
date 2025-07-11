//Numbers

const score = 100; // Number
console.log(score); // Output: 100

const balance = new Number(500); // Creating a number object
console.log(balance); // Output: [Number: 500]
console.log(typeof balance); // Output: "object" because it's a Number object, not a primitive number

// there are some methods available on Number objects like in strings we read before

console.log(balance.toString()); // Output: "500" - converts the number to a string
console.log(balance.toString().length); // Output: 3 - length of the string representation of the number
console.log(typeof balance.toString()); // Output: "string"

console.log(balance.toFixed(2)); // Output: "500.00" - formats the number to 2 decimal places

const otherNumber = 123.456;
console.log(otherNumber.toFixed(2)); // Output: "123.46" - rounds to 2 decimal places
console.log(otherNumber.toPrecision(3));// Output: "123" - formats the number to 3 significant digits
console.log(otherNumber.toPrecision(1)); // Output: "1e+2" - scientific notation for 1 significant digit

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN')); // Output: "10,00,000" - formats the number according to Indian numbering system

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991 - maximum safe integer in JavaScript

//Math

console.log(Math); // Output: [Math object with various properties and methods]);

console.log(Math.PI); // Output: 3.141592653589793 - value of Pi
console.log(Math.abs(-5)); // Output: 5 - absolute value
console.log(Math.round(4.5)); // Output: 5 - rounds to nearest integer
console.log(Math.ceil(3.2)); // Output: 4 - rounds up to nearest integer
console.log(Math.floor(3.8)); // Output: 3 - rounds down to nearest integer
console.log(Math.min(1, 2, 3)); // Output: 1 - minimum value

console.log(Math.random()); // Output: Random number between 0 and 1 (exclusive)
console.log(Math.random() * 10); // Output: Random number between 0 and 10 (exclusive)
console.log((Math.random() *9)+1);// Output: Random number between 1 and 10 (exclusive)

const randomNumber = ((Math.random() * 10)+1); 
console.log(Math.round(randomNumber)); // Output: Random integer between 1 and 10 (inclusive)

//let discuss a way to generate a random integer between a specific range, say 10 and 20 (inclusive)
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// Output: Random integer between 10 and 20 (inclusive)


