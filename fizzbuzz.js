// FizzBuzz
// Write a function that takes in an argument (num) and counts from 1 to num. 
// Print `Fizz` if divisible by 3
// Print `Buzz` if divisible by 5
// Print `FizzBuzz` if divisible by both 5 and 3 
// Print the number if none of the above conditions are met

const fizzBuzz = function(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }

};

fizzBuzz(16);