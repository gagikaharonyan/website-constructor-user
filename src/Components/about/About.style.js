import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles ({
    aboutContainer: {
        width: 1024,
        height: 280,
        margin:'auto',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '@media only screen and (max-width:768px)': {
            width: '100%',
            height: 'auto',
            flexDirection: 'column',
            overflow: 'auto',
            margin: 0,
        }
    },
    imageContainer: {
        width: '40%',
        height: '100%',
        '@media only screen and (max-width:768px)': {
            width: '100%',
            height: '270px',
        }
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
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