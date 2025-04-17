import { Rectangle } from "./Rectangle";

export class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }
    toString(): string {
        return `Square[side=${this.width}]`;
    }
    static whoAmI(): void {
        console.log("I am a Square");
    }  
    calcCircumference(): number {
        return 4 * this.width;
    }

}