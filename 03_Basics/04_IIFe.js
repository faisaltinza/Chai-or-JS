//immidiate invoked function expression (IIFE)

(function myFunction(){//named iife
    console.log(`DB Connected`)
})();
// ; after iife is required to stop execution
// myFunction()
//()() we wrape our function instead of its name and execute it

(() => {
    console.log(`DB Connected`)
})();//we can also use arrow function

((name) => {
    console.log(`Hey ${name} your DB is connected`)
})("ismail"); // we can pass parameter in iife

    