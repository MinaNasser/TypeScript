import { Rectangle } from "./Rectangle";
export class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
    toString() {
        return `Square[side=${this.width}]`;
    }
    static whoAmI() {
        console.log("I am a Square");
    }
    calcCircumference() {
        return 4 * this.width;
    }
}
