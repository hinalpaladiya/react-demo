import React, { useReducer, useState } from 'react'

function Reducer() {
    // var [myNum, setMyNum] = useState(5)
    const reducer = (state, action) => {
        if (action.type == 'inc') {
            state = state + 1
        }
        if (state > 0 && action.type == 'dec') {
            state = state - 1
        }
        return state;
    } 
    const initialData = 0;
    const [state, dispatch] = useReducer(reducer, initialData)
    return (
        <div>
            <div className="center-div">
                <p>{state}</p>
                <div className="button2" onClick={() => dispatch({ type: 'inc' })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Inc
                </div>
                <div className="button2" onClick={() => dispatch({ type: 'dec' })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Desc
                </div>
            </div>
        </div>
    )
}

export default Reducer
