// // When a customer add value in his cart at that time function is used like this----
// function calculatePrice(number1,number2) {
//     return number1, number2
    
// }
// console.log(calculatePrice(200,400)); 

// // but if a customer add so much value in his cart at that time---- (... this printed all the values added by the customer)

// function calculatePrice(...number1) {
//     return number1
    
// }
// console.log(calculatePrice(200,400,500,45555));


// // to pass the object in the function--------

// const user = {
//     userName : "Arnab",
//     price : 199

// }
// function handleObject(anyObject){
//     console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)

// }
// handleObject(user)

// Another Process---- we can also pass the object without creating.
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)

}
handleObject({
    userName : "Arnab",
    price : "199"
})

//to pass the arrayin the function--------

const myArray = [100, 200, 400]

function returnSecondValue(getArray) {
    return getArray[2]
}
console.log(returnSecondValue(myArray))