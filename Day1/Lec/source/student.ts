import { IBase, IProduct } from "./interface";
import { Person } from "./person";

export class Student extends Person
{
    public Level:string;

    public Grades:Array<number|string>
    // public Gradess:(number|string)[]

    
    constructor(name:string, age:number,phone:string,ismale:boolean,level:string){
        super(name,age, phone,ismale);
        this.Level = level;
    }

    public display(): string {
       return `${super.display()} and his lavel ${this.Level} ` 
    }

}


export class boy extends Student{

}


