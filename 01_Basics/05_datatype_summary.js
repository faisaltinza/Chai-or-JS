// Primitive data types in JavaScript

//types of data
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

let name = "John Doe"; // String
let age = 30; // Number
let isActive = true; // Boolean
let address; // Undefined
let temperature = null; // Null
let uniqueId = Symbol('id'); // Symbol
let largeNumber = BigInt(12345678901234567890); // BigInt


//reference data types (non primitive)

// 1. Object

// 2. Array

// 3. Function

const person = {
  name: "Jane Doe",
  age: 25,
  isActive: false
}; // Object curly braces

console.log(person.name, person.age, person.isActive );// Accessing object properties


const heroes = ["Superman", "Batman", "Wonder Woman"]; // Array in square brackets

console.log(heroes[0], heroes[1], heroes[2]); // Accessing array elements

const myfunction = function heroGreeting() {
  console.log("Hello, heroes!");
} // Function expression

console.log(typeof largeNumber);


//**********************************************

//Stack memory vs Heap memory

// Stack Memory:
// - Stores primitive data types (e.g., numbers, strings, booleans)
// - Fast access and allocation
// - Limited size
// - LIFO (Last In, First Out) structure
// - give copy of value when assigned to a variable

// Heap Memory:
// - Stores reference data types (e.g., objects, arrays, functions)
// - Slower access and allocation
// - Dynamic size
// - Managed by garbage collection
// - give reference of value when assigned to a variable

// Example of stack memory behavior (primitive data type)

let persn = "faisal"
let dusrapersn = persn

dusrapersn = "Omar" // changing dusrapersn does not affect persn this is que to stack memory behavior
console.log(persn); // Output: faisal
console.log(dusrapersn); // Output: Omar

// Example of reference data type (object)

let user = {
  email: "faisal@example.com",
};

let anotherUser = user; // anotherUser is a reference to the same object in memory

anotherUser.email = "omar@example.com"; // changing anotherUser.email will also change user.email

console.log(user.email); // output: omar@example.com