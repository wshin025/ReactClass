import React from "react";
import Card from "./Card";

function Mainpage(){
    return(
        <div className="main-Container">
            <h1>홈페이지 메인 화면</h1>
            <profileCard/>

            <Card className="event-card" title="이벤트">
                <p>현재 진행중인 이벤트를 확인하세요.</p>
                <ul>
                    <li>이벤트 1: 할인 쿠폰</li>
                    <li>이벤트 2: 무료 배송 </li>
                </ul>
            </Card>
            <Card className="inquiry-card" title="문의하기">
                <p>궁금한 점이 있으시면 언제든지 문의하세요!</p>
                <button>문의하기</button>
            </Card>
        </div>
    );
}

export default Mainpage;