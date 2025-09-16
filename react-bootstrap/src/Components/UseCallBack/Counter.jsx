import { useCallback, useState } from "react";
import ButtonComp from "./ButtonComp";
import Calculation from "./Calcuation";

const Counter = () => {
    const [count, setCount] = useState(10);

    const handleInc = useCallback(() => {
        setCount(count => count + 1);
    }, [])
    return (
        <>
            <h2>Counter App : {count}</h2>
            <Calculation />
            {/* <button onClick={handleInc}>Increment</button>
            <button>Decrement</button> */}

            <ButtonComp name="Increment" handleClick={handleInc} />
            <ButtonComp name="Decrement" />
        </>
    )
};

export default Counter;
