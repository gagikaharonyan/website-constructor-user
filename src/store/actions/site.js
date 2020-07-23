import {SITE_FETCH_SUCCESS, LOADING_DATA, ERROR} from '../actionTypes/site';
import customRes from './customRes';

const siteFetchSuccess = (site) => ({type: SITE_FETCH_SUCCESS, payload: site});
const siteIsLoading = (isLoading) => ({type: LOADING_DATA, payload: isLoading});
const siteHasError = (error) => ({type: ERROR, payload: error});

export const fetchSite = () => dispatch => {
    dispatch(siteFetchSuccess(customRes))
}

