import React from 'react';

import {Date} from '../Date';
import {Timer} from '../Timer';
import {Location} from '../Location';
import Heading from '../../commonComponents/heading';

import { useStyles } from './Cover.style';

function Cover ({date, text, location, timer, src}) {

  const classes = useStyles();

  return (
      
    <div className={classes.coverPhoto} style={{backgroundImage: `url(${src})`}}>
      <div className={classes.layer}>
        <Date date={date} />
        <Heading  text={text} variant='event' />
        <Location location={location} />
        <Timer timer={timer} />
      </div>
    </div>
  )
}

export default Cover;