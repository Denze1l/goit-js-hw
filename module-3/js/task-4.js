'use strict';
// const countTotalSalary={
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   };



const countTotalSalary =(salaries)=>{
  const howMuch=Object.values(salaries);
  let total = 0;
  for (let salary of howMuch) {
      total+=salary;
  }
  return total
}

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400




//   const countTotalSalary = function(ourSalaries){

//   const salaries = Object.salaries(ourSalaries);

//   for (let salary = 0; salary < salaries; salary++) {
//       const total += salary;
      
//   }

//   for(let salary of salaries){
//       let total+=salary;
//       console.log(total)
//   }


// }

// console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   );