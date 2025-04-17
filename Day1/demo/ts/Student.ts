import { Person } from "./Person";

export class Student extends Person {
    private _studentId: number;
    constructor(name: string, phone: string, age: number, isMale: boolean, studentId: number) {
        super(name, phone, age, isMale);
        this._studentId = studentId;
    }
    public set StudentId(studentId: number) {
        this._studentId = studentId;
    }
    public get StudentId() {
        return this._studentId;
    }
    public DisplayStudent(): void {
        super.Display();
        console.log(this._studentId);
        console.log("I am a student.");
    }
}

