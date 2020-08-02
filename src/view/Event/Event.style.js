import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    heading: {
        marginTop:120,
    },
    eventsContainer: {
        
    },
    eventContent: {
        display: 'flex',
        width:900,
        margin: '40px auto',
        '@media only screen and (max-width:900)':{
            flexDirection: 'column',
            width: '100%',
            padding: '0 20px'
        }
    }
});
