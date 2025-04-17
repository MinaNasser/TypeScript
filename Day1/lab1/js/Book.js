export class Book {
    constructor(id, name, price, pages, author) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.Pages = pages;
        this.author = author;
    }
    getInfo() {
        return `
      Book [${this.id}]: ${this.name} 
      costs $${this.price.toFixed(2)}
      with ${this.Pages} pages 
      by ${this.author}`;
    }
}
