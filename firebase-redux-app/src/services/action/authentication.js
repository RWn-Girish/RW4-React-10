const errMSg = (msg) => {
    return {
        type: "ERROR_MSG",
        payload: msg
    }
}


export const createUserAsync = ({email, password}) => {
    return (dispatch) => {
        try {
            
        } catch (error) {
            console.log(error);
            dispatch(errMSg(error.message))
        }
    }
}