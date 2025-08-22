function getCityTimeFromOffset(offsetSeconds) {
  const nowUtc = Date.now();
  const cityDate = new Date(nowUtc + offsetSeconds * 1000);

  // cityDate ko system ke timezone me mat padho → UTC methods use karo
  const hours = cityDate.getUTCHours();
  const minutes = cityDate.getUTCMinutes();
  const seconds = cityDate.getUTCSeconds();

  console.log('current time stamp',nowUtc);
  
  

  return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

console.log("India:", getCityTimeFromOffset(19800));
console.log("London:", getCityTimeFromOffset(0));
console.log("New York:", getCityTimeFromOffset(-14400));