import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    paragraph: {
        width: '70%',
        margin:'auto',
        fontSize: 18,
        '@media only screen and (max-width: 600px)': {
            width: '90%'
        }
    }
})