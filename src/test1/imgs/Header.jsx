import React from "react";

function Header(){
    return(
        <header className="header">
            <div className="logo">Airbnb</div>
            <nav>
                <a href="/public">홈</a>
                <a href="/experiences">체험</a>
                <a href="/online">온라인체험</a>
            </nav>
        </header>
    );
}

export default Header;