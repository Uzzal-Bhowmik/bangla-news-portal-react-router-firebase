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
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="7">
                        <h2>I change with the link path</h2>
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