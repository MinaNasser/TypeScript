export class Cart {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
    print() {
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
