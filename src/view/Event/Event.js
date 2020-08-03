import React from "react";
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import Skeleton from '@material-ui/lab/Skeleton';

import {Cover} from '../../Components/event/Cover';
import { Slide } from '../../Components/commonComponents/Slide-v2';
import { Subscribe } from '../../Components/event/SubscribeForm';
import Paragraph from '../../Components/commonComponents/paragraph';

import { useStyles } from './Event.style';

function Event(props) { 

  const param = useParams();
  const classes = useStyles();

  const [event] = Object.values(props.events).filter(val => (val.id === param.id));

  return (
    <>
      {props.loaded ? (
        <div className={`page ${classes.eventsContainer} `}>
        <Cover 
          src={event.cover.url} 
          date={event.date} 
          text={event.heading}
          timer={event.dateBySeconds}
          location={event.location}
        />
        <div className={classes.eventContent}>
          <Paragraph text={event.details} variant='event'/>
          {event.slide && (<Slide src={event.slide} />)}
        </div>

        <Subscribe invitationText=''/>
        </div>
      ): (
        <>
        <Skeleton animation="wave" variant="rect" style={{width: "100%", height: 600 }} />
        <div className={classes.eventSkeletonContent}>
          <div>
          <Skeleton animation="wave" variant="text" height={20} style={{ margin: '30px 5px', width: 400}} />
          <Skeleton animation="wave" variant="text" height={20} style={{ margin: '30px 5px', width: 400}} />
          <Skeleton animation="wave" variant="text" height={20} style={{ margin: '30px 5px', width: 400}} />
          <Skeleton animation="wave" variant="text" height={20} style={{ margin: '30px 5px', width: 400}} />
          <Skeleton animation="wave" variant="text" height={20} style={{ margin: '30px 5px', width: 400}} />
          <Skeleton animation="wave" variant="text" height={20} style={{ margin: '30px 5px', width: 400}} />
          <Skeleton animation="wave" variant="text" height={20} style={{ margin: '30px 5px', width: 400}} />

          </div>
          <Skeleton animation="wave" variant='rect' height={300} style={{ margin: '30px 5px', width: 400 }} />
        </div>
        
        </>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    events: state.events.data,
    loaded: state.events.isLoaded
  }
}

export default connect(mapStateToProps)(Event);