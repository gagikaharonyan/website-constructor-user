import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {connect} from 'react-redux';
import {PostCard} from '../../Components/posts';
import Slide from '../../Components/commonComponents/Slide';
import {posts as _posts, events as _events, homeSlide as _slide} from '../../customs';

import {useStyles} from './Home.style';

const Home = (props) => {
    const newPosts = _posts.slice(0, 6);
    const newEvents = _events.slice(0,4);
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
                    <Link to={`post/${post.title}`} target='_blank' >
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
                    {Object.keys(events.data).map(key => (
                        <Link to={`/event/${key}`} className={classes.eventContent}>
                            <div 
                                className={classes.eventImage} 
                                style={{backgroundImage: `url(${events.data[key].imageUrl})`}}
                            >
                            </div>
                            <div className={classes.Title}>
                                {events.data[key].heading.length > 50 ? (
                                    events.data[key].heading.substring(0,50) + '...'
                                ) : (
                                    events.data[key].heading
                                )}
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
    events: state.events
});
  
export default connect(mapStateToProps)(Home);