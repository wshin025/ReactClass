import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput"

function Calculator2(props){
    const [temperture, setTemperture]=useState('');

    const handleChange =(event) =>{
        setTemperture(event.target.value);
    }
    return(
        <div>
            <TemperatureInput scale="c"/>
            <TemperatureInput scale="f"/>
        </div>
    )
}

export default Calculator2;