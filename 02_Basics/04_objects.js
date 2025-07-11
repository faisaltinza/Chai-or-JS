const tinderAp = new Object();// singleton object
const tinderAp2 = {}; // object literal

tinderAp.id = "Userr123"; // adding property to object
tinderAp.name = "Ali Bhai"
tinderAp.IsLoggedIn = true;

console.log(tinderAp);// output comes with added property

const regularUser = {
    email:"atoz@india.com",
    fullName:{
        firstName: "Irfan",
        lastName: "Ustad",
    }
}

console.log(regularUser); //acces full object
console.log(regularUser.fullName); //acces desire proprty value just by adding  .


// lets discu

const obj1 = { 1 : "a", 2 : "b",};
const obj2 = { 3 : "c", 4 : "d",};

const obj3 = {obj1, obj2}; //output pirnted with object in object problem
console.log(obj3); 

const obj4 = Object.assign({},obj1,obj2); //this curly braces are the correct way as mention in documentaion because we mention here target and {} is the target here

console.log(obj4);

// most useful method spread

const obj5 = {...obj1,...obj2,} //spread
console.log(obj5);


//how value comes from data bases

const Users = [
    {
        id : 1,
        email:"h@gmail.com",
    },
    {
        id : 1,
        email:"target@gmail.com",
    },
    {
        id : 1,
        email:"h@gmail.com",
    },
    {
        id : 1,
        email:"h@gmail.com",
    },
    {
        id : 1,
        email:"h@gmail.com",
    },
] // arrey in object form

console.log(Users[1].email); //output goted

console.log(Object.keys(tinderAp)); //output comes in array 
console.log(Object.values(tinderAp)); //output comes in array 
console.log(Object.entries(tinderAp)); 

console.log(tinderAp.hasOwnProperty("IsLoggedIn"));// ask object has that value print in true or false


/******************************************************************** */
//destrucring

const course ={
    courseName : "js hindi",
    price : "900",
    teacher : "Rowan",
}

console.log(course.teacher);// a way to acces values of object
console.log(course["teacher"]);// a way to acces values of object
 const {courseName} = course //declare our course name value for reusable perpose
 const {courseName : Name} = course //assined a another name

console.log(courseName);
console.log(Name);

//api
// {
//     "name" : "aziz",
//     "course" : "Bak14D",
//     "price" : "free",

// } // Json file

// [
//     {}
//     {}
//     {}
// ] // another Json files structure



