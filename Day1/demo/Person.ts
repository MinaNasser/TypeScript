class Person {
    public Name: string;
    public Phone: string;
    private Age: number;
    protected IsMale: boolean;
    publicDisplay(): void {
        console.log(this.Name);
        console.log(this.Phone);
        console.log(this.Age);
        console.log(this.IsMale);
    }
    public constructor(name: string, phone: string, age: number, isMale: boolean) {
        this.Name = name;
        this.Phone = phone;
        this.Age = age;
        this.IsMale = isMale;
    }

}


let p = new Person('zhangsan', '123456789', 18, true);
p.publicDisplay();