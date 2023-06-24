import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer/Footer';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav/RightSideNav';

const Start = () => {
    return (
        <div>
            <Header></Header>
            <Container className='my-4'>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>

                    <Col lg="3">
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Start;