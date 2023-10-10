// for of 

// ["", "", ""]
//[{}, {}, {}]

const arr= [1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello world"
let i=0
for (const greet of greetings) {
    // console.log(`The character in array no ${i} is ${greet}`);
    i++;
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('UAE', "Dubai")
map.set('Fr', "France")
map.set('IN', "India")  //even if i add something more than once, it won't be stored again, since Map as a object only access unique values

// console.log(map);

for (const [printing_map, value] of map) {
    console.log(printing_map, ':', value);
    
}


//Applying forof function in object

const myObj = {
    'game1': 'NFS',
    'game2' : 'Kgf'
}
// for (const [key, value] of myObj) {
    // console.log(key, ":", value);
    
// }
/* Hence can be concluded that maps are iterable*/