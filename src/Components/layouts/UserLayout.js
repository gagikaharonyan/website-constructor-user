import React, { useEffect } from "react";
import {Container, Row} from 'react-bootstrap';
import Header from "../header/Header"
import {connect} from "react-redux";
import {fetchSite} from "../../store/actions/site"

const UserLayout = (props) => {
    const loadSite = () => {
        props.site.isLoaded || props.fetchSite();
    }

    useEffect(() => {
        loadSite();
    }, [])

    return (
        <Container fluid={true}>
            <Row style={{display: 'block'}}>
                <Header/>
            </Row>
            {props.children}
        </Container>
    )
}

const mapStateToProps = (state) => ({
    site: state.site
});

const mapDispatchToProps = (dispatch) => ({
    fetchSite: () => dispatch(fetchSite()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
