import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import { useStyles } from './Slide.style';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slide (props) {
  const classes = useStyles();
  const slider = (
    <AutoplaySlider animation="scaleOutAnimation"
      play={true}
      cancelOnInteraction={false} 
      interval={20000}
      
    >
      {props.src.map(img => (
        <div key={uuid()} data-src={img.url} />
      ))}
    </AutoplaySlider>
  )
  return (
    <>
      {props.variant === 'event' ? (
        <div className={classes.eventSliderContainer}>
          {slider}
        </div>
      ) : (
        <div className={classes.sliderContainer}>
          {slider}
        </div>
      )}
    </>
  )
}

Slide.propTypes = {
  img: PropTypes.string.isRequired,
  src: PropTypes.array.isRequired
}

export default Slide;