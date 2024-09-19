import React from "react";
import Notification from "./Notification";
// import * as timers from "node:timers";

const reserveNotifications =[
    {
        message :"안녕하세요. 오늘 일정을 알려드립니다.",
    },
    {
        message: "현재 수업중인 웹프로그래밍활용 수업을 열심히 들으세요.",
    },
    {
        message: "열심히 듣고 Git에 Commit한 후 하교하시면 됩니다.",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notifications:[], //배열선언
        };
    }

    //컴포넌트가 생성될때, 마운트 될때 나옴.
    componentDidMount() {
        const{notifications} = this.state;
        // 1초가 지나면 생성되는 문장
        timer = setInterval(() =>{
            if(notifications.length < reserveNotifications.length){
                const index = notifications.length;
                notifications.push(reserveNotifications[index]);
                this.setState({
                    notifications:notifications,
                });
            } else{
                clearInterval(timer);
            }
        },2000);
    }
    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }
    render() {
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification message={notification.message}/>;
                })}
            </div>
        );
    }
}

export default NotificationList;