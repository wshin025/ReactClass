import React from "react";

function Card(title, price,rating, imageurl){

    return  (

        <div className="card" >
            <img src={imageurl} alt={title}/>
            <h3>{title}</h3>
            <p>\{price.toLocaleString()} / 박</p>
            <p> ★ {rating}</p>
        </div>
    );
}

export default Card;