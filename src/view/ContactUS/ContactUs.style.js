import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0px 0px 9px 3px rgba(41,41,41,.25)',
        marginTop: 20,
        '@media only screen and (max-width:1024px)': {
            width: '100%',
            flexDirection: 'column',
            overflow: 'auto',
        }
    },
})