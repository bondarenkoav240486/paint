import {makeAutoObservable} from "mobx";

class ToolState {
    tool = null
    fillStyle=null
    constructor() {
        makeAutoObservable(this)
    }
    setTool(tool,fillStyle) {
        this.tool = tool
    }
    setFillColor(color) {
        this.tool.fillColor = color
    }
    setStrokeColor(color) {
        this.tool.strokeColor = color
    }
    setLineWidth(width) {
        if( this.tool){
            this.tool.lineWidth = width
        }
    }
}

export default new ToolState()
