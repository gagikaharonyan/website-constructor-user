import React from 'react';
import uuid from 'react-uuid';
import Carousel from 'react-material-ui-carousel';

import SlideImage from './SlideImage';
import { useStyles } from './Slide.style';

function Slide (props) {
  const classes = useStyles();
  return (
    
      <Carousel 
        animation='fade'
        interval={5000}
        indicators={false}
        fullHeightHover={true}
        timeout={1000}
        className={classes.styleImage}
      >
          {props.imgUrls.map(imgUrl => (
            <SlideImage img={imgUrl.url} key={uuid()}/>
          ))}
      </Carousel>
  )
}

export default Slide;