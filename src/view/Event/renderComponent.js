import React from'react';
import {Cover} from '../../Components/event/Cover';
import { Slide } from '../../Components/commonComponents/Slide-v2';
import { Subscribe } from '../../Components/event/SubscribeForm';
import Paragraph from '../../Components/commonComponents/paragraph';


const renderComponent = (component) => {
  return (
    <>
      <Cover 
        src={component.cover.url} 
        date={component.date} 
        text={component.heading}
        timer={component.dateBySeconds}
        location={component.location}
      />
        <Paragraph text={component.paragraph} />

        {component.slide && (<Slide src={component.slide} />)}

      <Subscribe invitationText={component.subscribe}/>

    </>
  )
}

export default renderComponent;