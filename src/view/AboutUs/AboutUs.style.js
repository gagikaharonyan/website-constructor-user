import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
    aboutSkeleton: {
        width: 1024,
        height: 280,
        margin: 'auto',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
       
    },
    aboutSkeletonDescription: {
        width: '40%',
        padding:20
    }
});