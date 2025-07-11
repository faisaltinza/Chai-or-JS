

function sayMyname (){
    console.log("F");
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("L");
    
}

sayMyname() // this is function execution our all command are printed with this fucntion

function addTwoNumber(number1, number2,){
    console.log(number1 + number2);
    

}
//in bracket number1 number2 are parameter here.

addTwoNumber() //ouput Nan
addTwoNumber(7, 8)// argument given now output is 15 (in braket value called argument)
addTwoNumber(7, "8")// if user give string output is 78

const Result = addTwoNumber(7,5)// we have created a variable for function

console.log(Result);//output undefined with results

//another method
function add2Number(n1, n2,){
    let answer = n1+n2
    return answer
    

}

const answer = add2Number(2,4)

console.log("result",answer); //output coming

//function me return krne ke baad kuch b likhna bekar hai kch nhi hoga

//another method

function multply2number (x,y){
    return x * y
}

let calc = multply2number(100,10);
console.log(calc);//getting our output

//

function loginUser(username){
    if (username === undefined){
        console.log("please enter your name");
        return//we use it so no further code run when condition meet
    }
    return `${username} just logged in`
}
console.log(loginUser());//we got our funcition


function loginMessage(name){
    if (!name){
        console.log("please enter your name");
        return//! sign is another method this convert true to false false to true
    }
    return `${name} just logged in`
}
console.log(loginMessage("omar"));//we got our funcition


// JavaScript me ye values "falsy" hoti hain:

// "" (empty string)

// null

// undefined

// 0

// false

// NaN


function calculateCartPrice(...num1){
    return num1
}
//to take all prices in array we use rest oprator before number ...

console.log(calculateCartPrice(100)); //output we got
console.log(calculateCartPrice(100,200,300)); //output we got only first value

//new object pass in function
const user = {
    username : "faisal",
    price : 400,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)// we got fucntion
handleObject({
    username : "samu",
    price : 450,
})//pass object direct in fucntion

//new array pass in function

const myNewArray = [100, 200, 300, 400];

function returnValue(getarray){
    return getarray[2]
}
console.log(returnValue(myNewArray));//300
console.log(returnValue([1, 2, 3,]));// with direct pass a array
