import React from 'react';

import { useStyles } from './Heading.style';

function Heading (props) {
    const classes = useStyles();

    return (
        <div className={classes.heading}>
            {props.text}
        </div>
    )
}

export default Heading;