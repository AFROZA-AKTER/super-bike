
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import img from '../../banner/logo.png'
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (

    <>
      <Navbar style={{ backgroundColor: "#1BA370" }} sticky="top" variant="dark outline-secondary" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={img} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={{ fontWeight: '500' }} className="text-light" as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link style={{ fontWeight: '500' }} className="text-light" as={HashLink} to="/explore">Explore</Nav.Link>
            <Nav.Link style={{ fontWeight: '500' }} className="text-light" as={HashLink} to="/home#reviews">Reviews</Nav.Link>
            {/* <Nav.Link style={{ fontWeight: '500' }} className="text-muted" as={HashLink} to="/dashboard">DASHBOARD</Nav.Link> */}
            {
              user.email ?
                <div>
                  <Nav.Link onClick={logOut} className="fw-bold mx-3" style={{ color: "black" }}>LOGOUT</Nav.Link>
                  <Nav.Link className=" fw-bold mx-3" style={{ color: "black" }} as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                  <Navbar.Text className="fw-bold mx-4">
                    Signed in as: <a href="#login" >{user.displayName}</a>
                  </Navbar.Text>
                </div>
                :
                <div>
                  <Nav.Link style={{ fontWeight: '500' }} className="text-light" as={Link} to="/login">LOGIN</Nav.Link>
                  <Nav.Link style={{ fontWeight: '500' }} className="text-light" as={Link} to="/signup">SIGN UP</Nav.Link>
                </div>

            }

          </Navbar.Collapse>
          <Nav className="me-auto">

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;