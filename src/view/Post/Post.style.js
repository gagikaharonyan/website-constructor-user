import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    root: {
        width: theme.pageWidth,
    },
    postContent: {
        '& div': {
            width: '100%'
        },
        '& p': {
            fontSize: 20
        }

    }
}));

export default useStyle;