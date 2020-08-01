import React from 'react';

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

export default Heading;