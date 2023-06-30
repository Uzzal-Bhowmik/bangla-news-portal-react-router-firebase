import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../../assets/react.svg';
import LeftSideNav from '../../LeftSideNav/LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

function Header() {
    const { user } = useContext(AuthContext);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" className='text-decoration-none'>
                    <Navbar.Brand className='d-flex justify-content-between align-items-center'>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                        />{' '}
                        <span className='fw-bold fs-4 ms-2'>BanglaNews24/7</span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-dark'>All News</Nav.Link>
                        <Nav.Link href="#link" className='text-dark'>Link</Nav.Link>

                        <NavDropdown title="News Categories" id="basic-nav-dropdown" className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user?.photoURL ?
                                    <Image
                                        src={user.photoURL}
                                        style={{ height: "30px" }}
                                        roundedCircle
                                    ></Image>

                                    : <Image
                                        src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                                        style={{ height: "30px" }}
                                        roundedCircle
                                    ></Image>
                                }
                            </a>
                            <ul className="dropdown-menu" style={{ right: "0", left: "auto" }}>
                                {user ?
                                    <li className='fw-bold ms-3'>{user?.displayName || user?.email}</li>
                                    :
                                    <p className='ms-3 mb-0'>Please Login First!</p>
                                }
                            </ul>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;