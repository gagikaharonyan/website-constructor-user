import React from 'react';
import uuid from 'react-uuid';
import {useStyle} from './ContactInfos.style';
import {contactInfoTypes as type} from '../../constants';

export function ContactInfos(props) {
    const classes = useStyle();
    console.log(props.infos)
    
    return(
        <div className={classes.root}>
            {props.infos.map(renderInfo)}
        </div>)

function renderInfo(info) {
    switch (info.type) {
        case type.EMAIL:
            return <div key={uuid()} className={classes.info}>
                    <i className="fas fa-envelope"></i><span className={classes.infoText}>{info.text}</span>
                </div>

        case type.LOCATION:
            return <div key={uuid()} className={classes.info}>
                    <i className="fas fa-map-marker-alt"></i><span className={classes.infoText}>{info.text}</span>
                </div>
            
        case type.PHONE_NUMBER:
            return <div key={uuid()} className={classes.info}>
                    <i className="fas fa-phone-alt"></i><span className={classes.infoText}>{info.text}</span>
                </div>
    
        default:
            break;
    }
}
}

