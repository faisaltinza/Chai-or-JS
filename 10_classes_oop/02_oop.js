const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}



// console.log(user.getUserDetails())
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}


const userOne = new User("Alfakr", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(user);
// console.log(userOne);

// console.log(userTwo);

//jab b new keyword use hota hai to nya instance generate hota hai 
// second step me constructor jo new ki wjh se create hua tha or instance ya object create kiya gya tha usme value jaegi
// 3rd .this ki wjh se value usme assign hogi
//4th me hame data mil jaega