import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../../assets/react.svg';
import LeftSideNav from '../../LeftSideNav/LeftSideNav/LeftSideNav';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" className='d-flex justify-content-between align-items-center'>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                    />{' '}
                    <span className='fw-bold fs-4 ms-2'>BanglaNews24/7</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-dark'>All News</Nav.Link>
                        <Nav.Link href="#link" className='text-dark'>Link</Nav.Link>

                        <NavDropdown title="News Categories" id="basic-nav-dropdown" className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;