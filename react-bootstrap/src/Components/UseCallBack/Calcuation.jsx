import { memo, useMemo } from "react";

const Calculation = memo(() => {
    const total = useMemo(() => {
        let sum = 0;

        for(let i = 1; i<=1522000202; i++){
            sum += i;
        }
        return sum;
    }, []
)
    return (
        <>
            <p>Total is: {total} </p>
        </>
    )
});

export default Calculation;