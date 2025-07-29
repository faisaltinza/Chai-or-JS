function setUsername (username) {
    //complex db call
    this.username = username
    console.log('CALLED');
    
}

function createUser(username,email,password) {
    setUsername.call(this, username)//call and this se serUsername ne jo variable set kiya hai vo create user ko dediya
    this.email = email
    this.password = password
}

const newId = new createUser("faisal","google@gmail.com","dhfueaheb")
console.log(newId);
