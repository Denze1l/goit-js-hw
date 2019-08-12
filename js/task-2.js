"use strict";

const total = 100;
const ordered = 50;
let answer;

if (total < ordered) {
  answer = '"На складе недостаточно товаров!"';
  console.log(`"На складе недостаточно твоаров!"`);
} else {
  answer = `"Заказ оформлен, с вами свяжется менеджер"`;
  console.log(`"Заказ оформлен, с вами свяжется менеджер"`);
}
