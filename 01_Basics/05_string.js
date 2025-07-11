let name = "faisal";
let score = 40;

console.log("My name is " + name + " and my score is " + score + "."); // String concatenation old way

console.log(`My name is ${name} and my score is ${score}.`); // Template literals (ES6) - modern way

const gameName = new String('Chess'); // Creating a string object

console.log(gameName); // String object
console.log(typeof gameName); // "object" because it's a String object, not a primitive string

console.log(gameName[0]); // Accessing the first character of the string object
console.log(gameName.__proto__); // Accessing the prototype of the string object
console.log(gameName.length); // Length of the string object

console.log(gameName.toUpperCase()); // Converting the string object to uppercase but  not changing the original object
console.log(gameName.charAt(2)); // Accessing the character at index 2 of the string object
console.log(gameName.indexOf('e')); // Finding the index of 'e' in the string object

const newString = gameName.substring(0, 4); // Extracting a substring from the string object
console.log(newString); // Output: "Ches"

const anotherString = gameName.slice(-4, 3); // Slicing the string object from index -6 (start) to 3 (end)
console.log(anotherString); // Output: "es" (slicing from the end)

//trim method
const Value = "     Helllo World!     "; // String with leading and trailing spaces
console.log(Value); // Original string with spaces
console.log(Value.trim()); // Removing leading and trailing spaces

//replace method
const URL = "https://www.example.com/path%20to";
URL.replace('%20',('-'))
console.log(URL.replace('%20', '-')); // Replacing '%20' with '-' in the URL string
console.log(URL.includes('example')); // Checking if the string includes 'example'



//string methods
//refer mdn docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/anchor     