export class Person {
    constructor(name, phone, age, isMale) {
        this._name = name;
        this._phone = phone;
        this._age = age;
        this._isMale = isMale;
    }
    Display() {
        console.log(this._name);
        console.log(this._phone);
        console.log(this._age);
        console.log(this._isMale);
    }
    // getter and setter for Age
    set Age(age) {
        if (age > 0) {
            this._age = age;
        }
    }
    get Age() {
        return this._age;
    }
    set Name(name) {
        this._name = name;
    }
    get Name() {
        return this._name;
    }
    set Phone(phone) {
        this._phone = phone;
    }
    get Phone() {
        return this._phone;
    }
    set IsMale(isMale) {
        this._isMale = isMale;
    }
    get IsMale() {
        return this._isMale;
    }
    static DisplayStatic() {
        console.log('static method');
    }
}
