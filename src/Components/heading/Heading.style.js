import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    heading: {
        fontSize:30,
        textAlign: 'center',
        margin:10,
        '@media only screen and (max-width:600px)': {
            fontSize: 24
          }
    }
})