import {useState} from "react";

function Toggle2(){
    const[isToggleOn,setIsToggleOn]=useState(true);

    //첫번째 방법 : 함수 컴포넌트 내에 함수로 정의
    // function handleClick(){
    //     setIsToggleOn ((isToggleOn ) => !isToggleOn);
    // }

    const handleClick = () => {

    }

    return(
        <button onClick={handleClick}>
          함수형 컴포넌트 { isToggleOn? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle2