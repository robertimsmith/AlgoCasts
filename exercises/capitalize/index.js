// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
    var newStr = str[0].toUpperCase();
 
     for (char = 1; char < str.length; char++){
         if(str[char-1] === ' '){
             newStr += str[char].toUpperCase(); 
         } else {
             newStr += str[char];
         }
     }
 
     return newStr;
 }
module.exports = capitalize;

console.log(capitalize('a short sentence'));

/*
function capitalize(str) {
    const words = [];

    for(let word of str.split(' ')){
       words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}
*/