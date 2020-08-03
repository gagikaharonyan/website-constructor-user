import React from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import {useStyles} from './Location.style';

function Location (props){
    const classes = useStyles();
    return (
        <div className={classes.location}>
            <a href={props.location.mapLink} target="_blank" rel="noopener noreferrer" >
                <LocationOnIcon />
                <span>{props.location.address}</span>
            </a>
        </div>
    )
}

Location.propTypes = {
    location: PropTypes.string.isRequired,
};

export default Location;