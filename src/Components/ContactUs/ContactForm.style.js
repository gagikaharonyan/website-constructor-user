import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
    root: {
        width: 500,
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
        marginBottom: '30px'
    },
    input: {
        width: '45%',
        border: 'none',
        borderBottom: '1px solid black',
        outline: 'none',
        padding: '5px',
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
        fontWeight: 500,
        fontSize: 24,
        color: 'black',
        margin: ' auto'
    }    
});