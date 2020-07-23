import React from 'react';
import Carousel from 'react-material-ui-carousel';

import SlideImage from './SlideImage';

import { useStyles } from './Slide.style';

function Slide (props) {

  const classes = useStyles();

  return (
    <div>
      <Carousel>
          {props.imgUrls.map(imgUrl => (
            <SlideImage img={imgUrl}/>
          ))}
      </Carousel>
    </div>
  )
}

export default Slide;