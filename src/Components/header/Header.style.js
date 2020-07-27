 import { makeStyles } from '@material-ui/core/styles';

 export const useStyle = makeStyles(theme => ({
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appLogo: {
        whiteSpace: 'nowrap',
        marginLeft: 20,
        fontSize: 22,
        '& span:first-child': {
            color: "#3fe4fd"
        },
        '& span:nth-child(2)': {
            color: "#a166e4"
        },
        '@media only screen and (max-width:768px)': {
            marginLeft: 10
        }   
    },
    navLinks: {
        
    },
    search: {
       
    }
 }));