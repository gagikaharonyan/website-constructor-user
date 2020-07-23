import React from'react';
import uuid from 'react-uuid';
import {componentTypes as type} from '../../constants';

import Slide from '../../Components/post/slide';
import Heading from '../../Components/post/heading';
import Photo from '../../Components/post/photo';
import Paragraph from '../../Components/post/paragraph';

const renderComponent = (component) => {
    switch (component.type) {
        case type.SLIDE:
            return <Slide imgUrls={component.imgUrls} key={uuid()}/>
        case type.PARAGRAPH:
            return <Paragraph text={component.text} key={uuid()} />
        case type.VIDEO:
            return<h1 key={uuid()}>component</h1>
        case type.QUOTE:
            return <h1>component</h1>
        case type.HEADING:
            return <Heading text={component.text} key={uuid()} />
        case type.PHOTO:
            return <Photo img={component.imgUrl} key={uuid()} />
        default:
            return <h1 key={uuid()}>component</h1>
    }
}

export default renderComponent;