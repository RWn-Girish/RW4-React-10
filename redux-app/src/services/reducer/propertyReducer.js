const initalState = {
    properties: JSON.parse(localStorage.getItem('properties')) || [],
    property: null,
    isLoading: false
}


export const propertyReducer = (state = initalState, action) => {
    switch(action.type){
        case "ADD_PROPERTY":
            let data = JSON.parse(localStorage.getItem('properties')) || []
            // data.push(action.payload)
            data = [...data, action.payload]
            localStorage.setItem('properties', JSON.stringify(data))
            return {
                ...state,
                properties: [...state.properties, action.payload]
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
            return {
                ...state,
                property: singleRec 
            }
        default:
            return state;
    }
}



// [11]