let score = false

console.log(score); //40
console.log(typeof score); // string

let valueinNumber = Number(score); // convert string to number
console.log(valueinNumber); // 40 if the string is a valid number, NaN if not
console.log(typeof valueinNumber); // number

//if we convert
// "33" => 33
// "33abc" => NaN
// "true" => 1
// "false" => 0

let isLoggedIn = "faisal"
let loggedinboolean = Boolean(isLoggedIn); // convert number to boolean
console.log(loggedinboolean); // true if isLoggedIn is non-zero, false if zero

// 1 => true
// 0 => false
//"" => false
// "faisal" => true

// ***********************opration*************************

let value = 3;
let negvalue = -value; // negation

console.log(negvalue); // -3

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2/2); // 1
console.log(3%100); // 3

let str1 = "faisal";
let str2 = " khan";

console.log(str1 + str2); // "faisal khan" (string concatenation)

console.log("1"+1); // "11" (string concatenation)
console.log("1"-1); // 0 (string to number conversion, then subtraction)
console.log(1+"2"); // "12" (string concatenation)
console.log("4"+4+5); // "445" (string concatenation)
console.log(4+4+"5"); // "85" (number addition, then string concatenation)


console.log(+true); // 1 (unary plus operator converts true to number)
console.log(+false); // 0 (unary plus operator converts false to number)
console.log(true + true); // 2 (true is converted to 1, so 1 + 1 = 2)
console.log(+""); // 0 (unary plus operator converts empty string to number)



let num1, num2, num3;
num1 = num2 = num3 =2+2
console.log(num1); // 4



//prefix and postfix increment operators 
// we can go to mdn documentation for more details
let gamcounter=100;
gamcounter++; // increment operator
console.log(gamcounter); // 101

let x = 10;
console.log(x++); // 10 (postfix increment, x is used before being incremented)
console.log(x); // 11 (after the increment, x is now 11)

let y = 10;
console.log(++y); // 11 (postfix increment, y is incremented before being used)