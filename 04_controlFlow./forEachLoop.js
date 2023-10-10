const coding = ["js", "ruby", "cpp", "html", "css", "c#"]

coding.forEach( function (item) {
    // console.log(item);
})

coding.forEach( (val) => {
    // console.log(val);
})


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item_name, index, arr) => {
    // console.log(item_name, index, arr);
})


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }

]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})