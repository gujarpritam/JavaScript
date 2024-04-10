
class Person {
    name
    constructor(n) {
        this.name = n;
    }
}

let person1 = new Person("pritam");

console.log(person1.name);

class Child extends Person {
}

const child1 = new Child("pritam1");
console.log(child1.name);