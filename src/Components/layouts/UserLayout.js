import React, { useEffect } from "react";
import {Container, Row} from 'react-bootstrap';
import Header from "../Header/Header";
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

    return (<>
                <Row>
                    <Header/>
                </Row>
                {props.children}
            </>)
}

const mapStateToProps = (state) => ({
    site: state.site
});

const mapDispatchToProps = (dispatch) => ({
    fetchSite: () => dispatch(fetchSite()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
