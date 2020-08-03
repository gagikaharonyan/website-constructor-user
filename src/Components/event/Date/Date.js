import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Date.style';

function Date (props) {

    const classes = useStyles();

    return (
        <div className={classes.date}>
            {props.date}
        </div>
    )
} 

Date.propTypes = {
    date: PropTypes.string.isRequired,
};
export default Date;