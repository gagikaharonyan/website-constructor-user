import React from'react';
import uuid from 'react-uuid';
import {componentTypes as type} from '../../constants';
import {Timer, Subscribe} from '../../Components/events';

const renderComponent = (component) => {
    switch (component.type) {
        case type.HEADING:
            return <h1>heading</h1>
        case type.TIMER:
            return <Timer></Timer>
        case type.LOCATION:
            return <h1>Locatio </h1>
        case type.SLIDE:
            return <h1>Slide </h1>
        case type.SUBSCRIBE:
            return <h1>SUBSCRIBE </h1>
        case type.PHOTO:
            
        default:
            return 
    }
}

export default renderComponent;