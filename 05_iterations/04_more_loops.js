//for in loop
// Object ke keys (property names) ko nikalta hai.
// Kabhi array pe lagate ho to index (0, 1, 2...) deta hai.

//for in loop can work on objects and other properties we will chek soon

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }




const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    go : "Golang",
};

for (const key in myObj) {
    console.log(key, '-', myObj[key]);
    
    
}

//lets try it on array
const myArray = ['js','ts','py','go']
for (const key in myArray) {
    console.log(`key is ${key} value is ${myArray[key]}`);
    
}

//for in key works in array as key you but for of key give direct value