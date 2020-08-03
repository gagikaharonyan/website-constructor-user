import React from 'react';
import PropTypes from 'prop-types';
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
      indicators={true}
      fullHeightHover={true}
      timeout={1000}
      strictIndexing={false}
      className={classes.styleImage}
    >
        {props.imgUrls.map(imgUrl => (

        <SlideImage img={props.variant === 'home' ? imgUrl.url : imgUrl} key={uuid()}/>
        ))}
    </Carousel>
  )
}

Slide.propTypes = {
  variant: PropTypes.string,
};

export default Slide;