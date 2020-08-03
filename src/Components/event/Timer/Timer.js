import React from 'react';
import PropTypes from 'prop-types';
import {useStyle} from './Timer.style';
import Time from 'react-compound-timer'

function Timer(props) {
  const classes = useStyle();

  return(
    <div className={classes.root}>
      <Time
        initialTime={Date.parse(props.timer) - Date.now()}
        direction="backward"
      >
        {() => (
          <div className={classes.timer}>
            <div className={classes.timerCol}>
              <span className={classes.digit}>
                  <Time.Days />
              </span>
              <span>days</span>
            </div>
            <div className={classes.timerCol}>
              <span className={classes.digit}>
                  <Time.Hours />
              </span>
              <span>hours</span>
            </div>
            <div className={classes.timerCol}>
              <span className={classes.digit}>
                  <Time.Minutes />
              </span>
              <span>min</span>
            </div>
            <div className={classes.timerCol}>
              <span className={classes.digit}>
                  <Time.Seconds />
              </span>
              <span>sec</span>
            </div>
          </div>
        )}
      </Time>
    </div>
  );
}

Timer.propTypes = {
    timer: PropTypes.string.isRequired,
};

export default Timer;