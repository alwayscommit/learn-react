/*
1. spread operator is used to split up array elements OR object properties

const newArray = [...oldArray,1,2]
const newObj = {...oldObject, newProp: 3}

example
const numbers = [1, 2, 3];
const newNumbers = [numbers, 4];

console.log(newNumbers);

with [1, 2, 3, 4]
without [[1, 2, 3], 4]

const person = {
  name: 'Aakash'
}

const newPerson = {
  ...person,
  age:27
}

console.log(newPerson);

2. rest operator used to merge a list of function arguments into an array

function sortArgs(...args){
    return args.sort();
}

const filter = (...args) => {
  return args.filter(el => el===1);
}

console.log(filter(1,2,3));

 */
