const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const biggestFollower = (data) => {
  let name = '';
  let follows = 0;
  for (let obj in data) {
    if (data[obj].follows.length > follows) {
      follows = data[obj].follows.length;
      name = data[obj].name;
    }
  }
  return name;
};

const mostPopular = (data) => {
  let result = {};
  for (let propKey in data) {
    result[propKey] = 0;
  }
  for (let obj in data) {
    for (let follow of data[obj].follows) {
      result[follow] += 1;
    }
  }
//console.log(result);
  let counter = 0;
  let name = '';
  for (let key in result) {
    if (result[key] > counter) {
      counter = result[key];
      name =data[key].name;
    }
  }
  return name;
};

// console.log(biggestFollower(data));
console.log(mostPopular(data));