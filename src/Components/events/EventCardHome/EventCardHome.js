import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

import {cutText} from '../../../extentions/excerpt'
import {useStyles} from './EventCardHome.style';

function EventCardHome({event, loading = false}) {

  const classes = useStyles();

  return (
    <Link to={`/event/${event.id}`} className={classes.eventContent} key={uuid()}>
      {loading ? (
        <Skeleton animation="wave"  height={300} style={{ marginBottom: 15, width: "100%%" }} />
      ) : (
        <div 
        className={classes.eventImage} 
        style={{backgroundImage: `url(${event.cover.url})`}}
        >
        </div>
      )}
      <div className={classes.eventTitle}>
        {loading ? (
        <Skeleton animation="wave"  height={20} style={{ marginBottom: 15, width: "100%%" }} />
        ) : (
          <>
            {cutText(event.heading, 50)}
          </>
        )}
      </div>
    </Link>
  )
}

EventCardHome.propTypes = {
  event: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default EventCardHome;