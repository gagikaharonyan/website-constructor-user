import React from 'react';
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

export default SlideImage;