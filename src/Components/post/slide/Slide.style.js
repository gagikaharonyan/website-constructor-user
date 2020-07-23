import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    styleImage: {
        minHeight:430,
        '@media only screen and (max-width:600px)': {
            minHeight: 110 
          }
    }
})
