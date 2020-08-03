import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import {useStyle} from './PostCard.style';

function PostCard(props) {
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
          component='div'
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
        
          <Typography className={classes.title} variant="h6" color="textPrimary" component="p">{src.title}</Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">{src.description}</Typography>
          <Typography className={classes.date} variant="body3" color="textSecondary" component="p">{src.dateCreated}</Typography>
        </>)}
      </CardContent>
    </Card>
  );
}

PostCard.propTypes = {
  src: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default PostCard;