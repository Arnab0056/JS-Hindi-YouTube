// // for (let i = 0; i < 10; i++) { 
// //     console.log(i);
// // }
// for (let i = 0; i <= 10; i++) { 
//      const element = i;
//      if (element== 5) {
//         console.log("5 is the best number");
//      }
//      console.log(element);
//      }

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop value ${j} and outer loop value ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j );
       
//     }
    
// }

// let myArray = ["IronMan", "SuperMan", "SpiderMan"]

// console.log(myArray.length)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// for (let i = 0; i < 20; i++) {
//     if (i == 5 ) {
//         console.log('Detected 5');
//         break;
//     };
//     console.log(`Value of i is ${i}`);
// }

for (let i = 0; i <= 20; i++) {
    if (i == 5 ) {
        console.log('Detected 5');
        continue;
    };
    console.log(`Value of i is ${i}`);
}