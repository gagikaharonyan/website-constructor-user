import React from'react';
import {componentTypes as type} from '../../constants';

const renderComponent = (component) => {
    switch (component.type) {
        case type.SLIDE:
            return <h1>component</h1>
            break;
        case type.PARAGRAPH:
            return <h1>component</h1>
            break;
        case type.VIDEO:
            return<h1>component</h1>
            break;
        case type.QUOTE:
            return <h1>component</h1>
            break;
        case type.HEADING:
            return <h1>component</h1>
        break;
        case type.PHOTO:
            return <h1>component</h1>
            break;
        default:
            return <h1>component</h1>
            break;
    }
}

export default renderComponent;