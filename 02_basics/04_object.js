// //singleton object
// // const tinderUser = new Object()     // one process to declare object. This is singleton object
// // console.log(tinderUser);

// // Non singleton object
// const tinderUSer = {}
// tinderUSer.name = "Arnab"
// tinderUSer.id = "123ARB"
// tinderUSer.isLoggedIn = false 
// // console.log(tinderUSer);

// const regularUser = {
//     email : "arnav.dutta19988@gmail.com",
//     fullName : {
//         userFullName : {
//             firstName : "Arnab",
//             lastName : "Dutta"
//         }
//     }
// }
// // console.log(regularUser.fullName.userFullName.lastName)
// // regularUser.fullName.userFullName.firstName = "Rana"
// // console.log(regularUser.fullName.userFullName.lastName)
// // console.log(regularUser.fullName.userFullName.firstName)


// // Addition of two OBJECT-
// const obj1 = { "a":1, "b":2, "c":3}
// const obj2 = {"d":4, "e":5, "f":6}

// // process 1 
// // const obj3 = {obj1, obj2}
// // console.log(obj3)


// // process 2  ***
// // const obj3 = Object.assign({},obj1, obj2);
// // console.log(obj3)

// // process 3 ******     (This process is very easy)
// const obj3 = {...obj1,...obj2}
// // console.log(obj3)
// // console.log(tinderUSer)
// // console.log(Object.keys(tinderUSer));
// // console.log(Object.values(tinderUSer))
// // console.log(tinderUSer.hasOwnProperty("isLoggedIn"));   // to cheque wheather this property incudes or not.
// // console.log(tinderUSer.hasOwnProperty("ISLOGGES"))

// DESTRUCTURING OF ARRAY

const course = {
    courseName : "JS in Hindi",
    coursePrice : "999",
    courseInstructure : "hitesh"

}
// console.log(course.courseInstructure)

// another method to acess value (DESTRUCTURE OF ARRAY )
const{courseInstructure:Instructure} = course
console.log(Instructure)


