// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         console.log("Async Task is Completed");
//         resolve()
//     },1000)
// })
// promiseOne.then(function() {
//     console.log("promise consumed");
// })


// new Promise(function (resolve, reject) {
// setTimeout(function (){
//     console.log("Async task 2");
//     resolve()
// })    
// }).then(function () {
//     console.log("Async 2 resolve");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName : "Arnab", email : "arnav.dutta1996@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     let error = false  // we can change the value to true or false 
//     if (!error) {
//         resolve({userName : "Arnab", email : "arnav.dutta1996@gmail.com"})
//     } else{
//         reject("ERROR : SOMETHING WENT WRONG")
//     }

// },1000)

// promiseFour.then((User)=>{
//     console.log(User);
//     return User.userName

// }).then((userName) =>{
//     console.log(userName);

// }).catch(function(error){
//     console.log(error);

// }).finally(()=> {
//     console.log("The promise is either resolved or rejected")
// })


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive()


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E :" , error);
    }
}
getAllUsers()



