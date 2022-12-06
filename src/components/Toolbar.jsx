
import React, {useEffect, useRef, useState}  from 'react';
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import strokeStyleState from "../store/strokeStyleState";

const Toolbar = () => {
    const download = () => {
        const dataUrl = canvasState.canvas.toDataURL();
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = prompt("Введіть ім'я файла, що зберігається, будь ласка"); 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);   
    }

    return (
        <div className="toolbar">
            <button 
                className="toolbar__btn brush" 
                onClick={()=>toolState.setTool(new Brush(canvasState.canvas,strokeStyleState.strokeStyle))} 
            />
            <button 
                className="toolbar__btn rect" 
                onClick={()=>toolState.setTool(new Rect(canvasState.canvas,strokeStyleState.strokeStyle))} 
            />
            <button 
                className="toolbar__btn circle" 
                onClick={()=>toolState.setTool(new Circle(canvasState.canvas,strokeStyleState.strokeStyle))} 
            />
            <button 
                className="toolbar__btn eraser" 
                onClick={()=>toolState.setTool(new Eraser(canvasState.canvas,strokeStyleState.strokeStyle))} 
            />
            <button 
                className="toolbar__btn line" 
                onClick={()=>toolState.setTool(new Line(canvasState.canvas,strokeStyleState.strokeStyle))} 
            />
            <button 
                className="toolbar__btn undo" 
                onClick={() => canvasState.undo()}
            />
            <button 
                className="toolbar__btn redo" 
                onClick={() => canvasState.redo()}
            />
            <button 
                className="toolbar__btn save" 
                onClick={() => download()}
            />
        </div>
    );
};

export default Toolbar;

