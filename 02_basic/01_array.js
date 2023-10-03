// Arrays
//Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [0,1,2,3,4,5]
const arr2= ["spiderman","iron man","Hulk","venom"]

// console.log(myArr[1]);

// console.log((arr2[2]));
// console.log((arr2[4]));

//Array method

// myArr.push(6)   //push() is used to add something in an existing array
// myArr.push(34)  
// myArr.push(11,50)  
// console.log(myArr);

// myArr.pop()  // pop() removes the last element of any array
// console.log(myArr);

// console.log(myArr.includes(9));  // to check in that element in present inside the array

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // So what join() does is, it joins and convert an array to string

// slice, splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3) 
console.log(myn1);  

console.log("B",myArr);
const myn2 = myArr.splice(1,3) 
console.log(myn2);  

console.log(myArr);  //After performing the splice() funtn, the original array is changed. It prints the elements of the array till the range but changing the original array

