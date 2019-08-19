"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
  changeHobby(newHobby) {
    this.hobby = newHobby;
  },
  changePremium(myPremium) {
    this.premium = myPremium;
  }
};

const mood = "mood";
user[mood] = "happy";
user.changePremium(false);

// user.mood('happy')
user.changeHobby("Javascrypt");

console.log(user);

const keys = Object.keys(user);
console.log(keys);

for (const key of keys){
    console.log(key, user[key] )
}
// const key = "premium";

// console.log(user[key]);
