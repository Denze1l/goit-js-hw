// "use strict";

let input;
let total = 0;

while (input !== null) {
  input = prompt("enter any number");
  let inputNumber = Number(input);
  total += inputNumber;
}

alert(total);

