//for of loop
//Array, string jaise iterable cheezon ke values ko nikalta hai.
// ["","",""]
// [{},{},{}]

// for (const element of object) {
    
// }


//for of loop
const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
    console.log(val);
    
}
//this loops print all array value one by one


const greeting = "Hello World"

for (const word of greeting) {
    console.log(word);
    
}

//same but on string


//
// const greeting = "Hello World"

// for (const word of greeting) {
//     if (word == " ") {
//         continue;
//     }
//     console.log(word);
    
// }
//we use continue to skip print " "



//Maps
//go to mdn for all details

const map = new Map()
map.set('IN' , "India")
map.set('US' , "United States")
map.set('FR' , "France")

console.log(map);

// for (const key of map) {
//     console.log(key);//this syntex print map in array which we dont want 
    
// }

for (const [key, value] of map) {
    console.log(key, '-', value ); //this is the syntex for print key and value sepratly 
    
}



//lets try on object

// const myObj = {
//     'Game1' : "Gta5",
//     'Game2' : "NFS",
//     'Game3' : "MFS", 
// }

// for (const [key,value] of myObj) {
//     console.log(key , value);
    
// }
//maps are ittratable but object are not


const myObj = {
    frontend: ['HTML', 'CSS', 'JavaScript'],
    backend: ['Node.js', 'Express', 'Go'],
    database: ['MongoDB', 'MySQL', 'PostgreSQL']
};

for (const key in myObj) {
    console.log(`k ${key} :`);
    for (const val of myObj[key]) { //in this line we use for of loop to get value of array 
        console.log(`${val}`);
        };
    for (const val in myObj[key]) { //in this line we use for in loop to get index of array
        console.log(`${val}`);
        }
        
    
}