console.log("Hello, World!");
var a = 5;
var b = 10;
console.log(a * b);

const accountId = 123456789;
let accountBalance = 1000.00;
var accountType = "savings";
accountCity = "Jaipur"
var accountState;

accountBalance = 1500.00; // Reassigning accountBalance is allowed
accountCity= "Delhi"; // Reassigning accountCity is allowed
// accountId = 987654321; // Reassigning accountId constant will throw an error

//1ays use let or const for variable declaration
//dont use var because it is not block scoped
// and can lead to unexpected behavior in loops and conditionals

console.table({accountId, accountBalance, accountType, accountCity, accountState});
console.log(typeof accountId); // number
console.table({
    'accountId': typeof accountId,
    'accountBalance': typeof accountBalance
});
console.log(typeof accountId)