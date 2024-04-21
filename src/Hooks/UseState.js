import { useState } from "react";

const UseState = () => {
    var [myNum, setMyNum] = useState(5)
    return (
        <div className="center-div">
            <p>{myNum}</p>
            <div className="button2" onClick={() => setMyNum(myNum++)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Inc
            </div>
            <div className="button2" onClick={() => { myNum>0 ?  setMyNum(myNum--) : setMyNum(0) }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Desc
            </div>
        </div>
    )
}
export default UseState;