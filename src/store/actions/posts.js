import {POSTS_FETCH_SUCCESS, 
    LOADING_DATA,
    ERROR,
    SET_SEARCHED_TEXT} from '../actionTypes/all';
import {getPosts} from '../../client';

const postsFetchSuccess = (posts) => ({type: POSTS_FETCH_SUCCESS, payload: posts});
const siteIsLoading = (isLoading) => ({type: LOADING_DATA, payload: isLoading});
const siteHasError = (error) => ({type: ERROR, payload: error});
export const setSearchedText = (text) => ({type: SET_SEARCHED_TEXT, text})

export const fetchPosts = () => dispatch => {
    getPosts((res) => {
        dispatch(postsFetchSuccess(res.data));
    });
}