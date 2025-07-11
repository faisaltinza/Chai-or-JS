//for each loops
//Sirf array par use hota hai.
// Har element ke liye function call karta hai.
// Tumhe value, index, aur pure array de sakta hai.

// array.forEach(element => {
    
// });

const code = ['js','java','python','golang','c#']

code.forEach( function (val){
    console.log(`normal function ${val}`);
    })


// print thre arrow fucntion
code.forEach ((item) => {
    console.log(`arrow function ${item}`);
    
})


function printme (item){
    console.log(item);
    

}

code.forEach(printme) // in this fucntion we create fucntion first then we call it back dont execute just give refrence

code.forEach((item,index,arr) => {
    console.log(`item is ${item}, index is ${index}, arrlist is ${arr}  `);
    console.log(arr); //this line print full array
})
//this parameter have much more details




const myCode = [
    {
        languageName : "Javascript",
        shortName : "js",
    },
    {
        languageName : "Python",
        shortName : "py",
    },
    {
        languageName : "GoLang",
        shortName : "Go",
    },
]

myCode.forEach((item,) => {
    // console.log(item); //item only print full object 
    
    
    console.log(item.languageName);
    console.log(item.shortName);
    
    
})