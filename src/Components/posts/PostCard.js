import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import {useStyle} from './PostCard.style';

import { cutText } from '../../extentions/excerpt'

export function PostCard(props) {
    const { loading = false, src } = props;
    const classes = useStyle();

    return (
        <Card className={classes.root}>
          {loading ? (
            <Skeleton animation="wave" variant="rect" className={classes.media} />
          ) : (
            <CardMedia
              className={classes.media}
              image={src.imgUrl}
              title={src.title}
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
              <div className={classes.contentHeader}>
                <Typography variant="body2" color="textSecondary" component="p">{src.category}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{src.dateCreated}</Typography>
              </div>
              <Typography className={classes.title} variant="h6" color="textPrimary" component="p">
                {cutText(src.title, 30)}
              </Typography>
              <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                {cutText(src.description, 150)}
              </Typography>
            </>)}
          </CardContent>
        </Card>
        );
}