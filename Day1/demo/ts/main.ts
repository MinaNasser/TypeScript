import { Person } from "./Person";
import { Student } from "./Student";
let person = new Person("Ali", "01012345678", 21, true);
person.Display();
let student = new Student("Ali", "01012345678", 21, true, 1000000001);
student.DisplayStudent();