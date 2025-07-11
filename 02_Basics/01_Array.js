//array     
const myArray = [1, 2, 3, 4, 5]; // Array in square brackets
const myHeroes = ["Superman", "Batman", "Wonder"]; // Array of strings
console.log(myArray); // Output: [1, 2, 3, 4, 5]
console.log(myHeroes[1]); // Output: "Batman"

const myarray2 = new Array(1, 2, 3, 4, 5); // Creating an array using the Array constructor
console.log(myarray2); // Output: [1, 2, 3,

//documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//arrey methods
myArray.push(6); // Adding an element to the end of the array
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]
myArray.pop(); // Removing the last element from the array
console.log(myArray); // Output: [1, 2, 3, 4, 5]

myArray.unshift(0); // Adding an element to the beginning of the array
console.log(myArray); // Output: [0, 1, 2, 3
myArray.shift(); // Removing the first element from the array
console.log(myArray); // Output: [1, 2, 3, 4

console.log(myArray.includes(4)); // Checking if the array includes the value 4, Output: true
console.log(myArray.indexOf(3)); // Finding the index of the value 3, Output: 2
console.log(myArray.indexOf(10)); // Finding the index of a value not in the array, Output: -1

const newArray = myArray.join(); // Joining array elements into a string
console.log(myArray);// it is still an array
console.log(newArray); // Output: "1,2,3,4,5" it is a string now
console.log(typeof newArray); // Output: "string"

//slice and splice

console.log("A", myArray);

const myn1 = myArray.slice(1, 3); // Slicing the array from index 1 to 3 (not inclusive)
console.log(myn1); // Output: [2, 3]
console.log("B", myArray); // Output: [1, 2, 3, 4, 5] // Original array remains unchanged

const myn2 = myArray.splice(1, 3); // Splicing the array from index 1, removing 3 elements
console.log("C", myn2); // Output: [2, 3, 4]

console.log("D", myArray); // Output: [1, 5] // Original array is modified

// sometimes we need to modify the original array, sometimes we need to keep it unchanged
// slice is used to get a part of the array without modifying the original array



