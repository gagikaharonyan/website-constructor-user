import React, {useState, useEffect } from 'react';
import uuid from 'react-uuid';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {Container} from '@material-ui/core';
import Slide from '../../Components/commonComponents/Slide';
import Heading from '../../Components/commonComponents/heading';
import Photo from '../../Components/commonComponents/photo';
import Paragraph from '../../Components/commonComponents/paragraph';
import Video from '../../Components/post/video';
import Quote from '../../Components/post/quote';
import useStyle from './Post.style';
import { useTheme } from '@material-ui/core/styles';
import renderComponent from './renderComponent';

function Post (props) {
    const param = useParams()
    const classes = useStyle();
    const theme = useTheme();

    const [post] = Object.values(props.posts).filter(val => (val.id === param.id));

    return (
        <div className={'page'}>
            {props.postsLoaded ? (
                'loading'
            ) : (
                <>               
                    <Slide imgUrls={post.components.SLIDE.imgUrls} />
                    <Container maxWidth='md' className={classes.postContent}>
                        <Heading text={post.components.HEADING.text}  />
                        <Paragraph text={post.components.PARAGRAPH.text} />
                        <Photo img={post.components.PHOTO.imgUrl[0]}  />
                        <Quote quote={post.components.QUOTE.text} />
                        <Video param={post.components.VIDEO.videoParam} />
                    </Container>
                    
                </>
            )}
            {/* { post ? post.map(renderComponent) : <span>Loading</span> } */}
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: state.posts.data,
    postsLoaded: state.posts.isLoading
});

export default connect(mapStateToProps)(Post);