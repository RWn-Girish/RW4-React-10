import axios from 'axios';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

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
    return async (dispatch) => {
        dispatch(loading());

        try {
            let res = await getDocs(collection(db, "properties"));
            let result = [];
            res.forEach(doc => {
                result.push(doc.data())
            })

            dispatch(getAllProperties(result))
        } catch (error) {
            dispatch(getAllPropertiesRej(error.message))
        }
    }
}

export const addNewPropertyAsync= (data) => {
    return async(dispatch) => {
        dispatch(loading());

        try {
            // let res = await addDoc(collection(db, "properties"), data); // auto generated ID
            await setDoc(doc(db, "properties", `${data.id}`), data);
            dispatch(addNewProperty())
        } catch (error) {
            dispatch(addNewPropertyRej(error.message))
        }
    }
}

export const deletePropertyAsync = (id) => {
    return async(dispatch) => {
        dispatch(loading());
        try {
            await deleteDoc(doc(db, "properties", `${id}`));
            dispatch(getAllPropertiesAsync())
        } catch (error) {
            dispatch(deletePropertyRej(error.message))
        }
    }
}

export const getPropertyAsync = (id) => {
    return async(dispatch) => {
        dispatch(loading());
        try {
            let res = await getDoc(doc(db, "properties", `${id}`))
            dispatch(getProperty(res.data()))
        } catch (error) {
             dispatch(getPropertyRej(error.message))
        }
    }
}

export const updatePropertyAsync = (data) => {
    return async(dispatch) => {
        dispatch(loading());
        try {
            await updateDoc(doc(db, "properties", `${data.id}`), data)
            dispatch(updateProperty())
        } catch (error) {
            dispatch(getPropertyRej(error.message))
        }

    }
}