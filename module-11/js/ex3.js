//  console.log(targetDate- Date.now());

const refs = {
  days: document.querySelector(`span[data-value="days"]`),
  hours: document.querySelector(`span[data-value="hours"]`),
  mins: document.querySelector(`span[data-value="mins"]`),
  secs: document.querySelector(`span[data-value="secs"]`),
  select: document.querySelector(`#timer-1`)
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const targetDate = new Date("8, 27, 2019");
    this.timerId = setInterval(() => {
      const date = Date.now();
      const timing = this.targetDate - date;
      console.log(timing);
      let sec = Math.floor((timing % (1000 * 60)) / 1000);
      console.log(`sec: ${sec}`);
      let min = Math.floor((timing % (1000 * 60 * 60)) / (1000 * 60));
      console.log(`min: ${min}`);
      let hour = Math.floor(
        (timing % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      console.log(`hour: ${hour}`);
      let day = Math.floor(timing / (1000 * 60 * 60 * 24));
      console.log(`day: ${day}`);
      refs.days.textContent = day;
      refs.hours.textContent = hour;
      refs.days.textContent = day;
      refs.secs.textContent = sec;
    }, 1000);
  }

  // refs.days.textContent=``
}
// changeData.start();

const pupa = new CountdownTimer("#timer-1", new Date("Sep 27, 2019"));
console.log(pupa);
pupa.start();

//   let result= "CountdownTimer: "
//   result+ =date.getDate();
//   result+= date.getHours();
//   result+ =date.getMinutes();
//   result+ =date.getSeconds();

// console.log( date.getSeconds());

// const options = {
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   seconds: "2-digit"
// };

// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// const dayLeft = date.toString('Uk-uk', options);
// console.log(dayLeft)
