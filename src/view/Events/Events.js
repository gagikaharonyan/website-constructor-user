import React from "react";
import {event} from '../../customs';
import renderComponent from './renderComponent';

import { useStyles } from './Events.style';

function Events(props) {
    const _event = event;
    const classes = useStyles(); 

    console.log(_event)
    return (
        <div className={`page ${classes.eventsContainer} `}>
            {_event.map(renderComponent)}
        </div>
    );
}

export default Events;