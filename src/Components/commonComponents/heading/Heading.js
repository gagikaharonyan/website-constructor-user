import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Heading.style';

function Heading (props) {
  const classes = useStyles();

  return (
    <>
      {props.variant === 'event' ? (
        <div className={classes.eventHeading}>
        {props.text}
      </div>
      ) : (
        <div className={classes.heading}>
            {props.text}
        </div>
      )}
    </>
  )
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;