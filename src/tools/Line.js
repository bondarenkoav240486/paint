import Tool from "./Tool";
import strokeStyleState from "../store/strokeStyleState";

export default class Line extends Tool {
    constructor(canvas,strokeStyle) {
        super(canvas,strokeStyle);
        this.listen();
        this.name = 'Line';
    }
    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.ontouchmove = this.mouseMoveHandler.bind(this);
        this.canvas.ontouchstart = this.mouseDownHandler.bind(this);
        this.canvas.ontouchend = this.mouseUpHandler.bind(this);
    }
    mouseDownHandler(e) {
        this.mouseDown = true;
        this.currentX = e.pageX-e.target.offsetLeft;
        this.currentY = e.pageY-e.target.offsetTop;
        if(e.targetTouches){
            this.currentX= e.targetTouches[0].pageX -e.target.offsetLeft;
             this.currentY = e.targetTouches[0].pageY -e.target.offsetTop;
        }
        this.ctx.beginPath();
        this.ctx.moveTo(this.currentX, this.currentY );
        this.saved = this.canvas.toDataURL();
    }
    mouseUpHandler(e) {
        this.mouseDown = false;
    }
    mouseMoveHandler(e) {
        if (this.mouseDown) {
            if(e.targetTouches){
                this.draw(
                    e.targetTouches[0].pageX - e.target.offsetLeft, 
                    e.targetTouches[0].pageY - e.target.offsetTop
                );
            }
            else{
                this.draw(
                    e.pageX-e.target.offsetLeft, 
                    e.pageY-e.target.offsetTop
                );
            }
            e.preventDefault()
        }
    }
    draw(x,y) {
        const img = new Image();
        img.src = this.saved;
        img.onload = async function () {
            this.ctx.clearRect(
                0,0, this.canvas.width, this.canvas.height
            );
            this.ctx.drawImage(
                img, 0, 0, this.canvas.width, this.canvas.height
            );
            this.ctx.beginPath();
            this.ctx.moveTo(this.currentX, this.currentY);
            this.ctx.strokeStyle = strokeStyleState.strokeStyle.value;
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        }.bind(this);

    }
}
