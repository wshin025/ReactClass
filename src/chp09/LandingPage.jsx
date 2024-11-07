import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    const [isLoggedIn,setIsLoggedIn]= useState(false);

    const onclickLogin=()=>{
        setIsLoggedIn(true);
    }
    const onclickLogout=()=>{
        setIsLoggedIn(false);
    };
    return(
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onclickLogin={onclickLogin}
                onclickLogout={onclickLogout}
                />
            <div style={{padding:16}}>경주와 함께하는 리엑트 공부!</div>
        </div>
    );
}

export default LandingPage;