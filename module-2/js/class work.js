// // const arr = ["x"];

// // for (let i = 0; i < 10; i++) {
// //   arr.push(i);
// // }

// // console.log(arr);

// // const fn = function(max = 1, elem) {
// //   const arr = [];
// //   for (let i = 0; i < max; i++) {
// //     arr.push(elem);
// //   }

// //   return arr;
// // };

// // const result = fn(60, "work");
// // console.log(result);

// // const word = "123";
// // const newWord = word
// //   .split("")
// //   .reverse()
// //   .join("");

// // console.log('new', newWord)

// const palindrome = word =>
//     word.split('').reverse().join('')=== word ? 'polina':'ne polina';
//     const result = palindrome('oko');
//     console.log(result);

const skillLearn = prompt("enter skill ... ");
const hours = prompt("enter hours ...");

const showSkills = (skil = "javascipt", time) => {
  // console.log(skill);
  // console.log(time);
  const todo = {
    skill: skill,
    time: time
  };

  console.log(todo);
};

showSkills(skillLearn, hours);
