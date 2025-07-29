//prototype

let myName = 'faisal   ';
let myCompany = "Kvs    ";
// console.log(myName.length);
// console.log(myName.trim().length);//this property will not work with every variable 
// console.log(myName.trueLength);//so we have to create a method for this

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`the length is ${this.trim().length}`);
    }
//we have created our own method to trim spaces in all text and this is accesible for all string
myName.trueLength()


myCompany.trueLength()

'cheking        '.trueLength() //print real length












// let myHeroes = ["thor", "spiderman"]

// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",
//     getSpiderpower : function name() {
//         console.log(`spiderpoweris ${this.spiderman}`);
        
//     }
// }

// Object.prototype.faisal=function() {
//     console.log('faisal is present in every object');
    
// }

// heroPower.faisal()
// // heroPower.getSpiderpower()
// myHeroes.faisal()


// Array.prototype.sayMyname = function () {
//     console.log('this is superpower of array');

// }

// myHeroes.sayMyname()
// heroPower.sayMyname()//notwork in object


//inheritance

//old approch

// const insPector = {
//     canInspection : true,
// }
// const chaSupport = {
//     isAvailable : false,
// }
// const concorSupport = {
//     equipment : false,
//     comment:'we are working on it',
//     ___proto___ : chaSupport
// }

// console.log(concorSupport);
// insPector.___proto___ = chaSupport
// console.log(insPector);

//ek object ki proprty dusres se acces krwana hi inheritance hota hai 


//modern syntex

// const officer = {
//     name: "Faisal",
//     idNumber: "ID12345"
// };

// const officerDuty = {
//     work: "Surveillance",
//     duty: "Night"
// };

// Object.setPrototypeOf(officer, officerDuty)

// console.log(officer.work);
// console.log(officerDuty.name); But inheritance works only one way:
// Child (officer) can access properties of Parent (officerDuty)
// But Parent (officerDuty) cannot access properties of Child (officer)
