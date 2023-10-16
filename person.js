var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old.");
    };
    return Person;
}());
var person1 = new Person("Harry", 25);
console.log(person1.introduce());
