import { combineReducers } from "redux";
import { propertyReducer } from "./propertyReducer";
import { authReducer } from "./authenticationReducer";

export const rootReducer = combineReducers({
    propertyReducer,
    authReducer
})