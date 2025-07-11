const courses = [
    {name: 'HTML', price: 10},
    {name: 'CSS', price: 20},
] 

const totalPrice = courses.reduce((acc, crr) => acc + crr.price, 0)

log(totalPrice);