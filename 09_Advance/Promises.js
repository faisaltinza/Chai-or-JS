//Promises
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //Db calls, Cryptogaphy, Networkcall
    setTimeout(function () {
        console.log('async task is completed');
        resolve()
        
    },1000)
})
//promisetwo
promiseOne.then(function() {console.log('Promise Consumed');
})

new Promise(function (resolve, reject){
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
        
    },1000)
}).then(()=>{console.log('task 2 resolved');
})
//promiseThree
const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({name:'ali bhai',email:'Jaigirdar@gmail.com'})
    },1000)
    
})
promiseThree.then(function(user) {
    console.log(user.email);
})
//promiseFour we learn how promised work how fileter data with then and catch how we consume promise
const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({username:"PrinceAziz",password:"789JayJayJagirdar"})
        }else{reject('Error:Something went wrong')
            }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    })
.then((userName)=>{console.log(userName);
})
.catch((eror)=>{console.log(eror);
})
.finally(()=>{console.log('task is runned');
})

//promiseFive in this promise we are handling promise with try and catch with async await
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({langName:"Javascript",owner:"Mustak Bhai"})
        }else{
            reject("oh ho there are some error")
        }
    },1000)
})

async function consumepromisefive() {
    
    
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumepromisefive()


//try and catch with fatch

// async function getTemp (){
    
//     try {
//         const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=2cde6a9d5bf17f45d8aadb754225b2d9')
//         console.log(typeof response);
//         // console.log(response);
        
//         const data = await response.json()//response to convert in jason takes time
//         console.log(data);
//     } catch (error) {
//         console.log('chek em',error);
        
//     }
    
// }
// getTemp()

fetch('https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=2cde6a9d5bf17f45d8aadb754225b2d9')
.then((response)=>{return response.json()})
.then((data)=>{console.log(data.main.temp-273.15);
}).catch((error)=>{console.log("Error :",error);
})
