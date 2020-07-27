import React from'react';
import uuid from 'react-uuid';
import {componentTypes as type} from '../../constants';
import {Timer} from '../../Components/event/Timer';
import { Slide } from '../../Components/commonComponents/Slide-v2';
import { Location } from '../../Components/event/Location';
import { Subscribe } from '../../Components/event/SubscribeForm';
import Heading from '../../Components/commonComponents/heading'

const renderComponent = (component) => {
    switch (component.type) {
        case type.HEADING:
            return <Heading text={component.text} />
        case type.TIMER:
            return <Timer key={uuid()}></Timer>
        case type.LOCATION:
            return <Location 
                        location={component.location} 
                        address={component.address} 
                        key={uuid()} 
                    />
        case type.SLIDE:
            return <Slide src={component.src} key={uuid()} />
        case type.SUBSCRIBE:
            return <Subscribe invitationText={component.invitationText}></Subscribe>
        case type.PHOTO:
            return <h1>Photo </h1>
        default:
            return 
    }
}

export default renderComponent;