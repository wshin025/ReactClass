import React,{useState, useEffect} from "react";
import useCounter from "./useCounter";

// 두단어 연결시 언더바 (_)
const MAX_CAPACITY=10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false)
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 마운트 되었을때, 업데이트 되었을때 사용가능함.
    useEffect(() => {
        console.log("================");
        console.log("useEffect 실행됨");
        console.log(`isFull: ${isFull}`);
    });
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY)
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용 했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>수용시설에 입장</button>
            <button onClick={decreaseCount}>수용시설에 퇴장</button>
            {isFull && <p style={{color: "red"}}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;