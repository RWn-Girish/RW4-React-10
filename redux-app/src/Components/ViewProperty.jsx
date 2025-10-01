import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProperty } from "../services/action/propertyAction";

const ViewProperty = () => {
    const { id } = useParams();
    // console.log(id);
    const dispatch = useDispatch();
    const { property } = useSelector(state => state)
    // console.log("property: ", property);
    useEffect(() => {
        if (id)
            dispatch(getProperty(id));
    }, [id]);
    return (
        <>
            <h2>View Single Property: {id}</h2>
            <h3>{property.pname}</h3>
            <h3>{property.category}</h3>
        </>
    )
};

export default ViewProperty;