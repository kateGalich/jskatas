//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array"


const sevenBoom = function(arr) {
  arr.forEach(e => {
    if (e === 7) {
      
      return "Boom";
    }
  });

  return "there is no 7 in the array";

};


console.log( sevenBoom([1, 2, 3, 4, 5, 6, 7]));
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86]);