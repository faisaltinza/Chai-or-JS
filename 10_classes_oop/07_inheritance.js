//

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`this is your user name${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password

    }
    addCourse(){
        console.log(`new course add by ${this.username}`);
        
    }
}
//with this method we easyly acces username with super keyword which is in
// User in another class this is a another way which we was doing in prototype inheritance


const newTeacher = new Teacher('Romann','roman@rome.com','789dfds');

console.log(newTeacher);

newTeacher.addCourse()
//


const newUser = new User('Zakir')

// newUser.addCourse() //super is in teacher extends so does not have acces
newUser.logMe()
newTeacher.logMe()

console.log(newTeacher === Teacher); //false because it create a instance
console.log(newTeacher instanceof Teacher); //true instance
console.log(newTeacher instanceof User); //true instance
