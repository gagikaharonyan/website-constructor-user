import React, { useEffect } from "react";
import {Container, Row} from 'react-bootstrap';
import Header from "../Header";
import Footer from "../Footer"
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

    return (<div className={classes.App}>
                <Header/>
                {props.children}
                <Footer/>
            </div>)
}

const mapStateToProps = (state) => ({
    site: state.site
});

const mapDispatchToProps = (dispatch) => ({
    fetchSite: () => dispatch(fetchSite()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
