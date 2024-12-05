import React from "react";

function Card(title, className,children){

    return  (

        <div className={`card ${className}`}>
            { title &&<h1> {title}</h1>}
            {children}
        </div>
    );
}

export default Card;