import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

export const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        fontSize: 20,
        padding: '0 40px 0 60px',
        justifyContent: 'center',
        '@media only screen and (max-width:768px)': {
           padding: '20px',
        }
    },
    info: {
        padding: '10px',
        whiteSpace: 'nowrap'
    },
    infoText: {
        marginLeft: 10,
    },
}));