import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

import {posts as _posts, categories} from '../../customs';
import {PostCard} from '../../Components/posts';
import {useStyle} from './Posts.style';
import Chips from '../../Components/Chips/Chips'

function Posts(props) {
    const classes = useStyle();
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(_posts);
    const [sortedPosts, setSortedPosts] = useState(_posts);
    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    const handleOnSetActiveChips = (activeChips) => {
        setSortedPosts((activeChips.length === 0) ? posts : posts.filter(post => activeChips.includes(post.category)));
    }

    return (
        <div className={'page'}>
            <div className={'page-width-container ' + classes.postsContainer}>
            <div className={classes.chips}>
                <Chips src={categories} onSetActiveChips={handleOnSetActiveChips}></Chips>
            </div>
                {sortedPosts.map(post => 
                    <Link to={`post/${post.title}`}>
                        <PostCard src={post} loading={isLoading}></PostCard>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Posts