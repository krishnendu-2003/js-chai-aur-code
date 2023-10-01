const score= 400;
// console.log(score);

const balance= new Number(100)
// console.log(balance);

// console.log(balance.toString());  // to concert numbers into string (not by appearance )

// console.log((balance.toFixed(2))); //to get zeros after decimal 

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));  //useful to roundup

const no= 1000000
console.log(no.toLocaleString());  //represented to local standards ; by default it is converted to US standard
console.log(no.toLocaleString('en-IN'));   //now it has been converted to Indian standard