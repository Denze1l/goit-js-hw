"use strict";

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

users.shift();
console.log(users);

users.pop();
console.log(users);

users.unshift("Lux");
console.log(users);

users.push("Jay", "Kiwi");
console.log(users);

const newUsers = users.slice();
console.log(newUsers);

const userToDelete = 'Ajax';

const userToDeleteId = users.indexOf(userToDelete);

newUsers.splice(2, 1)
console.log(newUsers);


const userToInsert = 'Kong';
const insertBefore = 'Jay';

const insertBeforetId = users.indexOf(insertBefore)
newUsers.splice(insertBeforetId-1, 0, userToInsert)
console.log(newUsers)
