import React from 'react';
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
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={20000}
      
    >
      {props.src.map(url => (
        <div data-src={url} />
      ))}
    </AutoplaySlider>
  )
  return (
    <div className={classes.sliderContainer}>
      {slider}
    </div>
  )
}

export default Slide;