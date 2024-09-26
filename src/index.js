import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import './chp03/Book.css';
// import './ch04/sty.css';
//  import './ch04/Clock.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./chp03/Library";
import Button from "./ch04/Button";
 import ComfirmDialog from "./ch04/ComfirmDialog";
import Clock from "./ch04/Clock";
import CommentList from "./chp05/CommentList";
import NotificationList from "./chp06/NotificationList";
import Accommodate from "./chp07/Accommodate";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Accommodate/>
    </React.StrictMode>
);

// setInterval(() =>{
// root.render(
//     <React.StrictMode>
//      <CommentList/>
//     </React.StrictMode>
// );
// }
// ,1000
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();