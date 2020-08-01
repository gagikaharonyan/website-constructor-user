import React from "react";
import {event2} from '../../customs';
import renderComponent from './renderComponent';

import { useStyles } from './Event.style';

function Event(props) {
    const _event = event2;
    const classes = useStyles();

    console.log(_event)
    return (
        <div className={`page ${classes.eventsContainer} `}>
            {renderComponent(_event)}
        </div>
    );
}

export default Event;