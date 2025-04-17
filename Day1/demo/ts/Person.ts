export class Person {
    private _name: string;
    private _phone: string;
    private _age: number;
    private _isMale: boolean;

    public constructor(name: string, phone: string, age: number, isMale: boolean) {
        this._name = name;
        this._phone = phone;
        this._age = age;
        this._isMale = isMale;
    }

    public Display(): void {
        console.log(this._name);
        console.log(this._phone);
        console.log(this._age);
        console.log(this._isMale);
    }

    // getter and setter for Age
    public set Age(age: number) {
        if (age > 0) {
            this._age = age;
        }
    }
    public get Age() {
        return this._age;
    }

    public set Name(name: string) {
        this._name = name;
    }
    public get Name() {
        return this._name;
    }

    public set Phone(phone: string) {
        this._phone = phone;
    }
    public get Phone() {
        return this._phone;
    }

    public set IsMale(isMale: boolean) {
        this._isMale = isMale;
    }
    public get IsMale() {
        return this._isMale;
    }

    public static DisplayStatic(): void {
        console.log('static method');
    }
}
