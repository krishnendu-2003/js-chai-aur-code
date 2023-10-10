const myObj = {
    js: 'javascript ',
    cpp: 'C++',
    rb: 'ruby'
}

for (const key in myObj) {
    // console.log(`Printing the keys ${key} for the following object ${myObj[key]}`);
}


const programming = ["js", "rb", "py", "cpp", "css"]
for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('UAE', "Dubai")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(map[key]);
}

//Hence, MAP() only accepts forof loop, whereas objects, arrays can be accessed using forin loop