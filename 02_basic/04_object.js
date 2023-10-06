//DOCUMENTATION LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

//Two ways to declare an object
// const tinderUser = new Object()  //it is a singleton object
const tinderUser={} //it is a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Krish"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//objects ke andar object

const regularUser= {
    email: "skrish@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Krishnendu",
            lastName: "Samanta"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);

const obj1= {
    1: "a",
    2: "b"
}
const obj2= {
    3: "c",
    4: "d"
}
//Merging obj1 and obj2
// const obj3= {obj1,obj2}
const obj3 = Object.assign({},obj1, obj2)
console.log(obj3);