//reduce

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10


const cartTotal = [1,4,2,3]

const total = cartTotal.reduce((acc,crr) => acc+ crr, 0 )
console.log(total);

//antoher example
let totalcalc = cartTotal.reduce( function(acc,crr) {
    console.log(`acc: ${acc} crr: ${crr}`);
    
    return acc * crr
}, 1);

console.log(totalcalc);

//with arrow function

const Calc = cartTotal.reduce((acc,crr) => (acc * crr), 5)

console.log(Calc);


//let try again

const courses = [
    {name: 'HTML', price: 10},
    {name: 'CSS', price: 20},
] 

const totalPrice = courses.reduce((acc, crr) => acc + crr.price, 0)

console.log(totalPrice);
//in this example we got out value from object