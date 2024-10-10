import React from "react";

function InputTest(){

    function handlehange(event){
        console.log("입력된 값 : ", event.target.value)
    }

    return(
        <input type= "text" onChange={handlehange} placeholder="임의의 문자열을 입력해주세요."/>
    );
}

export default InputTest