let myDate = new Date(); // Current date and time
console.log(myDate); // Output: Current date and time in ISO format
console.log(myDate.toString()); // Output: Current date and time in a human-readable format
console.log(myDate.toJSON()); // Output: Current date and time in JSON format
console.log(myDate.toISOString()); // Output: Current date and time in ISO 8601 format
console.log(myDate.getDay());// Output: Day of the week (0-6, where 0 is Sunday)
console.log(myDate.toLocaleDateString()); // Output: Current date in the local format
console.log(myDate.toLocaleString());

let newDate = new Date(2023, 0, 10); // January 10, 2023 (months are 0-indexed)
console.log(newDate); // Output: Date object for January 10, 2023
console.log(newDate.toString()); // Output: Human-readable format for January 10, 2023

let DateinMyformat = new Date("01-14-2019")
console.log(DateinMyformat); // Output: in desired format
console.log(DateinMyformat.toString()); // Output: Human-readable format for January 14, 2023

// Timestamp example




let timestamp = Date.now(); // Current timestamp in milliseconds since January 1, 1970
console.log(timestamp); // Output: Current timestamp in milliseconds
console.log(timestamp / 1000); // Output: Current timestamp in seconds

let anotherDate = new Date(); // Current date and time
console.log(anotherDate.getDay()); // Output: Day of the week (0-6, where 0 is Sunday)

console.log( newDate.toLocaleString('default'),{
    weekday: 'long',
    timeZone:'UTC',
}
); // Output: Localized string with the day of the week for January 10, 2023

