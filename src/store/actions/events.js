import {EVENTS_FETCH_SUCCESS, 
    LOADING_DATA,
    ERROR,
    SET_SEARCHED_TEXT} from '../actionTypes/all';
import {getEvents} from '../../client';

const eventsFetchSuccess = (events) => ({type: EVENTS_FETCH_SUCCESS, payload: events});
const siteIsLoading = (isLoading) => ({type: LOADING_DATA, payload: isLoading});
const siteHasError = (error) => ({type: ERROR, payload: error});
export const setSearchedText = (text) => ({type: SET_SEARCHED_TEXT, text})

export const fetchEvents = () => dispatch => {
    getEvents((res) => {
        dispatch(eventsFetchSuccess(res.data));
    });
}