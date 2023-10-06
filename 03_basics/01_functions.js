// console.log("k");
// console.log("r");
// console.log("i");
// console.log("s");
// console.log("h");

function sayMyName(){
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
}
// sayMyName()

function addTwoNos(no1,no2){
    console.log(no1+no2);
}
// const result= addTwoNos(3,4)  //here we come to enter the two nos
// console.log(result);  //output is expected as "undefined", this way result will not store the value


function multi(a,b){
    // let result1= a*b
    // return result1
    return a*b
}
const result1 = multi(3,4)
// console.log(result1);


function userLoginMessage(userName){
    if(!userName){  // !userName is basically userName === undefined
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}
// console.log(userLoginMessage("Krishnendu"))
// console.log(userLoginMessage()) //if nothing is there, then we basically are not defining any value inside the function


