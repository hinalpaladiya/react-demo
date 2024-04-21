import React, { useEffect, useState } from 'react'

function UseEffect() {
    var [myNum, setMyNum] = useState(5)
    useEffect(()=>{
        document.title = `chats(${myNum})`
    })
    return (
        <div>
            <div className="center-div">
                <p>{myNum}</p>
                <div className="button2" onClick={() => setMyNum(myNum++)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Inc
                </div>
                {/* <div className="button2" onClick={() => { myNum > 0 ? setMyNum(myNum--) : setMyNum(0) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Desc
                </div> */}
            </div>
        </div>
    )
}

export default UseEffect
