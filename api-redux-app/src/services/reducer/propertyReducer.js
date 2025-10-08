
const initalState = {
    properties: [],
    property: null,
    isLoading: false,
    isError: "",
    isCreated: false
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
                isError: ""
            }
        case "GET_ALL_PROPERTY_REJ":
            return {
                ...state,
                isLoading: false,
                isCreated: false,
                isError: action.message
            }
        case "DELETE_PROPERTY":
            let Data = JSON.parse(localStorage.getItem('properties')) || []
            let updateData = Data.filter(v => v.id != action.payload)
            localStorage.setItem('properties', JSON.stringify(updateData))
            return {
                ...state,
                properties: updateData 
            }
        
        case "GET_PROPERTY":
            let getData = JSON.parse(localStorage.getItem('properties')) || []
            let singleRec = getData.find(v => v.id == action.payload)
            console.log("Data: ", singleRec);
            return {
                ...state,
                property: singleRec 
            }
        
            case "UPDATE_PROPERTY":
            let GetData = JSON.parse(localStorage.getItem('properties')) || []
            let updatedData = GetData.map(v =>{
                if(v.id == action.payload.id){
                    return action.payload
                }else{
                    return v;
                }
            })
            localStorage.setItem('properties', JSON.stringify(updatedData))
            return {
                ...state,
                property: null,
                properties: updatedData 
            }
        default:
            return state;
    }
}



// [11]