"use strict";

const checkForSpam = function(string) {
  let massString = string.toLowerCase();
  
//   console.log(massString.includes(words))
//   console.log(massString.includes("spam", "sale"));
  if (massString.includes("spam") || massString.includes("sale")) {
      console.log(true)
  } else {
    console.log(false)
  }
  return massString;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?"));
