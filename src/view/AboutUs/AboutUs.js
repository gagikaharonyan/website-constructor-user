import React, {useEffect, useState} from 'react';
import {Skeleton} from '@material-ui/lab';

import About from '../../Components/about';

import {useStyles} from './AboutUs.style';

import { getAboitInfo } from '../../client';

function AboutUs () {
    const classes = useStyles();

    const [aboutInfo, setAboutInfo] = useState({isLoading: true, data: {}})

    useEffect(() => {
        getAboitInfo((res) => {
            setAboutInfo({isLoading: false, data: res.data})
        })
    },[])

    return (
        <div className={'page '}>
            {aboutInfo.isLoading ? (
                <div className={classes.aboutSkeleton}>
                    <Skeleton animation="wave"  variant='rect' style={{width: '40%', height: '100%'}} />
                    <div className={classes.aboutSkeletonDescription}>
                        <Skeleton animation="wave"  variant='text' width={100} height={20} />
                        <Skeleton animation="wave"  variant='text' />
                        <Skeleton animation="wave"  variant='text' />
                        <Skeleton animation="wave"  variant='text' />
                    </div>

                </div>
            ) : (
                <About aboutInfo={aboutInfo.data} loading={aboutInfo.loading}/>
            )}
        </div>
    ); 
};

export default AboutUs;

