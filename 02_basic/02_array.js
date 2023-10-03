const marvel= ["thor", "Iron man", "Spiderman"]
const dc= ["Flash", "Arrow", "Superman"]

// marvel.push(dc)
// console.log(marvel);  

// console.log(marvel[3][1]);

// marvel.concat(dc)
// console.log(marvel);

// dc.concat(marvel)  // to join two arrays together
// console.log(dc);

// const all_heros= [...marvel, ...dc]  //it also concatinates the two arrays
// console.log(all_heros);

// const another_array = [1,2,3, [4,5,6],7,8,[6,7,[4,5]]]
// const real_another_array = another_array.flat()

// console.log(real_another_array.flat());

// console.log(another_array.flat().flat()); 
//THE ABOVE LINE CAN ALSO BE WRITTEN AS 
// console.log(another_array.flat(Infinity));

// console.log(Array) 
// console.log((Array.isArray("Krishnendu")));   //The isArray() function is a built-in JavaScript function used to determine whether a given value is an array

// console.log(Array.from("Krishnendu"));  //it converts any given object into an array element


let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1,score2,score3));  // of() Returns a new array from a set of elements