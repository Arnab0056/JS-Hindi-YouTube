//OBJECT
 const mySym = Symbol("mykey1")

const JSUser = {
    Name : "Arnab",
    "fullName" : "Arnab Dutta",
    [mySym] : "mykey1",
    age : 27,
    location : "Kolkata",
    email : "arnav.gmail.com",
    isLoggedIn : false,
    LastLoggedInDays : ["Monday", "Saturday"]
}
// to acess value of object
//  console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["fullName"]);
// console.log(JSUser[mySym]);
JSUser.email = "arnav.dutta1996@gmail.com"
// console.log(JSUser);
// Object.freeze(JSUser);
JSUser.email = "arnav.sharmi"
console.log(JSUser["email"])


JSUser.greeting = function(){
    console.log("Hello world");
}
JSUser.greetingTwo = function(){
    console.log(`Hello world,${this.Name}`);
}
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());