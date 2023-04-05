//Create a function that returns the frequency distribution of an array. 
//This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

const getFrequencies = function(arr) {
  let obj = {};
  arr.forEach(e => {
    if (!obj[e]) {
      obj[e] = 1;
    } else {
      obj[e]++;
    }
  });

  return obj;
};


console.log(getFrequencies(["A", "B", "A", "A", "A"]));

console.log(getFrequencies([1, 2, 3, 3, 2]));

console.log(getFrequencies([true, false, true, false, false]));

console.log(getFrequencies([]));