import { IProduct } from "./interface";

export class Book implements IProduct {
    id: number;
    name: string;
    price: number;
    Pages: number;
    author: string;

    constructor(id: number, name: string, price: number, pages: number, author: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.Pages = pages;
      this.author = author;
    }

    getInfo(): string {
      return `
      Book [${this.id}]: ${this.name} 
      costs $${this.price.toFixed(2)}
      with ${this.Pages} pages 
      by ${this.author}`;
    }
  }

