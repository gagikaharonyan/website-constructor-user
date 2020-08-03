import React, { useState } from 'react';
import useStyle from './SearchModal.style';
import PostCard from './PostCard';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSearchedText} from '../../store/actions/site';


function SearchModal(props) {
    const classes = useStyle();
    const {searchedText} = props.site; 

    if(searchedText.length !== 0) {
        const posts = props.posts.filter((post) => {
            return post.title.toLowerCase().includes(searchedText.toLowerCase());
        });

        return (
            <div className={classes.root}>
                {posts.map((post) => 
                    <Link to={`/post/${post.id}`} onClick={() => props.closeModal()} style={{width: '100%'}}>
                        <PostCard src={post}/>
                    </Link>)}
            </div>
        );
    } else {
        return '';
    }
    
}

const mapStateToProps = (state) => ({
    site: state.site,
    posts: Object.values(state.posts.data)
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: (text) => dispatch(setSearchedText(''))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
