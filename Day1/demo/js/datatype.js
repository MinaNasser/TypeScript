"use strict";
let username = 'zhangsan';
let age = 18;
let isMarried = false;
//union type
let id = 123;
id = '123';
//any
let x = 123;
x = '123';
x = true;
//unknown
let y;
y = 123;
y = '123';
y = true;
//never
function fn() {
    throw new Error('error');
}
//tuple
let arr = ['123', 123];
//enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let i = {
    name: 'zhangsan',
    gender: Gender.Male
};
//function
let add;
add = (a, b) => a + b;
//   sayHi(msg:string):void{
//       console.log(msg);
//   }
// array
// names :Array<string> ;
// phons :string[] = ['123','456'];
