import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Quote.style';

function Quote (props) {
  const classes = useStyles();

  return (
    <div className={classes.quote}>
      <blockquote>{props.quote}</blockquote>
    </div>
  )
}

Quote.propTypes = {
  param: PropTypes.string.isRequired,
};
  
export default Quote;