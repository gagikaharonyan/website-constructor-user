import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import {useStyle} from './EventCard.style';

export function EventCard(props) {
    const { loading = false, src } = props;
    const classes = useStyle();

    return (
        <Card className={classes.root}>
          {loading ? (
            <Skeleton animation="wave" variant="rect" className={classes.media} />
          ) : (
            <CardMedia
              className={classes.media}
              image={src.cover.url}
              title={src.heading}
            ></CardMedia>
          )}
          <CardContent className={classes.content}>
            {loading ? (
              <>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 15, width: "50%" }} />
                <Skeleton animation="wave" height={10} style={{ marginBottom: 30, width: "50%"}} />
                <Skeleton animation="wave" height={10} style={{ marginBottom: 15, width: "100%" }} />
                <Skeleton animation="wave" height={10} style={{ marginBottom: 15, width: "100%" }} />
                <Skeleton animation="wave" height={10} style={{ marginBottom: 15, width: "80%" }} />
                <Skeleton animation="wave" height={10} style={{ marginBottom: 15, width: "70%" }} />
              </>
            ) : (<>
                <Typography className={classes.title} variant="h6" color="textPrimary" component="p">{src.heading}</Typography>
                <Typography className={classes.location} variant="body2" color="textSecondary"
                    component="p"><LocationOnIcon/> {src.location.address}</Typography>
                <Typography 
                  className={classes.date} 
                  variant="body2" 
                  color="textSecondary"
                  component="p"
                >
                    <EventIcon/> {src.date}
                </Typography>
                {/* <Typography 
                  className={classes.description} 
                  variant="body2" 
                  color="textSecondary"
                  component="p"
                  dangerouslySetInnerHTML={{ __html: src.details }}
                >
                </Typography> */}
                <Button className={classes.learnMoreBtn} variant="outlined">Learn more</Button>              
            </>)}
          </CardContent>
        </Card>
        );
}