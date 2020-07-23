import React, { useEffect } from "react";
import {Container, Row} from 'react-bootstrap';
import Header from "../header/header"
import {connect} from "react-redux";
import {fetchSite} from "../../store/actions/site";

import { useStyles } from './UserLayout.style';

const UserLayout = (props) => {

    const classes = useStyles();

    const loadSite = () => {
        props.site.isLoaded || props.fetchSite();
    }

    useEffect(() => {
        loadSite();
    }, [])

    return (
        <Container fluid={true} className={classes.mainContainer}>
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
