import React from "react";
import Card from "./Card"

function ProfileCard(){
    return(
        <div>
        <Card className="profile-card" backgroundColor="#FF73EE">
            <p>안녕하세요~ 김우신입니다.</p>
            <p>리액트로 카드형 탬플릿을 작성중입니다.</p>
        </Card>
        </div>
    );
}

export default ProfileCard;