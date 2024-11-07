import React from "react";
import {UserGreeting, GuestGreeting } from "./UserGuestGreeting";

function Greeting(props){

    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return<userGreeting/>
    }else{
        return<GuestGreeting/>
    }

}

export default Greeting;