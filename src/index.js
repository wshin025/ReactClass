import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import './chp03/Book.css';
// import './ch04/sty.css';
//  import './ch04/Clock.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./chp03/Library";
import Button from "./chp04/Button";
 import ComfirmDialog from "./chp04/ComfirmDialog";
import Clock from "./chp04/Clock";
import CommentList from "./chp05/CommentList";
import NotificationList from "./chp06/NotificationList";
import Accommodate from "./chp07/Accommodate";
import Toggle from "./chp08/Toggle";
import MyButton from "./chp08/MyButton";
import Toggle2 from "./chp08/Toggle2";
import ClickButton from "./chp08/ClickButton";
import Counter from "./chp08/Counter";
import InputTest from "./chp08/InputTest";
import ConfirmButton from "./chp08/ConfirmButton";
import ConfirmButton2 from "./chp08/ConfirmButton2";
import Greeting from "./chp09/Greeting";
import LoginControl from "./chp09/LoginControl";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LoginControl/>
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