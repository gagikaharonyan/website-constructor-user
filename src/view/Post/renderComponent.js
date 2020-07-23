import React from'react';
import {componentTypes as type} from '../../constants';

import Slide from '../../Components/slide';
import Heading from '../../Components/heading';

const renderComponent = (component) => {
    switch (component.type) {
        case type.SLIDE:
            return <Slide imgUrls={component.imgUrls}/>
        case type.PARAGRAPH:
            return <h1>component</h1>
        case type.VIDEO:
            return<h1>component</h1>
        case type.QUOTE:
            return <h1>component</h1>
        case type.HEADING:
            return <Heading text={component.text} />
        case type.PHOTO:
            return <h1>component</h1>
        default:
            return <h1>component</h1>
    }
}

export default renderComponent;