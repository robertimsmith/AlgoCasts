// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var characterObject = {};

    for (let character of str){
        
        if(!characterObject[character]){
            characterObject[character] = 1;
            //console.log('Creating ' + character);
        } else {
            characterObject[character]++;
            //console.log('Adding ' + character);
        }
    }

    var maximum = 0;
    var maximumChar = '';
    for (let value in characterObject){
        if (characterObject[value] > maximum){
            maximum = characterObject[value];
            maximumChar = value;
        }
    }
    console.log('Maximum is letter ' + maximumChar + ' with a total of  ' + maximum);
    
console.log(characterObject);
return maximumChar;

}  

console.log(maxChar("abcccccdddd"));
module.exports = maxChar;

