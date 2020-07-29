import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(theme => ({
    root: {
        width: 300,
        height: 500,
        backgroundColor: '#FFFFFF',
        fontFamily: 'inherit',
        margin: '0px 20px 50px 20px',
        '@media only screen and (max-width:768px)': {
            width: 300,
            height: 500,
            flexDirection: 'column',
         }
    },
    media: {
        height: '35%'
    },
    content: {
        position: 'relative',
        height: '65%',
        overflow: 'hidden',
        fontFamily: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        height: 30,
        overflow: 'hidden',
        fontFamily: 'inherit',
    },
    location: {
        height: 25,
        overflow: 'hidden',
        fontFamily: 'inherit',
        marginTop: 5
    },
    date:{
        fontFamily: 'inherit',
        marginTop: 1
    },
    description: {
        maxHeight: 140,
        fontFamily: 'inherit',
        overflow: 'hidden',
        marginTop: 20,
    },
    learnMoreBtn: {
        position: 'absolute',
        bottom: 10,
        fontFamily: 'inherit',
        fontWeight: 700,
    }
}))