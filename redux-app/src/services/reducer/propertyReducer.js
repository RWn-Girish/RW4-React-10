const initalState = {
    properties: JSON.parse(localStorage.getItem('properties')) || [],
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
        default:
            return state;
    }
}



// [11]