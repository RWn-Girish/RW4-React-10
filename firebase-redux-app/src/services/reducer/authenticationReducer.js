const intialState = {
    errMsg: "",
    user: null
}

export const authReducer = (state = intialState, action) => {
    switch(action.type) {
        case "ERROR_MSG":
            return state;
        default:
            return state;
    }
}