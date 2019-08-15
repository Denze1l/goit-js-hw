'use strict'


let logItems = function(array) {


    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        console.log(`${j+1} - ${element}`);
        
    }

    // for(let i=0, i<array.length, i++) {
    //     console.log(`${i+1} - ${array[i]}`);
    // }

}


logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

