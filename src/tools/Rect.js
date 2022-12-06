import Tool from "./Tool";

export default class Rect extends Tool {
    constructor(canvas,fillStyle,socket, id) {
        super(canvas,fillStyle, socket, id);
        this.listen()
    }
    listen() {
        this.canvas.ontouchmove = this.mouseMoveHandler.bind(this);
        this.canvas.ontouchstart = this.mouseDownHandler.bind(this);
        this.canvas.ontouchend = this.mouseUpHandler.bind(this);
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }
    mouseUpHandler(e) {
        this.mouseDown = false;
    }
    mouseDownHandler(e) {
        this.mouseDown = true;
        this.ctx.beginPath();
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        if(e.targetTouches){
            this.startX = e.targetTouches[0].pageX -e.target.offsetLeft;
            this.startY = e.targetTouches[0].pageY -e.target.offsetTop; 
        }
        this.saved = this.canvas.toDataURL();
    }
    mouseMoveHandler(e) {
        if (this.mouseDown) {
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
             if(e.targetTouches){
                currentX= e.targetTouches[0].pageX -e.target.offsetLeft;
                currentY = e.targetTouches[0].pageY -e.target.offsetTop; 
            }
            this.width = currentX - this.startX;
            this.height = currentY - this.startY;
            this.draw(this.startX, this.startY, this.width, this.height);
        }
            e.preventDefault();
    }
    draw(x, y, w, h) {
            const img = new Image();
            img.src = this.saved;
            img.onload = () => {
                this.ctx.clearRect(
                    0, 0, this.canvas.width, this.canvas.height
                );
                this.ctx.drawImage(
                    img, 0, 0, this.canvas.width, this.canvas.height
                );
                this.ctx.beginPath();
                this.ctx.rect(x, y, w, h);
                this.ctx.fill();
                this.ctx.stroke();
            }
            this.ctx.rect(x, y, w, h);
            this.ctx.fill();
            this.ctx.stroke();
    }
}
