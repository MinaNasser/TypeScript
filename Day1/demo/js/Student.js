import { Person } from "./Person";
export class Student extends Person {
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
