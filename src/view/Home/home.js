import React, { useState, useEffect } from "react";
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import {EventCardHome} from '../../Components/events/EventCardHome';
import {PostCard} from '../../Components/posts';
import Slide from '../../Components/commonComponents/Slide';
import PostItemLoading from '../../Components/Loading/PostItemLoading';

import {getSlider} from '../../client';

import {useStyles} from './Home.style';

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [slider, setSlider] = useState({isLoading: false, data: []})
  const classes = useStyles();

  const {events, posts} = props;

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
          <Slide variant='home' imgUrls={slider.data} loading={isLoading}/>
      </div>
      <div className={`page page-width-container ${classes.homeContainer}`}>
        <div className={classes.postsContainer}>
          <h2 className={classes.latestPosts}>Latest Posts</h2>

          <div className={classes.posts}>
              { props.postsLoaded ? (
                <>
                  {Object.values(posts).reverse().slice(0,6).map(post => (
                    <Link to={`post/${post.id}`} target='_blank' key={uuid()} >
                      <PostCard src={post} loading={isLoading}/>
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  <PostItemLoading />
                  <PostItemLoading />
                  <PostItemLoading />
                  <PostItemLoading />
                  <PostItemLoading />
                  <PostItemLoading />
                </>
              )}
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
              {Object.values(events).slice(0,4).map(event => (
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
    </>
  )
}

const mapStateToProps = (state) => ({
    events: state.events.data,
    eventsLoaded: state.events.isLoaded,
    posts: state.posts.data,
    postsLoaded: state.posts.isLoaded,
});

Home.propTypes = {
    events: PropTypes.object.isRequired,
    eventsLoaded: PropTypes.bool,
    posts: PropTypes.object.isRequired,
    postsLoaded: PropTypes.bool,
};
  
export default connect(mapStateToProps)(Home);