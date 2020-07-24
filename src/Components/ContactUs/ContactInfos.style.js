import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        fontSize: 20,
        padding: '0 40px',
    },
    info: {
        padding: '10px 0'
    },
    infoText: {
        marginLeft: 5,
    }

})