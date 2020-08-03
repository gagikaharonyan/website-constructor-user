import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Video.style';

function Video (props) {
  const classes = useStyles();

  return (
    <div className={classes.video}>
      <iframe 
        title='video'
        src={`https://www.youtube.com/embed/${props.param}`}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  )
}

Video.propTypes = {
  param: PropTypes.string.isRequired,
};


export default Video;