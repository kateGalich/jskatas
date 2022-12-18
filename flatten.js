function flatten(arr) {
  let result = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      
      for (let i of element) {
        result.push(i);
      }
    } else {
      result.push(element);
    }

  }

  return result;
}


console.log(flatten([1, 2, [3, 'sun', 'moon', ['day', 'night']], 4, 5, 6]));
