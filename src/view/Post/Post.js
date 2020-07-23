import React, {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getPost} from '../../client';
import renderComponent from './renderComponent';
import { post } from '../../customs';

function Post () {
    const params = useParams()
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        getPost(params.title,
        (res) => {
            setPost(res);
            console.log(res);
        })
    }, []);

    return (<div>
        {post
        ?post.map(renderComponent)
        :<span>Loading</span>}
    </div>);
}
export default Post;