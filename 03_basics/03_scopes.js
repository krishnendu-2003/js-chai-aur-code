let a= 10
const b=20
var c= 30


// console.log(a);
// console.log(b);
// console.log(c);


//Nested scope
function one(){
    const userName = "Krishnendu"

    function two(){
        const website = "github.com"
        console.log(userName);

    }
    // console.log(website);
    two()
}
// one()

if(true){
    const userName2 = "Krishnendu"
    if(userName2 === "Krishnendu"){
        const website2 = " Youtube"
        console.log(userName2 + website2);
    }
    // console.log(website2);  //error
}
// console.log(userName2);  //error


//+++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++
