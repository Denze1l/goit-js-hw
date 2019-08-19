"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = (products, productName) => {
  let value;
  // productName=[name]
  for (const techniks of products){
    // if( productName in techniks)
    if (techniks.name === productName ) {
      value= techniks.price * techniks.quantity;
    }
  }
  return value;

  // technik[name]=technik[price]*technik[quantity]
  // value.push(technik[productName]);
};

// console.log(calculateTotalPrice(products))

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид"));
