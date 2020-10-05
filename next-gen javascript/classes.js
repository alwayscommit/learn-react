class Person{
    name = 'Aakash';
    call = () => {
        return name;
    }
}
/*
properies and methods
classes as constructor functions -> new Person();
inheritance -> class Person extends Master
 */

class Human {
    constructor(){
        this.gender = 'male';
    }

    printMyGender(){
        console.log(this.gender);
    }
}

/*
Must call super constructor in derived class before accessing 'this'
or returning from derived constructor*/

class Person extends Human {
    constructor(){
        super();
        this.name='Aakash';
    }

    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printMyGender();
