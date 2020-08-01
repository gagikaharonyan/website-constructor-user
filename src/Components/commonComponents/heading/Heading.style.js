import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    heading: {
        fontSize:36,
        textAlign: 'center',
        margin: '0 0 50px',
        '@media only screen and (max-width:600px)': {
            fontSize: 24
          }
    },
    eventHeading: {
        fontSize: '4em',
        lineHeight: 1,
        width: 650,
        textAlign: 'center'

    }
})