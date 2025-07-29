//ES6
//class is just a syntectical shuger in js everything is happening is here happening with help for new and other things


class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `this is your code ${this.password}`
    }
    changeUsername(){
        return this.username.toUpperCase()
    }
} 

let NewUser = new User("faisal","google@gmail.com","iampassword")

console.log(NewUser.encryptPassword()); 
console.log(NewUser.changeUsername()); 

//behind the scene

function UserOne (username,email,password) {
    
    this.username = username
    this.email = email
    this.password = password
}
    

UserOne.prototype.encryptPassword = function () {
        return `this is your code ${this.password}`
    }
UserOne.prototype.changeUsername = function () {
        return this.username.toUpperCase()
    }


let nayaUSer = new UserOne("ali","alibhai@ali.com",'545571')


console.log(nayaUSer.encryptPassword())
console.log(nayaUSer.changeUsername())

//everthing works in this method