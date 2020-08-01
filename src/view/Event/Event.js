import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {Cover} from '../../Components/event/Cover';
import { Slide } from '../../Components/commonComponents/Slide-v2';
import { Subscribe } from '../../Components/event/SubscribeForm';
import Paragraph from '../../Components/commonComponents/paragraph';


import {WithUserContextFireBase} from '../../firebase/context';

import { useStyles } from './Event.style';

function Event(props) {
    
    const param = useParams();
    const classes = useStyles();

    const [event, setEvent] = useState({isLoading: true, data: {}});

    useEffect(() => {
      props.fireBase.event(param.id).once('value')
      .then(res =>
        setEvent({
          isLoading: false, 
          data: res.val()
        })
      )
    },[])

    return (
      <>
        {event.isLoading ? (
          <div>loading</div>
        ) : (
          <div className={`page ${classes.eventsContainer} `}>

        <Cover 
          src={event.data.cover.url} 
          date={event.data.date} 
          text={event.data.heading}
          timer={event.data.dateBySeconds}
          location={event.data.location}
        />
        <div className={classes.eventContent}>
          <Paragraph text={event.data.details} variant='event'/>

          {event.slide && (<Slide src={event.data.slide} />)}
        </div>

        {/* <Subscribe invitationText={event.subscribe}/> */}
                    {/* {renderComponent(_event)} */}
        </div>
        )}
      </>
        
    );
}

export default WithUserContextFireBase(Event);