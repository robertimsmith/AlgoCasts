// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB){
    if (cleanString(stringA) === cleanString(stringB)){
        return true;
    }
    return false;
}

function cleanString(string){
    return string.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
}

/*
function constructMap(string){
    let charMap = {};
    for(let char of string){
        if(!charMap[char]){
            charMap[char] = 1;          
        } else {
            charMap[char]++;
        }
    }
    return charMap;
}

function anagrams(stringA, stringB) {

    stringA.replace(/[^\w]/g,"").toLowerCase();
    stringB.replace(/[^\w]/g,"").toLowerCase();

    let charMapA = constructMap(stringA);
    let charMapB = constructMap(stringB);
 
    //console.log(charMapA, " ", charMapB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length){
        return false;
    }

    for (let char in charMapA){
        if (charMapA[char] !== charMapB[char]){
            return false;
        }
    }

    return true;
}
*/
module.exports = anagrams;

console.log(anagrams("asdasda", "asdadaff"));
console.log(anagrams("ada", "aad"));
