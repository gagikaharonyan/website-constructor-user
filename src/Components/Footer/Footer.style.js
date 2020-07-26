 import { makeStyles } from '@material-ui/core/styles';

 export const useStyle = makeStyles(theme => ({
    root: {
        width: '100%',
        minHeight: 100,
        position: 'relative',
        backgroundColor: '#222222',
        overflowY: 'auto',
        color: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    aboutDevs: {
        fontSize: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        '@media only screen and (min-width:768px)': {
            position: 'absolute',
            bottom: 5,
            right: 10,
            alignItems: 'start',
        }
    },
    socialLinks: {
        fontSize: 25,
        display: 'flex',
        flexDirection: 'row',
        '& i': {
            margin: 15,
        }
    }

 }));