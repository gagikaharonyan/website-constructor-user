import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
    root: {
        width: 345,
        height: 400,
        marginBottom: 50
    },
    media: {
        height: 190
    },
    content: {
        height: 190,
        overflow: 'hidden',
    },
    title: {
        maxHeight: 70,
        overflow: 'hidden',
    },
    learnMoreBtn: {
        bottom: 0,
        fontFamily: 'inherit',
        fontWeight: 700,
        margin: '20px 0'
    }

})