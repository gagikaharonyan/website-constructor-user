import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
    root: {
        width: 1024,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    },
    caption: {
        fontSize: 30,
        color: 'black',
        marginTop: 50,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
})