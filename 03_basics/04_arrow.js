// const user = {
//     userName : "Arnab",
//     price : 999,

//     welcomeMessage : function () {
//         console.log(`${this.userName} , welcome to website`);
        
//     }
// }
// user.welcomeMessage()
// console.log(this);

// const chai = function (){
//     let username = "Arnab"
//     console.log(this.username);
// }
// chai()
//ARROW FUNCTION----
const chai = () => {
    let username = "Arnab"
    console.log(this.username);
}
chai()

// pure arrow function
 const addTwo = (numb1, numb2) => {
    return numb1 + numb2
}
console.log(addTwo(5, 7));

// Another way to execute arrowFunction----
const addThreeNum = (numb1, numb2) => numb1 + numb2
console.log(addThreeNum(14,15));

// Another way to execute arrowFUnction---{ object }
const addFourNum = (numb1, numb2) => ({USERNAME: "Arnab Dutta"})
console.log(addFourNum(14,16));

// Another way to execute arrowFUnction---{  }