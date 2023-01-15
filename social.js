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
      name = data[key].name;
    }
  }
  return name;
};

const printAll = (data) => {
  let result = {};

  for (let propKey in data) {
    let userName = data[propKey].name;

    result[userName] = {
      follows: [],
      followedBy: []
    };

    for (let follows of data[propKey].follows) {
      result[userName].follows.push(data[follows].name);
    }
  }

  for (let propKey in data) {
    let userName = data[propKey].name;
    for (let follows of data[propKey].follows) {
      let followerName = data[follows].name;
      result[followerName].followedBy.push(userName);
    }
  }


  return result;
};

const unrequitedFollowers = (data) => {
  let result = [];
  for (let userKey in data) {
    let user = data[userKey];
    //console.log(data[userKey].name);
    for (let follow of user.follows) {
      //console.log(data[follow].follows.includes(userKey));

      if (!data[follow].follows.includes(userKey)) {
        result.push(user.name);
        break;
      }
    }
  }
  return result;
};

// console.log(biggestFollower(data));
//console.log(mostPopular(data));
//console.log(printAll(data));
console.log(unrequitedFollowers(data));
