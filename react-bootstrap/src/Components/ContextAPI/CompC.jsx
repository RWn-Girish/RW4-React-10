import { useContext } from "react";
import CompD from "./CompD";
import { userContext } from "./CompA";

const CompC = () => {
    const {person} = useContext(userContext);
    return(
        <>
            <h2>Comp C Called - {person.email}</h2>
            <CompD  />
        </>
    )
} 

export default CompC;