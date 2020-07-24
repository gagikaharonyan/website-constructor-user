import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles ({
    '@global': {
        body: {height:window.innerHeight, overflow: 'hidden'}
      },
    aboutContainer: {
        width:1024,
        margin:'auto',
        display: 'flex',
        height: window.innerHeight,
        alignItems: 'center',
        overflow: 'hidden'
    },
    avatar: {
        width:500,
    },
    aboutDetails: {
        padding:20
    },
    title: {
        fontSize: 22,
        fontWeight:500,
        marginBottom: 20,
        width: 'fit-content',
        borderBottom: '1px solid lightgrey'
    },
    description: {

    }
    
})