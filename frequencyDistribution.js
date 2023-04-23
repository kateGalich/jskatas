let getFrequencies = function(arr) {
  let result = {};
  for (let x of arr) {
    if (!result[x]) {
      result[x] = 0;
    }
    result[x] += 1;
  }
  console.log(result);
  return result;

};

getFrequencies(["A", "B", "A", "A", "A"]);

getFrequencies([1, 2, 3, 3, 2]);

getFrequencies([true, false, true, false, false]);

getFrequencies([]);