//DOCUMENTATION LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

//Two ways to declare an object
// const tinderUser = new Object()  //it is a singleton object
const tinderUser={} //it is a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Krish"
tinderUser.isLoggedIn = false

console.log(tinderUser);

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
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//Fteching values from database
const users= [
    {
        id: 1,
        email: "sdkhf@gmail.com"
    },
    {
        id: 2,
        email: "aworj@gmail.com"
    },
    {
        id: 3,
        email: "manfjb@gmail.com"
    }
]

users[1].email
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if the object has a value

console.log(users);