const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

// Spread Operator
const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// console.log(hobbies);
// const copiedArray = hobbies.slice();
// Spread Operator
const copiedArray = [...hobbies];
console.log(copiedArray);

// rest operator
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));