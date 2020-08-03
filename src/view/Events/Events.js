import React, {useState} from "react";
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import {connect} from 'react-redux';

import {EventCard} from '../../Components/events/EventCard';
import {Link} from 'react-router-dom';
import { useStyles } from './Events.style';

function Events(props) {
  const classes = useStyles();
  const [isLoading] = useState(true);
  const {events} = props;

  return (
    <div className={`page ${classes.root}`}>
      <div className={classes.eventsPageTitle}>Dont miss our Events</div>
      <div className={`page-width-container ${classes.eventsContainer}`}>
        {Object.keys(events.data).map(event =>
          <Link 
              key={uuid()} 
              to={`/event/${events.data[event].id}`}
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

Events.propTypes = {
  events: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Events);