import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles(theme => ({
    root: {
        width: 450,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0px 0px 9px 3px rgba(41,41,41,.25)',
        padding: 40,
        margin: 40,
        '@media only screen and (max-width:600px)': {
            width: '100%'
        }
    },
    formTitle: {
       textAlign: 'center',
       fontSize: '25px',
       fontWeight: 700,
       color: 'black',
    },
    text: {
        margin: '20px 0'
    },
    form: {
        width: '100%', 
    },
    emailField: {
        width: '70%',
        border: 'none',
        borderBottom: '1px solid black',
        outline: 'none',
        padding: 5,
    },
    subscribeBtn: {
        width: '30%',
        border: 'none',
        fontSize: 18,
        fontWeight: 700,
        backgroundColor: 'inherit',
        color: 'black',
        outline: 'none',
        '&:focus': {
            outline: 'none'
        },
        padding: '3px 18px',
    }
}));