import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../../assets/react.svg';
import LeftSideNav from '../../LeftSideNav/LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

function Header() {
    const { user, logOut } = useContext(AuthContext);

    // sign out method
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(e => { console.error(e) })
    }

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
                                {user ?
                                    (user?.photoURL ?
                                        <Image
                                            src={user.photoURL}
                                            style={{ height: "30px" }}
                                            roundedCircle
                                        ></Image>

                                        : <Image
                                            src="https://cdn-icons-png.flaticon.com/512/20/20116.png"
                                            style={{ height: "30px", border: "1px solid lightGrey", borderRadius: "50%", padding: "3px" }}
                                        ></Image>
                                    )
                                    :
                                    <span className='m-0 fw-bold pe-1'>Menu</span>
                                }
                            </a>
                            <ul className="dropdown-menu" style={{ right: "0", left: "auto" }}>
                                {user ?
                                    <div className='px-2' style={{ width: "fitContent" }}>
                                        <li className='fw-bold'>{user?.displayName || user?.email}</li>

                                        <Button variant='primary mt-2' onClick={handleSignOut}>Sign Out</Button>
                                    </div>
                                    :
                                    <div className='container text-center'>
                                        <Link to="/login">
                                            <Button variant='primary mb-3'>Login</Button>
                                        </Link>
                                        <br />
                                        <Link to="/register">
                                            <Button variant='primary'>Register</Button>
                                        </Link>
                                    </div>
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