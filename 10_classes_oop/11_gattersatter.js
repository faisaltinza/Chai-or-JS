class User {
    constructor(email,username,password){
        this.email=email
        this.username=username
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }



    get password(){
        return `encrypted ${this._password.toUpperCase()};`
    }
    set password(value) {
        this._password = value.toUpperCase();
    }
        
    
}
const faisal = new User("xerox@apple.com",'iamsteve',"udhtr@3445")
console.log(faisal.password);

console.log(faisal.email);

