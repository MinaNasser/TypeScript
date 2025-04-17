"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Student_1 = require("./Student");
let person = new Person_1.Person("Ali", "01012345678", 21, true);
person.Display();
let student = new Student_1.Student("Ali", "01012345678", 21, true, 1000000001);
student.DisplayStudent();
