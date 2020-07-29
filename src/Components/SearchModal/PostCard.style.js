import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
    root: {
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'inherit',
        margin: '10px 0',
    },
    media: {
        width: '30%',
        height: '100%'
    },
    content: {
        width: '70%',
        height: '100%',
        overflow: 'hidden',
        padding: 5,
    },
    title: {
        height: 30,
        fontSize: 17,
        fontFamily: 'inherit',
        overflow: 'hidden',
        margin: 0
    },
    description: {
        height: 45,
        fontFamily: 'inherit',
        fontSize: 15,
        overflow: 'hidden',
    },
    date: {
        height: 30,
        fontFamily: 'inherit',
        fontSize: 12,
        overflow: 'hidden',
    }

})