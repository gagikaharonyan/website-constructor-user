import {SITE_FETCH_SUCCESS, 
    LOADING_DATA,
    ERROR,
    SET_SEARCHED_TEXT} from '../actionTypes/site';
import {getSiteBaseInfo} from '../../client';

const siteFetchSuccess = (site) => ({type: SITE_FETCH_SUCCESS, payload: site});
const siteIsLoading = (isLoading) => ({type: LOADING_DATA, payload: isLoading});
const siteHasError = (error) => ({type: ERROR, payload: error});
export const setSearchedText = (text) => ({type: SET_SEARCHED_TEXT, text})

export const fetchSite = () => dispatch => {
    getSiteBaseInfo((res) => {
        dispatch(siteFetchSuccess(res.data));
    });
}

