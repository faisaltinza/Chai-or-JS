const userEmail = [];

if (userEmail) {
    console.log("user email is valid");
}  else {
    console.log("user email is not valid");}
//in this situation userEmail is empty so it will not work

// falsy values
// false
// 0
//-0
// ""
// null
// undefined
// NaN
//bigint 0n

// truthy values
// true
// 1
//-1
// "0"
// "1"
// "false"
//'false'
// "true"
//if vlue not falsy it will be truthy
//[]
//{}
//[0]
//[1]
// function(){}

//empty array
const usermail = []; //we strict chek length of array

if (usermail.length === 0) {
    console.log("array is empty");
}  else {
    console.log("email is valid");}

//empty object
const user = { name : "Faisal"};
if (Object.keys(user).length === 0) {
    console.log("object is empty")
} else {
    console.log("object is not empty")}


// important
//nullish coalescing operator (??) null or undefined
const username = null ?? "faisal";
console.log(username);//output faisal

const userAge = 25 ?? 20;
console.log(userAge);//output 25

//this oprator is used to check if a value is null or undefined
//sometimes data base does give us null or undefined so this operator is used to check if value is null or undefined



//ternary operator
// condition ? true : false;

const iceteaprice = 00;
iceteaprice >= 80 ? console.log("icetea is good") : console.log("icetea is bad");
