import React from "react";
import {Container, Row} from 'react-bootstrap';
import Header from "../header/header"

const UserLayout = (props) => {
    return (
        <Container fluid={true}>
            <Row style={{display: 'block'}}>
                <Header/>
            </Row>
            {props.children}
        </Container>
    )
}

export default UserLayout;
