"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(name, phone, age, isMale, studentId) {
        super(name, phone, age, isMale);
        this._studentId = studentId;
    }
    set StudentId(studentId) {
        this._studentId = studentId;
    }
    get StudentId() {
        return this._studentId;
    }
    DisplayStudent() {
        super.Display();
        console.log(this._studentId);
        console.log("I am a student.");
    }
}
exports.Student = Student;
