import { IProduct } from "./interface";

export class ElectronicProduct implements IProduct {
    id: number;
    name: string;
    price: number;
    brand : string;
  
    constructor(id: number, name: string, price: number, brand: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.brand = brand;
    }
  
    getInfo(): string {
      return `
      Product  [${this.id}]: ${this.name} 
      costs : $${this.price.toFixed(2)}
      Brand : ${this.brand}`;
    }
  }
  
  // const laptop = new ElectronicProduct(1, "Laptop", 1299.99 , "Dell");  
  // console.log(laptop.getInfo());
  