//singalton

// object literal
// Object.creaet // constructor function

let myarray = [1, 2, 3, 4, 5];
console.log(myarray[3]); // 4 we can access the array elements using index

// in objects we can access the properties using key and value pair

const mysm = Symbol("mySymbol"); // creating a symbol

const JsUser = {
    name : "faisal",
    "full name": "faisal khan", // key can have space in it
    age : 25,
    location:"Jaipur",
    email: "faisal@localStorage.com",
    isactive: true,
    lastlogin:["monday", "tuesday"],
    [mysm] : "mykey1" // using symbol as key
    }

console.log(JsUser.name); // faisal accessing the property using key

console.log(JsUser["name"]); // 25 accessing the property using key in string format

console.log(JsUser["full name"]); // we cannot access the property with space in it using dot notation


console.log(JsUser[mysm]); //accessing the property using symbol
console.log(typeof mysm); // symbol is a primitive data type in javascript

//change value of property

// Object.freeze(JsUser); // freeze the object so that we cannot change the properties of the object
JsUser.email = "faisalandomar@local.com"; // changing the value of email property
console.log(JsUser); //

JsUser.greeting = function () {
    console.log("Hello js user");
    
}

JsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
    
}

console.log(JsUser.greeting()); // Hello js user
console.log(JsUser.greeting2()); // hello js user faisal