import React, {useState} from "react";

function NameForm(props){
    const[name, SetName]=useState('')

    const handleChange=(event) => {
       SetName(event.target.value.toUpperCase());

     const handleSubmit = (event) =>{
         alert('입력한 이름: ${name}');
         event.preventDefault();
     }

    return (
    <form onSubmit={handleChange}>
        <label>
            성명:
            <input type="test" value={name} onChange={handleChange}/>
        </label>
        <button type ="Submit">제출</button>
    </form>
    );
    }

}

export default NameForm;