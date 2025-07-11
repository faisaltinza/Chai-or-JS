//filter opration

// const code = ['js','java','python','golang','c#']

// const save = code.forEach((item) => {
//     console.log(item);
//     return item; //we use return but for each does not return anything.
// })

// console.log(save); //print undefind 

const MyNum = [1,2,3,4,5,6,7,8,9,10];

const newNum = MyNum.filter((num) => num <= 5)
console.log(newNum);

// another method

const result = MyNum.filter((num) => {
    return num > 5
;});

console.log(result); 
//we use curly braces so we need to return keyword.
//important is that for each does not return anything.

//let get done this with for each loop

const anotherNum = [];

MyNum.forEach((num) => {
    if (num <= 5)
        anotherNum.push(num);
})

console.log(anotherNum);
//so we can use both methods 


const books = [
  {
    name: "Atomic Habits",
    publishedYear: 2018,
    edition: 1,
    genre: "Self-help"
  },
  {
    name: "The Alchemist",
    publishedYear: 1988,
    edition: 3,
    genre: "Fiction"
  },
  {
    name: "Clean Code",
    publishedYear: 2008,
    edition: 2,
    genre: "Programming"
  },
  {
    name: "Sapiens",
    publishedYear: 2011,
    edition: 1,
    genre: "History"
  },
  {
    name: "You Don’t Know JS",
    publishedYear: 2015,
    edition: 1,
    genre: "Programming"
  }
];

let userBook = books.filter((choice) => choice.genre === "Fiction",)
userBook = books.filter((choice) => {return choice.edition === 1 && choice.genre === "Programming";})

console.log(userBook);

