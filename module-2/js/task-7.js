"use strict";

let input;
const numbers = [];
let total = 0;





  do  {
      input = prompt("write some numbers");
      if (!Number.isNaN(Number(input))) {
        numbers.push(Number(input))
        // console.log(numbers);
      } else {
        alert("not a number");
      }
      
    } while(input !== null);

    for( let variable of numbers){
      total+=variable
    }
    console.log(total)


    
    
    // for (let i = 0; i < numbers.length; i++){
    //   total+=numbers[i];
    // }

     
    // const totalSumm =function (input){
    //   total+=
    // }
    
    // console.log(n)

// while (input !== null) {
//   input = prompt("write some numbers");
//   // let notInpat= isNaN(input);
//   // console.log(notInpat)
//   if (input !== true) {
//     total += Number(input);
//     break
//   } else {
//     alert = "not a number";
//   }
//   // if(prompt===numbers){
//   // }
// }
// alert(total);

// let massNum = input.split();
// numbers.push("massNum");
// console.log(numbers);
// console.log(number(prompt));
