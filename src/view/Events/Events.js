import React, {useState} from "react";
import {events} from '../../customs';
import {EventCard} from '../../Components/events';
import {Link} from 'react-router-dom';

import { useStyles } from './Events.style';

function Events(props) {

    const _events = events;
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);


    setTimeout(() => {
        setIsLoading(false);
    }, 1000)
   
    return (
        <div className={`page page-width-container ${classes.root}`}>
            {_events.map((event, _index) => <Link to={`event/${event.title}`}><EventCard index={_index} src={event} isLoading={isLoading}></EventCard></Link>)}
        </div>
    );
}

export default Events;