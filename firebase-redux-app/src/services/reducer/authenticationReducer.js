const intialState = {
    errMsg: "",
    user: null,
    isCreated: false
}

export const authReducer = (state = intialState, action) => {
    switch(action.type) {
        case "ERROR_MSG":
            return {
                ...state,
                errMsg: action.payload,
                isCreated: false
            };
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                isCreated: true
            }
        case "SIGNIN_SUCCESS":
            
            return {
                ...state,
                isCreated: false,
                user: action.payload
            }
        default:
            return state;
    }
}