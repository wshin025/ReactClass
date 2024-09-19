import React from "react";
import './Notificationcss.css'
// const styles ={
//     wrapper:{
//         margin:8,
//         padding:8,
//         display:"flex",
//         flexDirection : "row",
//         border:"1px solid grey",
//         borderRadius:16,
//     },
//     messageText:{
//         color:"black",
//         fontSize:16,
//     },
// };

class Notification extends React.Component{
    constructor(props) {
        super(props); //component 가 생성될 때 , props 를 전달 받을수 있는 매개변수를 갖는 생성자가 호출된다.

        this.state ={};
    }

    render() {
        return(
            <div className= "wrapper">
                <span className= "messageText">
                    {this.props.message}
                </span>
            </div>
        );
    }
}
export default Notification