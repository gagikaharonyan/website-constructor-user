import React from "react";
import {events} from '../../customs';

import { useStyles } from './Events.style';

function Events(props) {

    const _events = events;
    const classes = useStyles();

    console.log(_events)
    return (
        <div className={`page ${classes.eventsContainer} `}>

            {/* <div className={classes.eventsContainer}> */}
                <h1>ՄԻջՈՑԱՌՈՒՄՆԵՐ</h1>

            {/* </div> */}
        </div>
    );
}

export default Events;