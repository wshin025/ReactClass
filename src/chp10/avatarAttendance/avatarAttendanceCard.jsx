import React from "react";
import './AttendanceCard2.css';
import img1 from'./yun.jpg'
const students =[
    {id:1, name:"강경주", grade:2, major:"인공지능소프트웨어", avatar:"https://randomuser.me/api/portraits/women/81.jpg"},
    {id:2, name:"민영주", grade:4, major:"전기", avatar:"https://randomuser.me/api/portraits/women/67.jpg"},
    {id:3, name:"이병준", grade:3, major:"그린에너지", avatar:"https://randomuser.me/api/portraits/men/37.jpg"},
    {id:4, name:"김건우", grade:2, major:"인공지능소프트웨어", avatar:"https://randomuser.me/api/portraits/men/64.jpg"},
    {id:5, name:"오현민", grade:3, major:"전기", avatar:"https://randomuser.me/api/portraits/men/72.jpg"},
    {id:6, name:"정재선", grade:3, major:"그린에너지", avatar:"https://randomuser.me/api/portraits/men/26.jpg"},
    {id:7, name:"조현욱", grade:4, major:"시각디자인", avatar:"https://randomuser.me/api/portraits/men/60.jpg"},
    {id:8, name:"잔렌델", grade:1, major:"인공지능소프트웨어", avatar:"https://randomuser.me/api/portraits/men/3.jpg"},
    {id:2, name:"윤이나", grade:2, major:"전기과", avatar: img1}
];
function avatarAttendanceCard(){
return(
    <div className="attendance-container">
        <h2 className="attendance-title">학생 사진 출석부</h2>
        <div className="card-container">
            {
                students.map((student)=>(
                    <div className="student-card">
                        <img src={student.avatar} alt={student.name} className="student-avatar"/>
                        <div className="student-info">
                        <h3>{student.name}</h3>
                        <p>{student.grade}학년 | {student.major}</p>
                        </div>
                    </div>
                ))}
        </div>
    </div>
);
}

export default avatarAttendanceCard;