 let username:string = 'zhangsan';
 let age:number = 18;
 let isMarried:boolean = false;
 //union type
 let id :number|string = 123;
 id = '123';
 //any
 let x:any = 123;
 x = '123'; 
 x = true;
 //unknown
 let y:unknown
 y = 123;
 y = '123';
 y = true;
 //never
 function fn():never{
     throw new Error('error');
 }
 //tuple
 let arr:[string,number] = ['123',123];
 //enum
 enum Gender{
     Male,
     Female
 }
 let i: {name:string,gender:Gender} = {
     name:'zhangsan',
     gender:Gender.Male
 }
 //function
 let add:(x:number,y:number)=>number
 add = (a,b)=>a+b;
//   sayHi(msg:string):void{
//       console.log(msg);
//   }
