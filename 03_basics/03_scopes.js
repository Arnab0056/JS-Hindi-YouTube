// // NESTED SCOPES

function one(){
    const userName = "Arnab"
    

    function two() {
        const website = "YOU-TUBE"
        console.log(userName)
        }
        // console.log(website);
        two();
}

one();

//NESTED SCOPES in IF AND ELSE


// if(true){
//     const userName = "Arnab Dutta"
//     if (userName==="Arnab Dutta") {
//         const website = " YouTube"
//         console.log(userName + website);
        
    // }
    // console.log(website);
    
// }
// console.log(userName);





// +++++++++++INTERESTING++++++++++


console.log(addOne(5));
function addOne(numb) {
    return numb+1
}




// const addTwo = function(numb){
//     return numb + 2
// }
// console.log(addTwo(10));


////////+++++++++++++++++++++++++




console.log(addTwo(10))
const addTwo = function(numb){
    return numb + 2
}
