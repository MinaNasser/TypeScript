import { IProduct } from "./interface";

 export class Cart<T extends IProduct> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    remove(id: number): void {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    getTotal(): number {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  
    print(): void {
      if (this.items.length === 0) {
        console.log("Cart is empty.");
        return;
      }
  
      console.log("Cart Contents:");
      this.items.forEach(item => {
        console.log("--------------------");
        console.log(item.getInfo());
        console.log("--------------------");
      });
  
      console.log(`Total: $${this.getTotal().toFixed(2)}`);
    }
  }
  