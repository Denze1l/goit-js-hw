'use strict';

// let total=0; 





// const countProps = function({})

// const keys = ;
// let key = Object.countProps().length
const countProps =(obj)=>{
 let key = Object.keys(obj).length;
 
return key;
}

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));



// const countProps = {
//     sdsd:23,
//     asd:212,
// }

//  const keys = Object.keys();
//     let key = keys.length
//  console.log(key)

//  for( const key of keys){
//         console.log(countProps[key])
//         const total+ = countProps[keys]
//     }



