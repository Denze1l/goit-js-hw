"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let toBuy = prompt("Сколько дронов желаете купить?");
let totalPrice;
let balance
let message;

if (toBuy === null) {
  message = "Отменено пользователем!";
} else {
  if (Number.isNaN(Number(toBuy))) {
    message = "не число";
  } else {
    if (Number(toBuy) * pricePerDroid > credits) {
      message = "'Недостаточно средств на счету!'";
    } else {
      totalPrice = Number(toBuy) * pricePerDroid;
    balance = credits - totalPrice;
      message = `Вы купили ${toBuy} дроидов, на счету осталось ${balance} кредитов.`;
    }
  }
}

alert(message);
