'use strict'

const findLongestWord = function(string){
    let stringWords= string.split(" ");
    console.log(stringWords)
    let MaxWord = stringWords[0];
    for (let i = 1; i < stringWords.length; i+=1) {
        if(MaxWord.length<stringWords[i].length){
            MaxWord = stringWords[i]
        } 
    }
    return MaxWord;
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'