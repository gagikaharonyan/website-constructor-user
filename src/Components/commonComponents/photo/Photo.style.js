import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    photoComponent: {
        width:'80%',
        margin: '40px auto',
        '@media only screena and (max-width:992px)': {
            width: '100%',
            margin:0
        }
    }
})