import React from 'react';

import { useStyles } from './Quote.style';

function Quote (props) {
    const classes = useStyles();

    return (
        <div className={classes.quote}>
            <blockquote>{props.quote}</blockquote>
        </div>
    )
}

export default Quote;