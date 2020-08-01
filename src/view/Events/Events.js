import React, {useState, useEffect} from "react";
import uuid from 'react-uuid';

import {events} from '../../customs';
import {EventCard} from '../../Components/events';
import {Link} from 'react-router-dom';

import {getEventsInfo} from '../../client';

import { useStyles } from './Events.style';

function Events(props) {

    // const _events = events;
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    
    const [events, setEvents] = useState({isLoading: true, data: []});

    useEffect(() => {
        getEventsInfo((res) => {
            setEvents({isLoading: false, data: res.data})
        })
    },[])

    // setTimeout(() => {
    //     setIsLoading(false);
    //     console.log(ev)

    // }, 1000)
   
    return (
        <div className={`page ${classes.root}`}>
            <div className={`page-width-container ${classes.eventsContainer}`}>
            {Object.keys(events.data).map(event =>
                <Link to={`event/${events.data[event].heading}`}>
                    <EventCard src={events.data[event]} isLoading={isLoading}></EventCard>
                </Link>
            )}
            </div>
        </div>
    );
}

export default Events;