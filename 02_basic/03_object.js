// singleton

//object literals


//Declaring symbol
const mySmbl= Symbol("key1")
const mySmbl2= Symbol("key2")

Object
const JsUser= {
    name: "Krishnendu",
    "full name": "Krishnendu Samanta",
    age: 20,
    mySmbl: "jksdhfksjbdfj",
    [mySmbl2]: "xjkvjkshdg",
    location: "Kolkata",
    email: "skrishnendu115@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  //this is not the best way to do console.log()
// console.log(JsUser["email"]);   //this is the way
// console.log(JsUser["full name"]);

// console.log(JsUser.mySmbl);  //this is not the correct to assess the symbol
// console.log(typeof JsUser.mySmbl);  


// //THE CORRECT WAY TO ACCESS A SYMBOL
// console.log(JsUser[mySmbl2]);  //this is how a symbol is accessed


//TO CHANGE THE VALUE OF THE OBJECTS
JsUser.email= "digitalkrish47@gmail.com"  //to change the value of a object
console.log(JsUser.email);  // hence changed
// Object.freeze(JsUser)  //so that no one can no further change the value of an object, to freeze the value
// console.log(JsUser.email);  //hence freezed

JsUser.email= "sdgfsdg@gmail.com" 
console.log(JsUser.email);  //see can no more be changed

// console.log(JsUser);  //Printing the whole object


//adding FUNCTION
JsUser.greeting = function(){
    console.log("Hello me, pls pls for gods sake, start loving yourself");
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());  // if any object is freezed, then function is not defined

JsUser.greetingTwo = function(){
    console.log(`Hello myself, ${this.name}`);  //we're refering to whatever the name is
}
console.log(JsUser.greetingTwo());