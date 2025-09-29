import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router';

const Header = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Real-Estate</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-start">
                <Navbar.Text>
                    <Link to={"/add-property"}>Add property</Link>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
};

export default Header;