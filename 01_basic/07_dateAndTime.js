//Documentation of Temporal: https://tc39.es/proposal-temporal/docs/

// Dates
// Dates are onject

let myDate= new Date()
// console.log(myDate);

//To increase the readability we use .toString() funtn
// console.log(myDate.toString());

// console.log(myDate.toDateString());  // what is printed: day month date year

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());  //pretty similar to ISOString()

// console.log(myDate.toLocaleDateString());  //most simplified way to print date

// console.log(myDate.toLocaleString());  //date and time

// console.log(typeof myDate);  //the data type of date is object



let myCreatedDate= new Date(2023, 0, 23)  // writing format(year, month, date); month starts with 0 in js
console.log(myCreatedDate.toDateString());

let myTimestamp= Date.now()
console.log(myTimestamp);  //this is the time in miliseconds, starting for 1st January 12Am till the very moment
console.log(Date.now()/1000);  // to convert it to seconds
console.log(Math.floor(Date.now()/1000));  //to avoid the digits after decimal


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

