import React, {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getPost} from '../../client';
import renderComponent from './renderComponent';
import { post } from '../../customs';
import useStyle from './Post.style';
import { useTheme } from '@material-ui/core/styles';

function Post () {
    const params = useParams()
    const [post, setPost] = useState([]);
    const classes = useStyle();
    const theme = useTheme();
    
    useEffect(() => {
        getPost(params.title,
        (res) => {
            setPost(res);
            console.log(res);
        })
    }, []);
    console.log(theme)
    return (
        <div className={'page'}>
            { post ? post.map(renderComponent) : <span>Loading</span> }
        </div>
        );
}
export default Post;