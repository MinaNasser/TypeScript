"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boy = exports.Student = void 0;
const person_1 = require("./person");
class Student extends person_1.Person {
    // public Gradess:(number|string)[]
    constructor(name, age, phone, ismale, level) {
        super(name, age, phone, ismale);
        this.Level = level;
    }
    display() {
        return `${super.display()} and his lavel ${this.Level} `;
    }
}
exports.Student = Student;
class boy extends Student {
}
exports.boy = boy;
