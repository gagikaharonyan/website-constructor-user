import React from 'react';
import PropTypes from 'prop-types';
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
Cover.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Cover;