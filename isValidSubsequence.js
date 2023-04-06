/** 
isValidSubsequence
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.
For instance, the numbers  [1, 3, 4  form a subsequence of the array [1, 2, 3, 4] and so do the numbers [2, 4].
*Sample Input*
array = [5, 1, 22, 25, 6, -1, 8, 10]`
sequence = [1, 6, -1, 10]
result: 
true
*/

let isValidSubsequence = function(arr, sequence) {
  let index = [];
  sequence.forEach(e => {
    if (arr.includes(e)) {
      index.push(arr.indexOf(e));
    } else {
      return false;
    }
  });

  let result = false;

  let current = 0;
  for (let i of index) {
    if (i > current) {
      current = i;
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};


console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[-1, 6, 1, 10] ))