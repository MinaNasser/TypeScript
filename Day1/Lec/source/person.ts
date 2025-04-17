export class Person{
    static count:number = 0;
    // data members
    private Age:number;
    public Name:string;
    public Phone:string;
    protected IsMale:boolean;
    //methods
    constructor();
    constructor(name:string, age:number,phone:string,ismale:boolean);

    constructor(name?:string, age?:number,phone?:string,ismale?:boolean){
        Person.count ++;
        this.Age = age==undefined?1:age;
        this.IsMale = ismale ==undefined ?true:ismale;
        this.Name = name ==undefined ?"unknown":name ;
        this.Phone = phone ==undefined ?"":phone;
    }

    public  display():string{
        return `this person name is ${this.Name}`;
    }
    
    public set SetAge(v : number) {
        this.Age = v;
    }
    
    
    public get GetAge() : number {
        return this.Age;
    }
    
    
    
}

// let p :Person = new Person("ali",2,"01111111",true)
// console.log(p.GetAge)
// console.log(p.display())

