export interface IProduct extends IBase {
    name:string;
    price?:number|null;
}

export interface IBase{
    id:number;
}

let test:IProduct = {
id:0,
    name: "",

}


