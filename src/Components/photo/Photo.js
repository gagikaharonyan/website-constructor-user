import React from 'react';
import { CardMedia } from '@material-ui/core';

import { useStyles } from './Photo.style';

function Photo (props) {
  const classes = useStyles();

  return (
    <div className={classes.photoComponent}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        image={props.img}
        title="Contemplative Reptile"
      />
    </div>
  )
}

export default Photo;