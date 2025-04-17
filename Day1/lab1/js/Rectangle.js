export class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    calcCircumference() {
        return 2 * (this.width + this.height);
    }
    toString() {
        return `Rectangle[width=${this.width},height=${this.height}]`;
    }
    static whoAmI() {
        console.log("I am a Rectangle");
    }
}
