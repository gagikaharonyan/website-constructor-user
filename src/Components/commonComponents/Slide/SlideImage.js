import React from 'react';
import PropTypes from 'prop-types';
import {Paper, CardMedia} from '@material-ui/core'

function SlideImage (props) {
  return (
    <Paper>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        image={props.img}
        title="Contemplative Reptile"
      />
    </Paper>
  )
}

SlideImage.propTypes = {
  img: PropTypes.string.isRequired,
};

export default SlideImage;