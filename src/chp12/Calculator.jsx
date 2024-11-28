import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";

function Calculator(props){
    const [temperture, setTemperture]=useState('');

    const handleChange =(event) =>{
        setTemperture(event.target.value);
    }
    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            <input type="text"
                   vlaue={temperture}
                   onChange={handleChange}/>
            <BoilingVerdict
                celsius={parseFloat(temperture)}/>
        </fieldset>
    )
}

export default Calculator;