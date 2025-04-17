class Person {
    public Name: string;
    public Phone: string;
    private Age: number;
    protected IsMale: boolean;
    Display(): void {
        console.log(this.Name);
        console.log(this.Phone);
        console.log(this.Age);
        console.log(this.IsMale);
    }
    
}