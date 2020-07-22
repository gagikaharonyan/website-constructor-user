import React from "react";
import {Row} from 'react-bootstrap';
import images from "../../images";

const Home = (props) => {
    return (
        <>
            <Row>
                <img style={{margin: "0 auto"}} src={images.welcomePng} alt=""/>
            </Row>
        </>
    )
}

export default Home