
const initalState = {
    properties: [],
    property: null,
    isLoading: false,
    isError: "",
    isCreated: false,
    isUpdated: false
}


export const propertyReducer = (state = initalState, action) => {
    switch(action.type){
        case "LOADING": 
        return {
            ...state,
            isLoading: true
        }
        case "ADD_PROPERTY_SUC":
            return {
                ...state,
                isCreated: true
            }
        case "ADD_PROPERTY_REJ":
            return {
                ...state,
                isError: action.message
            }

        case "GET_ALL_PROPERTY_SUC":
            return {
                ...state,
                isLoading: false,
                properties: action.payload,
                isCreated: false,
                isError: "",
                isUpdated: false
            }
        case "GET_ALL_PROPERTY_REJ":
            return {
                ...state,
                isLoading: false,
                isCreated: false,
                isError: action.message
            }
        case "DELETE_PROPERTY_REJ":
            return {
                ...state,
                isError: action.message 
            }
        case "GET_PROPERTY_REJ":
            return {
                ...state,
                isError: action.message 
            }
        case "GET_PROPERTY_SUC":
            return {
                ...state,
                property: action.payload 
            }
        
            case "UPDATE_PROPERTY_SUC":
            return {
                ...state,
                property: null,
                isUpdated: true
            }
        default:
            return state;
    }
}



// [11]