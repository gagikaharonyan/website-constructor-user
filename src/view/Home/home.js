import React, { useState, useEffect } from "react";
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {connect} from 'react-redux';

import {EventCardHome} from '../../Components/events/EventCardHome';
import {PostCard} from '../../Components/posts';
import Slide from '../../Components/commonComponents/Slide';

import {posts as _posts, events as _events, homeSlide as _slide} from '../../customs';

import { cutText } from '../../extentions/excerpt';
import {getSlider} from '../../client';

import {useStyles} from './Home.style';

const Home = (props) => {
    // const newPosts = props.posts.slice(0, 6);
    const [isLoading, setIsLoading] = useState(true);

    const [slider, setSlider] = useState({isLoading: false, data: []})
    const classes = useStyles();

    const {events} = props;

    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    useEffect(() => {
        getSlider(res => {
            setSlider({isLoading: false, data: res.data})
        })
    }, []);

    return (
        <>
        <div className={classes.slideContainer}>
            {console.log(slider, 69699)}
            <Slide imgUrls={slider.data} loading={isLoading}/>
        </div>
        {console.log(props.posts, props.events, 50000)}
        <div className={`page page-width-container ${classes.homeContainer}`}>
            <div className={classes.postsContainer}>
                <h2 className={classes.latestPosts}>Latest Posts</h2>
                <div className={classes.posts}>
                {Object.values(props.posts).slice(0,6).map(post => (
                    <Link to={`post/${post.title}`} target='_blank' key={uuid()} >
                        <PostCard src={post} loading={isLoading}/>
                    </Link>
                ))}
                </div>
                <div className={classes.seeMore}>
                    <Link to='/posts'>
                        See more posts 
                        <ArrowRightAltIcon />
                    </Link>
                </div>
            </div>
            <div className={classes.eventsContainer}>
                <h2 className={classes.newEvents}>New events</h2>
                <div className={classes.events}>
                    {Object.values(events).map(event => (
                        <EventCardHome 
                            event={event} 
                            loading={isLoading}
                            key={uuid()} />
                    ))}
                </div>
                <div className={classes.seeMore}>
                    <Link to='/events'>
                        See more events 
                        <ArrowRightAltIcon />
                    </Link>
                </div>
            </div>
        </div>
        </>)
}

const mapStateToProps = (state) => ({
    events: state.events.data,
    eventsLoaded: state.events.isLoaded,
    posts: state.posts.data,
    postsLoaded: state.posts.isLoading
});
  
export default connect(mapStateToProps)(Home);