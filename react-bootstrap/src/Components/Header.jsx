import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

const Header =  () => {
    const navigate = useNavigate();
    const handleClick = (name) => {
        console.log('click');
        navigate(`/about/${name}`)
    }
    return (
        <>
            <h2>Header</h2>
           <Link to={"/"}>Home</Link> &nbsp;&nbsp;&nbsp;
           <Link to={"/about"}>About</Link>  &nbsp;&nbsp;&nbsp;
           <Link to={"/contact"}>Contact</Link>  &nbsp;&nbsp;&nbsp;
           <Button onClick={() => handleClick('John Peter')}>About</Button>  &nbsp;&nbsp;&nbsp;
        </>
    )
};

export default Header;
