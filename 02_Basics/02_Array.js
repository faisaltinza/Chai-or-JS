const Marvel = ["Ironman", "Thor", "Hulk", "CaptainAmerica", "BlackWidow", "Hawkeye"];
const Dc = ["Superman", "Batman", "WonderWoman", "Flash", "Aquaman", "GreenLantern"];

// Marvel.push(Dc); // Adding the DC array to the Marvel array
// console.log(Marvel); // Output: [Ironman, Thor, Hulk, CaptainAmerica, BlackWidow, Hawkeye, [Superman, Batman, WonderWoman, Flash, Aquaman, GreenLantern]]
// Note: The DC array is added as a single element to the Marvel array, resulting in a nested array.
// console.log(Marvel[6][1]);  // Output: Batman not a good way to access elements in a nested array

const allheroes = Marvel.concat(Dc); // Merging both arrays into a new array
console.log(allheroes); // Output: [Ironman, Thor, Hulk, CaptainAmerica, BlackWidow, Hawkeye, Superman, Batman, WonderWoman, Flash, Aquaman, GreenLantern]


const allnewheroes = [...Marvel, ...Dc]; // Using spread operator to merge both arrays with spread operator prefferred
console.log(allnewheroes); // Output: [Ironman, Thor, Hulk, CaptainAmerica, BlackWidow, Hawkeye, Superman, Batman, WonderWoman, Flash, Aquaman, GreenLantern]

const newarray = [1, 2, 3, [4, 5, 6], 7, 8, 9,[10 ,11, [12 ,13]]]; // Nested array
const flatarray = newarray.flat(Infinity); // Flattening the nested array
console.log(flatarray);


console.log(Array.isArray("faisal")); // Output: false
console.log(Array.from("faisal")); // Output: [ 'f', 'a', 'i', 's', 'a', 'l' ] // Converts string to array
console.log(Array.from({name: "faisal"})); //intresting will solve later

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300] // Creates an array from the given arguments

