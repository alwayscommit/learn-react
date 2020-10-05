const number = 1;
let num2 = number;

console.log(number);
console.log(num2);

num2 = 3;

console.log(number);
console.log(num2);

//numbers, strings, booleans are primitive types, they copy value
//objects are reference types

let person = {
    name: 'Aakash'
};

const thirdPerson = {
    ...person
}

const secondPerson = person;

person.name = 'Max';
console.log(secondPerson);

//objects are stored in memory. pointers are pointing to the same object
//same for arrays

//actual copy
console.log(thirdPerson);
