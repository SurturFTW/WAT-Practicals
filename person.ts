class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

let person1: Person = new Person("Harry", 25);
console.log(person1.introduce());
    