function calculateCartPrice(...num1){  // ... is the rest operator, it bundles up all the arguments that we pass
    return num1
}
// console.log(calculateCartPrice(2,3,4,5,8));

/* If we don't use the rest operator, then only the first argument will get printed*/

const user = {
    userName: "Krishnendu",
    age: 20
}
function handleOnject(anyObject){
    // console.log(`Username is ${anyObject.userName} and age is ${anyObject.age}`);
}
handleOnject(user)  //here we definitely call the object


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));