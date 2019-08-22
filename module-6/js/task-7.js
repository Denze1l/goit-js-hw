'use strict';

import users from './users.js';

const calculateTotalBalance = users => users.reduce((arc, user)=> user=arc+ user.balance,
0)



  console.log(calculateTotalBalance(users)); // 20916