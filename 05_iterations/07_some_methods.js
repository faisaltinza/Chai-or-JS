//map opration 

const MyNum = [1,2,3,4,5,6,7,8,9,10];

let add10 = MyNum.map((num) => num + 10)

console.log(add10)


//another method

let anothermethod = [];
MyNum.forEach((num)=>{
    anothermethod.push(num + 20);
} )

console.log(anothermethod);


//let see chaining method you can use more than one method in a single line

let value = [100,200,300,400,500]

let result = value.map((num) => num + 100).map((num) => num * 2).filter((num) => num > 600)

console.log(result);

