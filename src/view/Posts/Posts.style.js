import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
    chips: {
        width: '100%',
        margin: '20px 100px',
        display: 'flex',
        '@media only screen and (max-width:768px)': {
            margin: '10px 0',
           },
    },
    postsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    }
})