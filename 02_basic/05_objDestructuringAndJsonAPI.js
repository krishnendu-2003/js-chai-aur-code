const course = {
    coursename: "Js hindi",
    price: "999",
    courseInstructor: "Hitesh sir"
}

// console.log(course.courseInstructor) //this is ok but below is >>>>>>>

const {courseInstructor} = course
console.log(courseInstructor);


// INITIAL STARING OF APIs
// json is nothing but object without name (but exactly object)
// {
//     name: "Krishnendu"
//     courseName: "CSE AI ML",
//     Year: "2nd Year"

// }