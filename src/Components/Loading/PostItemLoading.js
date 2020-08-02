import React from 'react';
import {Skeleton} from '@material-ui/lab';
import {Button} from '@material-ui/core';
import {useStyles} from './Loading.style';

function PostItemLoading (props) {
    const classes = useStyles();

    return (
        <div className={classes.postItemContainerSkeleton}>
            <div className={classes.postItemSkeleton}>
                <Skeleton variant='rect' animation='wave' className={classes.postImageSkeleton}/>
                <div className={classes.postMetadataSkeleton}>
                    <Skeleton variant='text' animation='wave' width={60} height={22} />
                    <Skeleton variant='text' animation='wave' width={90} height={22} />
                    <Skeleton variant='text' animation='wave' width='100%' height={28} />
                    <Skeleton variant='text' animation='wave' width={60} height={22} />

                    <Button className={classes.postButtonSkeleton} variant="outlined">Learn more</Button>              
                </div>
            </div>
        </div>
        
    )
}

export default PostItemLoading;