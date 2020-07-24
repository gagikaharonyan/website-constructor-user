import React, {useEffect, useState} from 'react';
import {useStyle} from './ContactInfos.style';
import {contactInfoTypes as type} from '../../constants';

export function ContactInfos(props) {
    const classes = useStyle();
    
    return(
        <div className={classes.root}>
            {props.infos.map(renderInfo)}
        </div>)

function renderInfo(info) {
    switch (info.type) {
        case type.EMAIL:
            return <div className={classes.info}>
                    <i class="fas fa-envelope"></i><span className={classes.infoText}>{info.text}</span>
                </div>

        case type.LOCATION:
            return <div className={classes.info}>
                    <i class="fas fa-map-marker-alt"></i><span className={classes.infoText}>{info.text}</span>
                </div>
            
        case type.PHONE_NUMBER:
            return <div className={classes.info}>
                    <i class="fas fa-phone-alt"></i><span className={classes.infoText}>{info.text}</span>
                </div>
    
        default:
            break;
    }
}
}

