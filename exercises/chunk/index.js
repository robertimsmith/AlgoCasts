// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
    const finalArray = [];   
    for (i = 0; i < array.length; i = i + size){      
        finalArray.push(array.slice(i,i+size));
    }
    
    return finalArray;
}

module.exports = chunk;

const testArray = [1, 2, 3, 4, 5];
const testSize = 2;

console.log("Response = " + chunk(testArray, testSize));

