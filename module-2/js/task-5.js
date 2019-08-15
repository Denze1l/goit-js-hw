"use strict";

const formatString = function(string) {
  let result;
  let cutString = string.slice(0, 41);
  const elementComa = "...";
  let together = cutString + elementComa;
  if (string.length < 40) {
    result = string;
  } else {
    result = together;
  }
  return result;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
