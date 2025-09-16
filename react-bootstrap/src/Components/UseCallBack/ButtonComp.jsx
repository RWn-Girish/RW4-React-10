import { memo } from "react";

const ButtonComp =memo( ({name, handleClick}) => {
    console.log("Button Comp: ", name);

    return(
        <button onClick={handleClick}>{name}</button>
    )
})

export default ButtonComp;