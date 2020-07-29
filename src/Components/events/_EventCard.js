import React from 'react';
import {useStyle} from './EventCard.style';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Skeleton from '@material-ui/lab/Skeleton';

export function EventCard(props) {
    const { isLoading = false, src, index } = props;
    const classes = useStyle();

    const eventImg = 
        <div className={classes.imgContainer}>
            {isLoading 
            ?<Skeleton variant="rect" width={'100%'} height={'100%'} />
            :<div className={classes.image} style={{backgroundImage: `url(${src.imgUrl})`}}></div>}
        </div>
    
    const eventContent = <div className={classes.content}>
        {isLoading
        ? <>
            <Skeleton animation="wave" height={30} width="100%" style={{ marginBottom: 10 }} />
            <Skeleton animation="wave" height={30} width="80%" style={{ marginBottom: 20 }} />
            <Skeleton animation="wave" height={20} width="60%" style={{ marginBottom: 40 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 15 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 15 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 15 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 15 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 15 }} />
        </>
    :<>
        <span className={classes.title}>{src.title}</span>
        <div className={classes.dateLocationContainer}>
            <span className={classes.date}>{src.date}</span>
        
            <span className={classes.location}> <LocationOnIcon />{src.location}</span>
        </div>
        <span className={classes.description}>{src.description}</span>
    </>}
</div>


    return (
        <div className={classes.root}>
            {console.log(index)}
            {(index % 2 === 1) ? (
                <>
                    {eventImg} 
                    {eventContent}
                </>
            ) : (
                <>
                    {eventContent}
                    {eventImg}
                </>
            )}
             
        </div>
        );
}