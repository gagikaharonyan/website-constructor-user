import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
        marginTop: 90,
        '@media only screen and (max-width:768px)': {
            '& a': {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }
        },        
    }
});