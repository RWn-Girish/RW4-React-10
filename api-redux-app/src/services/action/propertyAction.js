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


export const deletePropertyRej = (msg) => {
    return {
        type: "DELETE_PROPERTY_REJ",
        message: msg
    }
}
export const getPropertyRej = (msg) => {
    return {
        type: "GET_PROPERTY_REJ",
        message: msg
    }
}

export const getProperty = (data) => {
    return {
        type: "GET_PROPERTY_SUC",
        payload: data
    }
}

export const updateProperty = () => {
    return {
        type: "UPDATE_PROPERTY_SUC",
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

export const deletePropertyAsync = (id) => {
    return (dispatch) => {
        dispatch(loading());
        axios.delete(`http://localhost:3000/properties/${id}`)
        .then(() => dispatch(getAllPropertiesAsync()))
        .catch(err => dispatch(deletePropertyRej(err.message)))
    }
}

export const getPropertyAsync = (id) => {
    return (dispatch) => {
        dispatch(loading());
        axios.get(`http://localhost:3000/properties/${id}`)
        .then((res) => dispatch(getProperty(res.data)))
        .catch(err => dispatch(getPropertyRej(err.message)))
    }
}

export const updatePropertyAsync = (data) => {
    return (dispatch) => {
        dispatch(loading());
        axios.put(`http://localhost:3000/properties/${data.id}`, data)
        .then(() => dispatch(updateProperty()))
        .catch(err => dispatch(getPropertyRej(err.message)))
    }
}