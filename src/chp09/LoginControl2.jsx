import React, {useState} from "react";
import ComfirmDialog from "../chp04/ComfirmDialog";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";
import WarningBanner from "./WarningBanner";

function LoginControl2(props){
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
            <WarningBanner warning ={false}/>
            <Greeting isLoggedIn={isLoggedIn}/>
            {isLoggedIn
            ?<LogoutButton onclick={handleLogoutClick}/>
            :<LoginButton onclick={handleLoginClick}/>
            }
        </div>
    );

}

export default LoginControl2