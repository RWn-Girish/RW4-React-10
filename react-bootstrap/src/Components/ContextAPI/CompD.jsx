import { useContext } from "react";
import { userContext } from "./CompA";

const CompD = () => {

    const {person, handleClick} = useContext(userContext)
    console.log('Person: ', person);
    return(
        <>
            <h2 >Comp D Called - {person.count} </h2>
            <button onClick={handleClick}>INC</button>
        </>
    )
} 

export default CompD;