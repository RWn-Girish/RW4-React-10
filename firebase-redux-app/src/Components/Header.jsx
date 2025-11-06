import { Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const Header = () => {
    const { user } = useSelector(state => state.authReducer);
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
                    <Navbar.Text>
                        {!user ? <Link className='btn btn-warning' to={"/signIn"}>SignIN</Link> : <div><Link>{user.email}</Link> <button>Logout</button></div>}
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;