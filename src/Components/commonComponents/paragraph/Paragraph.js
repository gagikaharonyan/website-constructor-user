import React from 'react';

import { useStyles } from './Paragraph.style';

function Paragraph (props) {
    const classes = useStyles();

    return (
        <div className={classes.paragraph}>
            {props.text}
        </div>
    )
}

export default Paragraph;