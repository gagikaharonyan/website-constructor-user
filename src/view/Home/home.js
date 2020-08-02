import React, { useState } from "react";
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {connect} from 'react-redux';
import {PostCard} from '../../Components/posts';
import Slide from '../../Components/commonComponents/Slide';
import {posts as _posts, events as _events, homeSlide as _slide} from '../../customs';

import { cutText } from '../../extentions/excerpt';

import {useStyles} from './Home.style';

const Home = (props) => {
    const newPosts = _posts.slice(0, 6);
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(newPosts);
    const classes = useStyles();
    const {events} = props;
    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    console.log(props.events)

    return (
        <>
        <div className={classes.slideContainer}>
            <Slide imgUrls={_slide} />
        </div>
        <div className={`page page-width-container ${classes.homeContainer}`}>
            <div className={classes.postsContainer}>
                <h2 className={classes.latestPosts}>Latest Posts</h2>
                <div className={classes.posts}>
                {posts.map(post => (
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
                        <Link to={`/event/${event.id}`} className={classes.eventContent} key={uuid()}>
                            <div 
                                className={classes.eventImage} 
                                style={{backgroundImage: `url(${event.cover.url})`}}
                            >
                            </div>
                            <div className={classes.eventTitle}>
                                {cutText(event.heading, 50)}
                            </div>
                        </Link>
                       
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
});
  
export default connect(mapStateToProps)(Home);