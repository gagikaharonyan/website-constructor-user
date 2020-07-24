import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

export const useStyle = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        fontSize: 20,
        backgroundColor: '#a166e4',
        color: 'white',
        padding: '60px 40px 60px 60px',
    },
    info: {
        padding: '10px 0'
    },
    infoText: {
        marginLeft: 10,
    }

})