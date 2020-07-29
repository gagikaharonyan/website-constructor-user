import React, { useState } from 'react';
import { functions } from 'firebase';
import useStyle from './SearchModal.style';
import {posts, post} from '../../customs';
import PostCard from './PostCard';
import {Link} from 'react-router-dom';


export default function SearchModal(props) {
    const classes = useStyle();
    const [searchResults, setSearchResults] = useState(searchItems(props.searchedText));

    
    function searchItems(text) {
        return posts.filter((post) => {
            return post.title.toLowerCase().includes(text.toLowerCase())
        } );
    }

    

    return (
        <div className={classes.root}>
            {posts.map((post) => 
                <Link to={`post/${post.title}`}>
                    <PostCard src={post}/>
                </Link>)}
        </div>
    );
}