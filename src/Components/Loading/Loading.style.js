import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
    postItemSkeleton: {
        width: 345,
        height:400,
        marginBottom:50,
        background: 'white'
    },
    postImageSkeleton:{
        height: 190,
    },
    postMetadataSkeleton:{
        padding:24,
    },
    postButtonSkeleton: {
        bottom: 0,
        fontFamily: 'inherit',
        fontWeight: 700,
        margin: '20px 0'
    },
    postItemContainerSkeleton: {
        width: '32%'
    }
});