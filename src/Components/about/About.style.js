import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles ({
    aboutContainer: {
        width: 1024,
        margin:'auto',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '@media only screen and (max-width:768px)': {
            width: '100%',
            flexDirection: 'column',
            overflow: 'auto',
        }
    },
    image: {
        width: '40%',
        '@media only screen and (max-width:768px)': {
            width: '100%'
        }
    },
    aboutDetails: {
        width: '50%',
        padding: 20,
        '@media only screen and (max-width:768px)': {
            width: '100%',
        }
    },
    title: {
        fontSize: 22,
        fontWeight: 500,
        marginBottom: 20,
        width: 'fit-content',
        borderBottom: '1px solid lightgrey'
    },
    description: {

    }
    
})