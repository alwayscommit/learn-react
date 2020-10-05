//ES6, Babel Syntax
class Human {
    gender = 'male';

    printMyGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name='Aakash';
    gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printMyGender();
