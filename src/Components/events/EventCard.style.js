import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(theme => ({
    root: {
        width: 1000,
        height: 320,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 80,
        boxShadow: '0px 0px 9px 3px rgba(41,41,41,.25)',
        '@media only screen and (max-width:768px)': {
            width: '95%',
            height: 550,
            flexDirection: 'column',
         }
    },
    imgContainer: {
        flex: 1.7,
    },
    content: {
        flex: 1,
        marginLeft: 60,
        padding: 20,
        '@media only screen and (max-width:768px)': {
            margin: 10,
         }
    },
    title: {
        height: '25%',
        display: 'inline-block',
        fontSize: '25px',
        overflow: 'hidden',
        color: 'black',
        '@media only screen and (max-width:768px)': {
            height: 70,
         }
    },
    dateLocationContainer: {
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: 20,
        overflow: 'hidden',
        marginBottom: 20,
        '@media only screen and (max-width:768px)': {
            flexDirection: 'column',
            height: 60,
        }
    },
    date: {
        marginRight: 20,
    },
    location: {
       
    },
    description: {
        height: '53%',
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '@media only screen and (max-width:768px)': {
            height: 110,
        }
    }
}))