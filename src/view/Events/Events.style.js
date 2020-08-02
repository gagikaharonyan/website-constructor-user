import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
        marginTop: 90,
        '@media only screen and (max-width:768px)': {
            '& a': {
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }
        },        
    },
    eventsPageTitle: {
        fontSize: 32,
        margin: '10px 0 40px 0',
        borderBottom: '1px solid grey'
    },
    eventsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});