// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
function reverse(str){
    debugger;
    return str.split('').reduce((newStr, character) => character + newStr, '');
}
*/

function reverse(str){
    let newStr = '';
    for (let character of str){
        newStr = character + newStr;
    }
    return newStr;
}


console.log(reverse('abcdef'));

/*
function reverse(str) {
    var newStr = '';

    for (i = 0; i < str.length; i++) {
        newStr = str.charAt(i) + newStr;
    }
    return newStr;
}
*/


/*
function reverse(str) {
    return str
    .split('')
    .reverse().join('');
}
*/

/*
function reverse(str) {
    var newStr = '';

    for (i = str.length; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
};
*/

module.exports = reverse;
