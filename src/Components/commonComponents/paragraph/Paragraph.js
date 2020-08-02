import React from 'react';

import { useStyles } from './Paragraph.style';

function Paragraph (props) {
    const classes = useStyles();

    return (
        <>
        {props.variant === 'event' ? (
            <div className={classes.eventParagraph} dangerouslySetInnerHTML={{ __html: props.text }}>
                
            </div>
        ): (
            <div className={classes.paragrapհ}>
                <div dangerouslySetInnerHTML={{ __html: props.text }}>
                </div>
            </div>
        )}
        
        </>
    )
}

export default Paragraph;