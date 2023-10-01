// stack is used for all primitive datatypes
// heap memory is used for all non-primitive datatypes

let myInstaName= "echo whisper"
let anotherName= myInstaName
anotherName="krish"

// console.log(myInstaName);
// console.log(anotherName); 


let userOne = {
    email: "skrishnendu115@gmail.com",
    upi: "krish@sbin"
}
let userTwo = userOne
userTwo.email = "digitalkrish47@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);