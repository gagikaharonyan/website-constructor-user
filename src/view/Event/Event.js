import React from "react";
import {event} from '../../customs';
import renderComponent from './renderComponent';

import { useStyles } from './Event.style';

function Event(props) {
    const _event = event;
    const classes = useStyles();

    console.log(_event)
    return (
        <div className={`page ${classes.eventsContainer} `}>
            {/* <div className={classes.eventsContainer}> */}
                {_event.map(renderComponent)}

            {/* </div> */}
        </div>
    );
}

export default Event;