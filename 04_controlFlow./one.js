// if


if (2== "2"){
    // console.log("executed");
}

if(2 === "2"){
    // console.log(executed);
}

// <, >, <= ,>=, ==, !=, ===

// == only checks if the values are same only
// === also checks for the datatype for both LHS and RHS

const temperature = 41
if(temperature === 1){
    // console.log("Temp is less than 50");
}else{
    // console.log("Temp is greater than 50");
}

const score = 200
if (score >100){
    const power = "fly"
    // console.log(`User power: ${power}`);
}


// const balance = 1000
// if(balance < 500) {
//     console.log("less than 500");
// }else if (balance <750) {
//     console.log("less then 750");
// } else if (balance < 900) {
//     console.log("less then 900");
// } else {
//     console.log("more than 1000");
// }

const isUserLoggedIn = true
const debitCard = true

if(isUserLoggedIn && debitCard){
    console.log(("Allow to buy course"));

}


const loggedInFromGoogle = false
const loggedInFromEmail = true
const loggedInFromMeta = false

if (loggedInFromEmail || loggedInFromGoogle || loggedInFromMeta) {
    console.log("User can log in");
}