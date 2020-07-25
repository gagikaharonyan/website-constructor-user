import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles(theme => ({
    root: {
        fontSize: 30
    },
    timer: {
        display: 'flex',
        flexDirection: 'row',
    },
    timerCol: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 15px'
    },
    digit: {
        height: 75,
        fontSize: 70,
        display: 'flex',
        justifyContent: 'center',
    }
}));