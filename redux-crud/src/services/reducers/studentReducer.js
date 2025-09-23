const initalState = {
    students: [],
    isLoading: false,
    student : null
}



export const studentReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return {
                ...state,
                students: [...state.students, action.payload]
            }
    
        default:
           return state;
    }
}