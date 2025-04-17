export class Rectangle  {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
    calcCircumference(): number {
        return 2 * (this.width + this.height);
    }
    toString(): string {
        return `Rectangle[width=${this.width},height=${this.height}]`;
    }
    static whoAmI(): void {
        console.log("I am a Rectangle");
    }
}