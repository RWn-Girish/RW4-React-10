import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Home = () => {
    // console.log(useSelector(state => state));
    const {properties} = useSelector(state => state);
    console.log(properties)
    return (
        <>
            <h2>Home page</h2>
           <Table>
             <tbody>
                {
                properties.map(v => (
                    <tr>
                        <td>{v.pname}</td>
                        <td>{v.category}</td>
                    </tr>
                ))
            }
             </tbody>
           </Table>
        </>
    )
}

export default Home;