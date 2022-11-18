import React, {useEffect, useRef, useState}  from 'react';
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import strokeStyleState from "../store/strokeStyleState";


const Canvas = observer(() => {

    const canvasRef = useRef()

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);
        toolState.setTool(new Brush(canvasRef.current,strokeStyleState.strokeStyle));
    }, [])

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    return (
        <div className="canvas">
        <canvas 
        width={300} 
        height={400} 
        ref={canvasRef} 
        onMouseDown={() => mouseDownHandler()}
        onTouchStart={() => mouseDownHandler()}
        >
        </canvas>
        </div>
        );
})

export default Canvas;
