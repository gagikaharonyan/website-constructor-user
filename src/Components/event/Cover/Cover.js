import React from 'react';

import { useStyles } from './Cover.style';


function Cover (props) {

    const classes = useStyles();

    return (
        
        <div className={classes.coverPhoto}>
            <div className={classes.layer}></div>
        </div>
    )
}

export default Cover;