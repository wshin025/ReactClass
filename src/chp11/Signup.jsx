import React,{useState} from "react";
import "./SignUp.css"
function Signup() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [gender, setgender] = useState("");
    const [interests, setinterests] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`이름 : ${name}
    이메일 : ${email}
    비밀번호 : ${password}
    성별: ${gender}
    관심사:${interests}`);
    };
    const handleChange = (event) => {
        const {target} = event;
        switch (target.id) {
            case "name":
                setname(event.target.value.toUpperCase());
                break;
            case "email":
                setemail(event.target.value);
                break;
            case "password":
                setpassword(event.target.value);
                break;
            case "gender":
                setgender(event.target.value);
                break;
            case "interests":
                setinterests(event.target.value);
                break;
        }


        return (
            <div className="signup-container">
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <label>
                        이름:
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={handleChange}
                            required/>
                    </label>

                    <label>
                        이메일:
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={handleChange}
                            required/>
                    </label>

                    <label>
                        비밀번호:
                        <input
                            id="password"
                            type="text"
                            value={name}
                            onChange={handleChange}
                            required/>
                    </label>

                    <label>
                        성별:
                        <select id="gender" value={gender} onChange={handleChange}>
                            <option value="남자">남자</option>
                            <option value="여자">여자</option>
                            <option value="기타">기타</option>
                        </select>
                    </label>

                    <label>
                        관심사:
                        <textarea
                            id="interests"
                            value={interests}
                            onChange={handleChange}
                            placeholder="관심사를 입력하세요"
                        />
                    </label>
                </form>

            </div>
        )

    }
}
export default Signup;