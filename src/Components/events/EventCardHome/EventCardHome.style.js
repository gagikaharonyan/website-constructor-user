import {makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    eventsContainer: {
        margin: '0 20px 20px 20px',
        width: '100%',
    },
    newEvents:{
        width: 'fit-content',
        borderBottom: '1px solid grey'
    },
    eventTitle: {
        transform : 'translate(0, -70px)',
        fontSize:16,
        background: '#0000007d',
        width: '100%',   
        color: 'white',
        padding: '10px 0 10px 10px',

    },
    eventImage: {
        width:'100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat:'no-repeat'

    },
    events: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        '@media only screen and (max-width:900px)':{
            justifyContent: 'space-around',
        },
    },
    eventContent: {
        width: '24%',
        height: 220,
        marginBottom:20,
        marginRight: 10,
        '@media only screen and (max-width:900px)':{
            width: '46%',
        },
        '@media only screen and (max-width:600px)':{
            width: '98%',
            marginRight: 0,

        },
    }
})