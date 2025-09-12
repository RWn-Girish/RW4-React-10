import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const Header = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Zepto Clone App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link className='btn bg-warning' to={"/add-product"}>Add Product</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;