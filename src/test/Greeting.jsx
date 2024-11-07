import React from "react";
import userGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

function Greeting(props){

    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return<userGreeting/>
    }else{
        return<GuestGreeting/>
    }

}

export default Greeting