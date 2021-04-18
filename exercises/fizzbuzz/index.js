// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for(i = 1; i <= n; i++){
        answer = '';
        if (!(i % 3)){
            answer += 'fizz';
        }
        if (!(i % 5)){
            answer += 'buzz';
        }
        if (answer === ''){
            answer = i;
        }   
        console.log(answer);
        }
}


fizzBuzz(20);
module.exports = fizzBuzz;
