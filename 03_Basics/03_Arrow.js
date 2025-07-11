const user = {
    username : "Ishaq",
    price : 999,
    
    welcomemessage : function(){
        console.log(`Hey ${this.username} , welcome to website`);
        console.log(this);//print current context
        
        
    }
}

user.welcomemessage()//function execute
user.username = "Monu" //change user name in fucntion
user.welcomemessage()
 
console.log(this);//ouput {} in console


//

function coffe (){
    let username = "faisal"
    console.log(this);
    // console.log(this.username);//undeined we cant use this in function
    
}

coffe()

//arrow fucntion

const chai = () =>  {
    let username = "Jagirdar"
    console.log(this);
    
}

chai() //ouput {} 

let arrowfunction = (num1, num2) => {
    return num1 + num2

}

console.log(arrowfunction(5,4));//9  //this is a basic arrow function (explicit return )


let implicitReturn = (num1, num2) => num1 + num2

let implicitReturn2 = (num1, num2) => (num1 + num2)

console.log(implicitReturn(50,50));//implicit return function this function assume return automatically
console.log(implicitReturn2(50,100));

//in curly bracess return in mendatory but in paranthese its not
//this arrow fucntion is very useful in react.


// let implicitReturn3 = (num1, num2) => { username = "faisal"} //object return wrong code

// console.log(implicitReturn3());// undefined

let implicitReturn3 = (num1, num2) => ({ username : "faisal"})// pass object in parantheses

console.log(implicitReturn3());
