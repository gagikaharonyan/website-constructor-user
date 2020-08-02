import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {Cover} from '../../Components/event/Cover';
import { Slide } from '../../Components/commonComponents/Slide-v2';
import { Subscribe } from '../../Components/event/SubscribeForm';
import Paragraph from '../../Components/commonComponents/paragraph';


// import {WithUserContextFireBase} from '../../firebase/context';

import { useStyles } from './Event.style';

function Event(props) { 

    const param = useParams();
    const classes = useStyles();

    const [event] = Object.values(props.events).filter(val => (val.id === param.id));

    return (
      <>
        {props.loading ? (
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
  
          {/* <Subscribe invitationText={event.subscribe}/>
                       {renderComponent(_event)} */}
          </div>
        ): (
          'loading'
        )}
          
      
      </>
        
    );
}

const mapStateToProps = state => {
  // it simply returns an object
  return {
    events: state.events.data,
    loading: state.events.isLoaded
  }
}

export default connect(mapStateToProps)(Event)

// export default WithUserContextFireBase(Event);