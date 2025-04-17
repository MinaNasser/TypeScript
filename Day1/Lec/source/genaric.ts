import { IProduct } from "./interface";

interface IApiResult<T>{
    Data :T;
    Success:boolean;
    StatusCode:number;
    Message :string
}


let responce :IApiResult<IProduct|null>  
//product/getbyid/111
responce={
    Message:"",
    StatusCode :500,
    Success:false,
    Data:null
}