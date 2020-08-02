import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    paragraph: {
        width: '70%',
        fontSize: 18,
        margin: '80px auto',
        '@media only screen and (max-width: 600px)': {
            width: '90%'
        }
    },
    eventParagraph: {
        fontSize: 18,
        width: '70%',

        margin: 'auto 0',
        '@media only screen and (max-width: 600px)': {
            width: '90%'
        }
    }

})