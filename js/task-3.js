"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
const inputPass = prompt(`Please, enter Admin Pasword`);
let message;

if (ADMIN_PASSWORD === inputPass) {
  message = "Добро пожаловать!";
} else if (inputPass === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
