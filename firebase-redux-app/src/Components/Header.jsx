import { Container, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { signOutAsync } from '../services/action/authentication';

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.authReducer);
    const handleLogout = () => {
        dispatch(signOutAsync())
    }
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Real-Estate</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                           {user ?  <Link to={"/add-property"}>Add property</Link> : ""}
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Navbar.Text>
                        {!user ? <Link className='btn btn-warning' to={"/signIn"}>SignIN</Link> : <div><Link>{user.email}</Link> <button onClick={handleLogout}>Logout</button></div>}
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;