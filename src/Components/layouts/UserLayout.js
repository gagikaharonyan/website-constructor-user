import React, {useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer'
import {connect} from 'react-redux';
import {fetchSite, fetchEvents, fetchPosts} from '../../store/actions';
import {SearchModal} from '../SearchModal';
import {useStyles} from './UserLayout.style';

const UserLayout = (props) => {
    const classes = useStyles();

    const loadSite = () => {
        const {site, events, posts} = props;
        props.site.isLoaded || props.fetchSite();
        if(site.isLoaded &&  !events.isLoaded) {
            props.fetchEvents();
        }
        if(events.isLoaded &&  !posts.isLoaded) {
            props.fetchPosts();
        }
    }

    useEffect(() => {
         loadSite();
    }, [props.site, props.events])

    window.scrollTo(0, 0)
    return (<div className={classes.App}>
                <Header/>
                <SearchModal/>
                {props.children}
                <Footer/>
            </div>)
}

const mapStateToProps = (state) => ({
    site: state.site,
    events: state.events,
    posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
    fetchSite: () => dispatch(fetchSite()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
