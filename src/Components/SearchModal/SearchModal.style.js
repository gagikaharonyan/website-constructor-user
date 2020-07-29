import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles(theme => ({
   root: {
       position: 'fixed',
       top: 60,
       right: 20,
       zIndex: 1,
       width: 500,
       height: 'calc(100vh - 60px)',
       fontFamily: 'inherit',
       fontSize: '17px',
       fontWeight: 700,
       backgroundColor: '#ffffff',
       boxShadow: '0px 0px 9px 3px rgba(41,41,41,.25)',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       overflowY: 'auto',
       padding: 10,
       '@media only screen and (max-width:768px)': {
        right: 0,
        width: '100%',
    } 
   },
}));

export default useStyle;