import React, {useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer'
import {connect} from 'react-redux';
import {fetchSite} from '../../store/actions/site';
import {SearchModal} from '../SearchModal';

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
                <SearchModal/>
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
