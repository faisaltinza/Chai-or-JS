let user = [
  {nam : 'hariom',
  odd : 25,
  term : false,
  amount:500},

  {nam : 'ramesh',
  odd : 27,
  term : true,
  amount:500}

]
console.log(user[0].odd);


let oddp2 = undefined;
let oddp1 = undefined;
let odd0 = undefined;
let oddm1 = undefined;
let oddm2 = undefined;

let nump2 = 0
let nump1 = 0
let num = 0
let numm1 = 0
let numm2 = 0

user.forEach(e => {
  odd0 = e.odd


  
  
});




// if(term == true){
//     numm2 = num+amount
//     numm1 = num+amount
//     num0 = num-amount
//     nump1 =num-amount
//     nump2 =num-amount
// }else{
//     numm2 = num-amount
//     numm1 = num-amount
//     num0 = num+amount
//     nump1 =num+amount
//     nump2 =num+amount
// }





console.table([
  { odd: oddm2, num: numm2 },
  { odd: oddm1, num: numm1 },
  { odd: odd,   num: num0 },
  { odd: oddp1, num: nump1 },
  { odd: oddp2, num: nump2 }
]);







