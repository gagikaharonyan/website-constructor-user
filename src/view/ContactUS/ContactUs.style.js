import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useStyle = makeStyles(theme => ({
    root: {
        width: '100%',
        fontFamily: "'Karla', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBFBFB',
        color: '#474747',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        '@media only screen and (max-width:768px)': {
            width: '100%',
            flexDirection: 'column',
            overflow: 'auto',
          },
    },
    border: {
        width: 2,
        height: 320,
        backgroundColor: '#474747',
        borderRadius: 5,
        margin: '90px 10px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
}));

