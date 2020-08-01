import React from 'react';

import { useStyles } from './Date.style';

function Date (props) {

    const classes = useStyles();

    return (
        <div className={classes.date}>
            {props.date}
        </div>
    )
} 

export default Date;