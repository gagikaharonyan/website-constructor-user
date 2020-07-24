import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles(theme => ({
    root: {
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 50px',
        '@media only screen and (max-width:768px)': {
           width: '100%',
        }
    },
    caption: {
        fontSize: 32,
        fontWeight: 700,
        marginBottom: 20,
    },
    form: {
        width: '100%',
        fontSize: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    row: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px',
        '@media only screen and (max-width:768px)': {
            flexDirection: 'column',
            margin: 0,
        }
    },
    input: {
        width: '45%',
        border: 'none',
        borderBottom: '1px solid black',
        backgroundColor: 'inherit',
        outline: 'none',
        '@media only screen and (max-width:768px)': {
            width: '100%',
            marginBottom: '50px',
        },
    },
    textarea: {
        width: '100%',
        height: 150,
        outline: 'none',
        overflowY: 'auto',
    },
    submitButton: {
        border: 'none',
        backgroundColor: 'inherit',
        fontWeight: 700,
        fontSize: 24,
        margin: ' auto',
        '&:hover': {
            color: 'black',
        }
    } 
}));