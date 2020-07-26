import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Location (props){
    return (
        <div>
            <a href={props.location} target="_blank" rel="noopener noreferrer" >
                <LocationOnIcon />
                <span>{props.address}</span>
            </a>
        </div>
    )
}

export default Location;