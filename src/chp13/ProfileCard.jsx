import React from "react";
import Card from "./Card"

function ProfileCard(props){
    return(
        <div>
        <Card title="wody" backgroundColor="#FF73EE">
            <p>안녕하세요~ 김우신입니다.</p>
            <p>리액트로 카드형 탬플릿을 작성중입니다.</p>
        </Card>
            <Card title="Linda Kim" backgroundColor="#5F00FF">
                <p>안녕하세요~ 김린다입니다.</p>
                <p>리액트로 카드형 탬플릿을 작성중입니다.</p>
            </Card>
            <Card title="simon Je" backgroundColor="#1DDB16">
                <p>안녕하세요~ 제승모입니다.</p>
                <p>리액트로 카드형 탬플릿을 작성중입니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard;