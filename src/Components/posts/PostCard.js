import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useStyle} from './PostCard.style';
import PostItemLoading from '../../Components/Loading/PostItemLoading'
import { cutText } from '../../extentions/excerpt';

function PostCard(props) {
    const { loading = false, src } = props;
    const classes = useStyle();
    return (
      <>
      {loading ? (
        <PostItemLoading />
      ) : (
        <Card className={classes.root}>
          <CardMedia
              className={classes.media}
              image={src.imgUrl}
              title={src.title}
            ></CardMedia>
          <CardContent className={classes.content}>
              <div className={classes.contentHeader}>
                <Typography variant="body2" color="textSecondary" component="p">{src.category}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{src.dateCreated}</Typography>
              </div>
              <Typography className={classes.title} variant="h6" color="textPrimary" component="p">
                {cutText(src.title, 25)}
              </Typography>
              <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                {cutText(src.description, 80)}
              </Typography>
              <Button className={classes.learnMoreBtn} variant="outlined">Learn more</Button>
          </CardContent>
        </Card>
      )}
    </>
  );
}

PostCard.propTypes = {
  src: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

export default PostCard;