import React, {useState, useEffect} from "react";
import uuid from 'react-uuid';

import {EventCard} from '../../Components/events';
import {Link} from 'react-router-dom';

import {getEventsInfo} from '../../client';

import { useStyles } from './Events.style';

function Events(props) {

  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  
  const [events, setEvents] = useState({isLoading: true, data: []});

  useEffect(() => {
      getEventsInfo((res) => {
          setEvents({isLoading: false, data: res.data})
      })
  },[])

  return (
    <div className={`page ${classes.root}`}>
      <div className={`page-width-container ${classes.eventsContainer}`}>
        {Object.keys(events.data).map(event =>
          <Link 
              key={uuid()} 
              to={`event/${events.data[event].id}`}
          >
            <EventCard src={events.data[event]} isLoading={isLoading}></EventCard>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Events;