import axios from 'axios';

export const addNewProperty = () => {
    return {
        type: "ADD_PROPERTY_SUC",
    }
}
export const addNewPropertyRej = (msg) => {
    return {
        type: "ADD_PROPERTY_REJ",
        message: msg
    }
}

export const getAllProperties = (data) => {
    return {
        type: "GET_ALL_PROPERTY_SUC",
        payload: data
    }
}

export const getAllPropertiesRej = (msg) => {
    return {
        type: "GET_ALL_PROPERTY_REJ",
        message: msg
    }
}


export const deleteProperty = (id) => {
    return {
        type: "DELETE_PROPERTY",
        payload: id
    }
}

export const getProperty = (id) => {
    return {
        type: "GET_PROPERTY",
        payload: id
    }
}

export const updateProperty = (data) => {
    return {
        type: "UPDATE_PROPERTY",
        payload: data
    }
}

const loading = () => {
    return {
        type: "LOADING"
    }
}


// middleware
export const getAllPropertiesAsync= () => {
    return (dispatch) => {
        dispatch(loading());

        fetch("http://localhost:3000/properties")
        .then(res => res.json())
        .then(data => dispatch(getAllProperties(data)))
        .catch(err => dispatch(getAllPropertiesRej(err.message)))
    }
}

export const addNewPropertyAsync= (data) => {
    return (dispatch) => {
        dispatch(loading());
        axios.post("http://localhost:3000/properties", data)
        .then(()=> dispatch(addNewProperty()))
        .catch(err => dispatch(addNewPropertyRej(err.message)))
    }
}