import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
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
      <div data-src="https://as00.epimg.net/img/les/20200229/dea084f2530b36689bdb17e63b4f198f/69d914a4ff7cb78c31abd19e73eba0ca_720.png" />
      <div data-src="https://as01.epimg.net/en/imagenes/2020/02/28/football/1582900958_522512_1582901120_noticia_normal_recorte1.jpg" />
      <div data-src="https://en.as.com/en/imagenes/2020/02/29/football/1582969808_951576_1582969867_noticia_normal_recorte1.jpg" />
    </AutoplaySlider>
  )
  return (
    <div className={classes.sliderContainer}>
      {slider}
    </div>
  )
}

export default Slide;