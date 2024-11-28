import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput2 from "./TemperatureInput2";

function toCelsius (fahreheit){
    return(fahreheit-32)*5/9;
}
//섭씨를 화씨로 변경해서 반환
// eslint-disable-next-line no-unused-vars
function tryConvert(temperature,convert){
    const input  = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }

    const output = convert(input);
    const rounded:number=Math.round(output*1000)/1000;
    return rounded.toString();
}

    function Calculator3() {
        const [temperature, setTemperature] = useState('');
        const [scale, setScale] = useState('c');

        const handleCelsiusChange = (temperature) => {
            setTemperature(temperature);
            setScale("c");
        }

        const handleFahreheitChange = (temperature) => {
            setTemperature(temperature);
            setScale("f");
        }

        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) :
            temperature;
        const fahrenheit = scale === 'f' ? tryConvert(temperature, toCelsius) :
            temperature;

        return (
            <div>
                <TemperatureInput2
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={handleCelsiusChange}/>
                <TemperatureInput2
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={handleFahreheitChange}/>
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        );
}

export default Calculator3;