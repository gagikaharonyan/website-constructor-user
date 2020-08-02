import React from 'react';
import {useStyle} from './Timer.style';
import Time from 'react-compound-timer'

export function Timer(props) {
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
                            <span>minutes</span>
                        </div>
                        <div className={classes.timerCol}>
                            <span className={classes.digit}>
                                <Time.Seconds />
                            </span>
                            <span>seconds</span>
                        </div>
                    </div>
                )}
            </Time>
        </div>
    );
}