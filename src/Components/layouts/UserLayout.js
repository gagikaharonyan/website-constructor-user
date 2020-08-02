import React, {useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer'
import {connect} from 'react-redux';
import {fetchSite, fetchEvents} from '../../store/actions';
import {SearchModal} from '../SearchModal';
import {useStyles} from './UserLayout.style';

const UserLayout = (props) => {
    const classes = useStyles();

    const loadSite = () => {
        const {site, events} = props;
        props.site.isLoaded || props.fetchSite();
        if(site.isLoaded &&  !events.isLoaded) {
            props.fetchEvents();
        }
    }

    useEffect(() => {
         loadSite();
    }, [props.site, props.events])

    return (<div className={classes.App}>
                <Header/>
                <SearchModal/>
                {props.children}
                <Footer/>
            </div>)
}

const mapStateToProps = (state) => ({
    site: state.site,
    events: state.events
});

const mapDispatchToProps = (dispatch) => ({
    fetchSite: () => dispatch(fetchSite()),
    fetchPosts: () => {},
    fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
