
import React, {useEffect, useRef, useState} from 'react';
import toolState from "../store/toolState";
import strokeStyleState from "../store/strokeStyleState";
import canvasState from "../store/canvasState";

const SettingBar = () => {
    const inputChangeColorStrokeRef = useRef();
    const inputChangeWidthCanvasRef = useRef();

    useEffect(() => {
       strokeStyleState.setStrokeStyle(inputChangeColorStrokeRef.current);
       strokeStyleState.strokeStyle.value = '#F40C0C'
   }, [])

    const changeColorFIllStyle = e => {
        toolState.setFillColor(e.target.value)
    }

    const changeColorStrokeStyle  = e => {
        // toolState.setStrokeColor(e.target.value)

        strokeStyleState.setStrokeStyle(e.target);
        console.log(strokeStyleState.strokeStyle.value)
        toolState.setStrokeColor(
            // strokeStyleState.setStrokeColor.value
            strokeStyleState.strokeStyle.value
        )
    }

    return (
        <div className="setting-bar">
            <div className="setting">
                <label htmlFor="line-width">товщина лінії</label>
                <input
                    onChange={e => toolState.setLineWidth(e.target.value)}
                    style={{margin: '0 10px'}}
                    id="line-width"
                    type="number" defaultValue={1} min={1} max={50}
                /> 
            </div >
            <div  className="setting">
                <label htmlFor="stroke-color">колір заливки</label>
                <input className="change-color-fill-style"
                    type="color"
                    id="fill-color"
                    onChange={e => changeColorFIllStyle(e)}
                />
            </div >
            <div  className="setting">
                <label htmlFor="stroke-color">колір обведення</label>
                <input 
                    className="change-color-stroke-style"
                    onChange={e => changeColorStrokeStyle(e)} 
                    id="stroke-color" 
                    type="color"
                    ref={inputChangeColorStrokeRef} 
                />
            </div >
        </div>
    );
};

export default SettingBar;
