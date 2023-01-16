// sort the array numerically. Make a copy of array to preserve original
const array = [10, 2, 5, 1, 9];
const newArr = array.map(x => x);
newArr.sort(function(a, b) {
  return a - b;
});

console.log(array);
console.log(newArr);

// Sorting function, that sorts the array first by the name ascending alphabetically, and then by descending age.
const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];

students.sort(function(a, b) {
  if (a.name < b.name) {
    return -1;
  } if (a.name > b.name) {
    return 1;
  } if (a.name === b.name) {
    return b.age - a.age;
  }
});

//console.log(students);
