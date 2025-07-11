let a = 100;
const b = 200;
var c = 300;

if (true) {
    let a = 10;
const b = 20;
var c = 30;

console.log("Inner",a);//block scop
console.log("Inner",b);
console.log("Inner",c);

    
}

console.log(a);
console.log(b);
console.log(c);// output comes from scope this is a problem with var //global scop

//nested scop

function one (){
    const username = "Rahul"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }

    // console.log(website); // website is not defind out of our scope so gave error
    two()//function execute ouput rahul
    
}

one()//if i cmment this fun fucntion to didnt get variable value which is username

//

if (true) {
    const username = "Rahul"
    if (username === "Rahul") {
        const website = " Chomu"
        console.log(username+website);
        
        
    }
    // console.log(website); //Error
    
    
}

// console.log(username); //Error

/*******************************************intresting */
console.log(addone(5));//we got output before fucntion
function addone (num) {
    return num + 1
    
}

addone(5)



//

// console.log(addtwo(10)); in this case we didnt get output because it hold fucntion in variable //read hoisting in js
const addtwo = function (num){
    return num + 2
}//fucntion can also declared in variable

addtwo()
console.log(addtwo(10));//input will print here