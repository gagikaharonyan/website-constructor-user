import React, {useState, useEffect} from "react";
import Loading from '../../Components/Loading';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {PostCard} from '../../Components/posts';
import {useStyle} from './Posts.style';
import Chips from '../../Components/Chips/Chips';

import PostItemLoading from '../../Components/Loading/PostItemLoading';
import {getCategories} from '../../client'

function Posts(props) {
    const classes = useStyle();
    const {posts, isLoaded} = props;
    const [categories, setCategories] = useState({isLoading: true, data: {}})
    const [sortedPosts, setSortedPosts] = useState({1: {}, 2: {}, 3: {}});

    useEffect(() => {
        getCategories(res => {
            setCategories({isLoading: false, data: res.data})
        })
    }, []);

    useEffect(() => {
        isLoaded && setSortedPosts(posts);
    }, [isLoaded]);

    const handleOnSetActiveChips = (activeChips) => {        
        setSortedPosts((activeChips.length === 0) ? posts : Object.values(posts).filter(post => activeChips.includes(post.category)));
    }
    
    return (
        <div className={'page'}>
            <div className={'page-width-container ' + classes.postsContainer}>
                <div className={classes.chips}>
                    {categories.isLoading
                    ?<Loading/>
                    :<Chips src={Object.values(categories.data)} onSetActiveChips={handleOnSetActiveChips}></Chips>}
                </div>
                { isLoaded ? (
                    <>
                        {Object.values(sortedPosts).map(post => 
                            <Link to={`post/${post.id}`}>
                                <PostCard src={post} loaded={isLoaded}></PostCard>
                            </Link>
                        )}
                    </>
                ) : (
                    <>
                        <PostItemLoading />
                        <PostItemLoading />
                        <PostItemLoading />
                        <PostItemLoading />
                        <PostItemLoading />
                        <PostItemLoading />
                    </>
                )}

                
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: state.posts.data,
    isLoaded: state.posts.isLoaded
});
  
export default connect(mapStateToProps)(Posts);