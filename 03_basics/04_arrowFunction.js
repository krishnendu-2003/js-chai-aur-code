const user ={
    userName: "krish",
    price: "199",
    
    welcomeMessage: function(){
        console.log(`${this.userName} , Welcome to website`);
        // console.log(this);
    }
    
}
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this);

// function krish(){
//     let username = "krishnendu"
//     console.log(this.username);
// }

// krish()


// const chai = () => {
//     let username = "Hitesh"
//     console.log(this.username);

// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3, 4));

//can also be written as
const multiply = (num1, num2) => (num1 * num2)
console.log(multiply(3, 4));

