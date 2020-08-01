import React from "react";
import {event2} from '../../customs';
import {Cover} from '../../Components/event/Cover';
import { Slide } from '../../Components/commonComponents/Slide-v2';
import { Subscribe } from '../../Components/event/SubscribeForm';
import Paragraph from '../../Components/commonComponents/paragraph';
import renderComponent from './renderComponent';

import { useStyles } from './Event.style';

function Event(props) {
    const event = event2;
    const classes = useStyles();

    return (
        <div className={`page ${classes.eventsContainer} `}>
            <Cover 
                src={event.cover.url} 
                date={event.date} 
                text={event.heading}
                timer={event.dateBySeconds}
                location={event.location}
            />
            <div className={classes.eventContent}>
                <Paragraph text={event.paragraph} />

                {event.slide && (<Slide src={event.slide} />)}
            </div>

            <Subscribe invitationText={event.subscribe}/>
                    {/* {renderComponent(_event)} */}
        </div>
    );
}

export default Event;