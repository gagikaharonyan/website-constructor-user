import React, { useState } from 'react';
import { functions } from 'firebase';
import useStyle from './SearchModal.style';
import {posts as _posts} from '../../customs';
import PostCard from './PostCard';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSearchedText} from '../../store/actions/site';


function SearchModal(props) {
    const classes = useStyle();
    const {searchedText} = props.site; 

    if(searchedText.length !== 0) {
        const posts = _posts.filter((post) => {
            return post.title.toLowerCase().includes(searchedText.toLowerCase());
        });

        return (
            <div className={classes.root}>
                {posts.map((post) => 
                    <Link to={`/post/${post.title}`} onClick={() => props.closeModal()}>
                        <PostCard src={post}/>
                    </Link>)}
            </div>
        );
    } else {
        return '';
    }
    
}

const mapStateToProps = (state) => ({
    site: state.site
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: (text) => dispatch(setSearchedText(''))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);