import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import { useStyles } from './Slide.style';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slide (props) {
  console.log(props.src, 58588)
  const classes = useStyles();
  const slider = (
    <AutoplaySlider animation="scaleOutAnimation"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={20000}
      
    >
      {props.src.map(img => (
        <div data-src={img.url} />
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