import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {posts as _posts, categories} from '../../customs';
import {PostCard} from '../../Components/posts';
import {useStyle} from './Posts.style';
import Chips from '../../Components/Chips/Chips'

function Posts(props) {
    const classes = useStyle();
    const {posts} = props;
    const [isLoading, setIsLoading] = useState(true);
    const [sortedPosts, setSortedPosts] = useState(posts); //////////////
    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    const handleOnSetActiveChips = (activeChips) => {
        setSortedPosts((activeChips.length === 0) ? posts : posts.filter(post => activeChips.includes(post.category)));
    }

    console.log(posts)
    return (
        <div className={'page'}>
            <div className={'page-width-container ' + classes.postsContainer}>
                <div className={classes.chips}>
                    <Chips src={categories} onSetActiveChips={handleOnSetActiveChips}></Chips>
                </div>
                {/* {sortedPosts.map(post => 
                    <Link to={`post/${post.title}`}>
                        <PostCard src={post} loading={isLoading}></PostCard>
                    </Link>
                )} */}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: state.posts
});
  
export default connect(mapStateToProps)(Posts);