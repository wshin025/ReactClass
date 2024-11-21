import React, {useState} from "react";

function NameRequestForm (props){
    const[details ,setDetails]=useState('');
    const[name, SetName]=useState('')
    const [fruit,setfruit]=useState('수박')
    const[file,setfile]=useState('')

    const handleChange = (event) => {
        const {target} = event;
        switch (target.id) {
            case "name":
                SetName(event.target.value.toUpperCase());
                break;
            case "details":
                setfruit(event.target.value);
                break;
            case "fruit":
                setfruit(event.target.value);
                break;
            case "file":
                setfile(event.target.value);
                break;
        }
        const handleSubmit = (event) => {
            alert(`입력한 이름: $\{name} 상세 입력사항 $\{details} 선택한 과일 :$\{fruit} 선택한 파일: $\{file}`)
            event.preventDefault();
        }
        return (
            <form onSubmit={handleSubmit}>
                <br/><br/>
                <label>
                    요청사항:
                    <textarea id="details" value={details} onChange={handleChange}/>
                </label><br/><br/>

                <label>
                    성명:
                    <input id="name" type="test" value={name} onChange={handleChange}/>
                </label>
                <label>
                    좋아하는 과일 선택:
                    <select id="fruit" vlaue={fruit} onChange={handleChange}>
                        <option>사과</option>
                        <option>포도</option>
                        <option>바나나</option>
                        <option>수박</option>
                    </select>
                </label><br/><br/>
                <label>
                    파일 선택:
                    <input id="file" type="file" onChange={handleChange}/>
                </label>
                <button type={"submit"}>제출</button>

            </form>
        );
    }
}

export default NameRequestForm;