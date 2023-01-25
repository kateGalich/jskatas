// minMaxSum
// write a function that given 5 numbers in an array will return the lowest 
// and the highest possible values when summing 4 out of the 5 numbers.


let minMax = function(arr) {
  let result = [];
  let newArr = arr.sort(function(a, b) {
    return a - b;
  });

  console.log(newArr);
  return result;
};

minMax([5, 2, 3, 4, 1]);
