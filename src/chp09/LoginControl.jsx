import React, {useState} from "react";
import ComfirmDialog from "../chp04/ComfirmDialog";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoginClick=()=>{
        setIsLoggedIn(true)
    }

   const handleLogoutClick=()=>{
        setIsLoggedIn(false)
    }

    let btn;
    if(isLoggedIn){
        btn=<LogoutButton onclick={handleLogoutClick}/>;
    }else{
        btn=<LoginButton onclick={handleLoginClick}/>;
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );

}

export default LoginControl