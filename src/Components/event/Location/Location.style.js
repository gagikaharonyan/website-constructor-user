import { makeStyles } from '@material-ui/core';

export const useStyles =  makeStyles({
    location: {
        marginTop:10,
        '@media only screen and max-width(900px)': {
            fontSize:22
        }
    }
})