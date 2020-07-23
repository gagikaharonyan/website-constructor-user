 import { makeStyles } from '@material-ui/core/styles';

 export const useStyle = makeStyles({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: 60,
        fontFamily: "'Karla', sans-serif",
        fontSize: '17px',
        fontWeight: 700,
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px 9px 3px rgba(41,41,41,.25)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    appLogo: {
        width: '20%',
        whiteSpace: 'nowrap',
        marginLeft: 10,
    },
    navLinks: {
        flex: 5,
    }
 })