"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age, phone, ismale) {
        Person.count++;
        this.Age = age == undefined ? 1 : age;
        this.IsMale = ismale == undefined ? true : ismale;
        this.Name = name == undefined ? "unknown" : name;
        this.Phone = phone == undefined ? "" : phone;
    }
    display() {
        return `this person name is ${this.Name}`;
    }
    set SetAge(v) {
        this.Age = v;
    }
    get GetAge() {
        return this.Age;
    }
}
exports.Person = Person;
Person.count = 0;
// let p :Person = new Person("ali",2,"01111111",true)
// console.log(p.GetAge)
// console.log(p.display())
