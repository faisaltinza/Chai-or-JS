const nowUtc = Date.now();
const timezone = 19800*1000
const current = new Date(nowUtc+timezone)

console.log(current.toLocaleTimeString("en-IN"));