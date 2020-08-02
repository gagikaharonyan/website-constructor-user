import React, {useState, useEffect} from "react";
import uuid from 'react-uuid';
import {connect} from 'react-redux';
import {EventCard} from '../../Components/events';
import {Link} from 'react-router-dom';
import {getEventsInfo} from '../../client';
import { useStyles } from './Events.style';

function Events(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const {events} = props;

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

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps)(Events);