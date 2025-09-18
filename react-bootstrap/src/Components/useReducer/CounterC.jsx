import { useReducer, useState } from "react";
import { reducer } from "./reducer";

const CounterCom = () => {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 100);

    const handelInc = (id) =>{
        dispatch({
            type: 'INC',   
        })
        // setCount(count => count + 1)
    }
    const handelDec = () =>{
        dispatch({
            type: 'DEC'
        })
        // setCount(count => count - 1)
    }
    return (
        <>
            <h2>Counter App: {count}</h2>
            <button onClick={handelInc}>Increment</button>
            <button onClick={handelDec}>Decrement</button>
        </>
    )
}

export default CounterCom;