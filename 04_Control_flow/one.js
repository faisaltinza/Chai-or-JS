//if
// <, >, <=, >=, ==, !=, ===, !==

const temperature = 51;
if (temperature < 51) {
    console.log("It's not too hot!");
} else {console.log("It's too hot!")}

//

const score = 200;

if (score >= 100) {
    const power = "fly";
    console.log(power);
}

// console.log(power); //this will not work because scope is block scoped.


//another method
const amount = 99;
if (amount > 0) console.log("amount is positive!")

//nested condition

const balance = 500;

if (balance >= 100) {
    console.log("You have money!");
} else if (balance > 0 ) {
    console.log("Balance is low cannot withdraw money");
} else {console.log("You have no money");}

//put nested conditin how many you want



// && and statement use for multiple condition

const userLoggedIn = true;
const  debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("allow to buy")
}

// || or statement use for multiple condition

const amountWallet = false;
const amountCard = false;

if (amountWallet || amountCard) {
    console.log("You can buy")
} else {
    console.log("not allow to buy")}



