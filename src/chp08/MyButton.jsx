import React from "react";

//클래스 필드 문법 사용하여 bind하는 문장을 작성하지 않는다.
//bind하지 않으면 this부분에서 undefined 된다.
class MyButton extends React{

    constructor(props) {
        super(props);

        this.state={isToggleOn : true}
    }

    handleClick(){
        this.setState(prevState =>({
            // False 로 바꾸는것
            isToggleOn : !prevState.isToggleOn
        }));
    }

    render(){
        return(
            <button onClick ={() => this.handleClick()}>
                {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        )
    }
}
export default MyButton