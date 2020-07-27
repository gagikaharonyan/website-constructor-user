import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {PostCard} from '../../Components/posts';
import Slide from '../../Components/commonComponents/Slide';
import {posts as _posts, events as _events, homeSlide as _slide} from '../../customs';

import {useStyles} from './Home.style';

const Home = (props) => {

    const newPosts = _posts.slice(0, 6);
    const newEvents = _events.slice(0,4);
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(newPosts);
    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    const classes = useStyles();

    return (
        <>
            <div className={classes.slideContainer}>
                <Slide imgUrls={_slide} />
            </div>
        <Container maxWidth='lg'>
            <div className={classes.postsContainer}>
                <h2 className={classes.latestPosts}>Latest Posts</h2>
                <div className={classes.posts}>
                {posts.map(post => (
                    <PostCard src={post} loading={isLoading}/>
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
                    {newEvents.map(event => (
                        <div className={classes.eventContent}>
                            <img src={event.imgUrl} alt='event' className={classes.eventImage}></img>
                            <div className={classes.eventTitle}>{event.title}</div>
                        </div>
                    ))

                    }
                </div>
                <div className={classes.seeMore}>
                    <Link to='/events'>
                        See more events 
                        <ArrowRightAltIcon />
                    </Link>
                </div>
            </div>
        </Container>
        </>
        
    )
}

export default Home;