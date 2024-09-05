import React from "react";

function Clock(props){
    return(
        <div>
            <h1>Hello, world!</h1>
            <div className={'clock'}>{new Date().toLocaleTimeString()}.</div>
        </div>
    );
}
export default Clock