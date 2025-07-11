//for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; }


for (let newVar = 0; newVar < 10; newVar++) {
    const element = newVar;
    console.log(element); }

// console.log(newVar); //as let and const are block scop we cann acces them here

// newVar = 9
// Check hota hai → 9 < 10 ✅
// Loop body chalta hai → console.log(newVar) → 9 print hota hai
// Phir newVar++ hota hai → newVar = 10
// Agli baar loop wapas condition check karta hai → 10 < 10 ❌
// Loop ruk jata hai, isliye 10 print nahi hota



for (let amount = 0; amount <= 50; amount++) {
    const element = amount;
    if (amount == 25) {
        console.log("25 is printed");


    }
    console.log(element);
}
// we can use if else in loop

// 10.58

for (let i = 0; i < 10; i++) {
    console.log(`out loop value : ${i}`);
    
    for (let o = 0; o < 10; o++) {
        console.log(`inner loop value : ${o} and outer loop ${i}`);
        
        
    }
    
}
//we have tasted here loop in loop 


for (let i = 1; i <= 10; i++) {
    console.log(`out loop value : ${i}`);
    
    for (let o = 1; o <= 10; o++) {
        console.log(i + `*` + o + `=` + i*o );
        ;
        
        
    }
    
}  // we have write a table with loop

let myArray = ["Superman", "Batman", "Spiderman", "Ironman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++ ) {
    const element = myArray[index];
    console.log(element);
    
}

//break and continue

for (let count = 1; count <= 20; count++) {
    if (count==5) {
        console.log(`Detected 5`);
        break;
    }

    console.log(`value of count is ${count}`);
    
}
//in this when count== to 5 if condition apply break



for (let count = 1; count <= 20; count++) {
    if (count==5) {
        console.log(`Detected 5`);
        continue; // contiue skip   program  for one time
    }

    console.log(`value of count is ${count}`);
    
}