var Person = /** @class */ (function () {
    function Person(name, phone, age, isMale) {
        this.Name = name;
        this.Phone = phone;
        this.Age = age;
        this.IsMale = isMale;
    }
    Person.prototype.Display = function () {
        console.log(this.Name);
        console.log(this.Phone);
        console.log(this.Age);
        console.log(this.IsMale);
    };
    return Person;
}());
var p = new Person('zhangsan', '123456789', 18, true);
p.Display();
