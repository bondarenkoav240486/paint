import Tool from "./Tool";
import Brush from "./Brush";
import strokeStyleState from "../store/strokeStyleState";

export default class Eraser extends Brush {
    constructor(canvas,strokeStyle) {
        super(canvas,strokeStyle);
    }

    draw(x, y) {
        this.ctx.strokeStyle = '#ffffff'
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }
}
