import React from "react";
import comment from "./Comment";
import Comment from "./Comment";


const comments=[
    {
        name:"김우신",
        comment:"추석연휴 잘보내고 오세요.",
    },
    {
        name:"차기환",
        comment:"집에 언제 가나? 차막혀서..",
    },
    {
        name:"정구영",
        comment:"프로젝트 예습용, 실습용을 나눌게요.",
    },
];


function CommentList(props){
    return(
        <div>
            {
                comment.map((comment) =>{
                    return (3)
                })
            }
            <Comment name={comment.name} comment={comment.comment}/>
        </div>
    );
}

export default CommentList;

