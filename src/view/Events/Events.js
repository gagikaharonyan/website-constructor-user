import React from "react";
import {event} from '../../customs';
import renderComponent from './renderComponent';

function Events(props) {
    const _event = event;

    console.log(_event)
    return (
        <div className={'page '}>
            {_event.map(renderComponent)}
        </div>
    );
}

export default Events;