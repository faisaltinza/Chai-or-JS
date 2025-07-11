let Random = Math.random();

console.log(Random);

let a = prompt("first number");

let b = prompt("second number");

let c = prompt("opration")

function calc(a,b,c) {
    if (c === "+") {
        return a + b;
    } else if (c === "-") {
        return a - b;
    } else if (c === "*") {
        return a * b;
    } else if (c === "/") {
        return a / b;
    } else {
        return "Invalid operation";
    }
}

let result = calc(a,b,c);
alert("The result is: " + result);