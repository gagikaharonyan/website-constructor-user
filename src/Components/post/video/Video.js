import React from 'react';

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

export default Video;