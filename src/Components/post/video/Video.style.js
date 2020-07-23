import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    video: {
        width: 800,
        margin: '40px auto',
        '@media only screen and (max-width: 800px)': {
            width:'100%',
        },
        '& iframe': {
            width:800,
            height:500,
            margin: 'auto',
            '@media only screen and (max-width: 800px)': {
                width:'100%',
                height:400,
            }
        }
    }
})