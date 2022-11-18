import {makeAutoObservable} from "mobx";

class StrokeStyleState {

    strokeStyle = null

    constructor() {
        makeAutoObservable(this)
    }

    setStrokeStyle(strokeStyle) {
        this.strokeStyle = strokeStyle
    }
}

export default new StrokeStyleState()
