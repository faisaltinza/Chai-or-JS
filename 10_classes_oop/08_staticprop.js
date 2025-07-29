class User{
    constructor(username){
        this.username=username
    
    }
    logMe () {
        console.log(`Username is ${this.username}`);
        
    }
    static creatId(){
        return '123'
    }
}

// const newRahul = new User('rahulkhan911') //we have use static to stop attach or generate id for new user

// console.log(newRahul.creatId())

class Contact extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const attachId = new Contact('Rowan','slash@google.com')

 attachId.logMe()
 console.log(attachId.creatId())

