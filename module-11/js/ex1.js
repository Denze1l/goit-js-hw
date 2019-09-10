const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector(`button[data-action="start"]`),
  stop: document.querySelector(`button[data-action="stop"]`),
  body: document.querySelector("body")
};

const timerId = function() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
};
 let right;

refs.start.addEventListener("click", () => {
  right=setInterval(timerId, 1000);
  refs.start.setAttribute("disabled", "disabled");
});

refs.stop.addEventListener("click", () => {
  clearInterval(right);
  refs.start.removeAttribute("disabled", "disabled");
});
//   color= colors.map(elem=>elem.randomIntegerFromInterval)
