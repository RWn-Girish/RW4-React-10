import { createContext, useState } from "react";
import CompB from "./CompB";

export const userContext = createContext()

const CompA = () => {
    const [person, setPerson] = useState({
        name: "John Doe",
        email: "john@test.in",
        gender: "Male",
        course: "MERN Stack Developer",
        count: 0
    })

    const handleClick = () => {
        setPerson({count: person.count + 1})
        console.log("click");
    }
    return(
        <>
            <h2>Comp A Called - {name}</h2>
            <userContext.Provider value={{person, handleClick }}>
                <CompB />
            </userContext.Provider>
        </>
    )
} 

export default CompA;