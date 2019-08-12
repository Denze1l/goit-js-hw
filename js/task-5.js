'use strict'

const China =100;
const Chily =250;
const Australia=170;
const India =80;
const Jamaica =120;
let country= prompt("entry country to deliver");
let message;

if (country){
    switch(country.toLowerCase()){
        case "china":
        message = `Доставка в ${country} будет стоить ${China} кредитов`;
        break;
        case "chily":
        message = `Доставка в ${country} будет стоить ${Chily} кредитов`;
        break;
        case "australia":
        message = `Доставка в ${country} будет стоить ${Australia} кредитов`;
        break;
        case "india":
        message = `Доставка в ${country} будет стоить ${India} кредитов`;
        break;
        case "jamaica":
        message = `Доставка в ${country} будет стоить ${Jamaica} кредитов`;
        break;
        default:
        message='В вашей стране доставка не доступна';
    }
}
alert(message);