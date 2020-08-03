import React from 'react';

import { useStyles } from './About.style';

function About ({aboutInfo}) {

  const [newInfo] = Object.keys(aboutInfo).map(key => aboutInfo[key])

  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
        <div className={classes.imageContainer}>
          <div className={classes.image} style={{backgroundImage: `url(${newInfo.avatar})`}}></div>
        </div>
        <div className={classes.aboutDetails}>
          <div className={classes.title}>
            About me
          </div>
          <div className={classes.description} dangerouslySetInnerHTML={{ __html: newInfo.description }}>
          </div>
        </div>
    </div>
  ) 
}

export default About;