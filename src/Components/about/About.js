import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import { useStyles } from './About.style';

function About (props) {
    const classes = useStyles();

    return (
      <div className={classes.aboutContainer}>
         <div className={classes.image}>
           <img 
              src="https://www.welcometobratislava.eu/wp-content/uploads/2018/10/photo.jpg" 
              alt="avatar"
              className={classes.avatar}
            >
            </img>
         </div>
         <div className={classes.aboutDetails}>
            <div className={classes.title}>
              About me
            </div>
            <div className={classes.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
         </div>
      </div>
    )
    
}

export default About;