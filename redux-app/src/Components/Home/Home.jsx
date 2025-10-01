import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProperty } from "../../services/action/propertyAction";
import { useNavigate } from "react-router";

const Home = () => {
    // console.log(useSelector(state => state));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {properties, isLoading} = useSelector(state => state);
    // console.log(properties)
    const handleDelete = (id) => {
        // console.log(id);
        dispatch(deleteProperty(id))
    }

    const handleEdit = (id) => {
        navigate(`/edit-property/${id}`);
    }
    const handleView = (id) => {
        navigate(`/view-property/${id}`);
    }

    return (
        <>
            <h2>Home page</h2>
           {isLoading ? <h2>Loading....</h2> : <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Property Name</th>
                    <th>Availibility</th>
                    <th>Category</th>
                    <th>Facility</th>
                    <th>Area</th>
                    <th>Property Price</th>
                    <th>ContactNo</th>
                    <th>Address</th>
                    <th>Image</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
             <tbody>
                {
                properties.map(v => (
                    <tr key={v.id}>
                        <td>{v.id}</td>
                        <td>{v.pname}</td>
                        <td>{v.pavialibity}</td>
                        <td>{v.category}</td>
                        <td>{v.facility}</td>
                        <td>{v.area}</td>
                        <td>{v.price}</td>
                        <td>{v.contactNo}</td>
                        <td>{v.address}</td>
                        <td><img src={v.image} height={100} /></td>
                        <td><Button onClick={()=> handleView(v.id)}>View</Button></td>
                        <td><Button onClick={()=> handleEdit(v.id)}>Edit</Button></td>
                        <td><Button onClick={()=> handleDelete(v.id)}>Delete</Button></td>
                    </tr>
                ))
            }
             </tbody>
           </Table>}
        </>
    )
}

export default Home;