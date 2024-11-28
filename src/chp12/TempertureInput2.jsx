import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";

const ScaleName={
    c:"섭씨",
    f:"화씨"
}

function TempertureInput2(props){

    const handleChange=(event)=>{
        props.OnTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>온도를 입력해주세요(단위:(scaleNames[props.scale])</legend>
            <input type="text"
                   vlaue={props.temperature}
                   onChange={handleChange}/>
        </fieldset>
    )
}