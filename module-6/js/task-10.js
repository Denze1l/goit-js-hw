"use strict";

import users from "./users.js";

const getSortedUniqueSkills = users => {
  const mass = users
    .reduce((arc, user) => {
      arc.push(...user.friends);
      return arc;
    }, [])
    .filter((elem, index, arr) => arr.indexOf(elem) === index)
    .sort();
  return mass;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
//
