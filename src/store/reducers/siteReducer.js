import {SITE_FETCH_SUCCESS, 
    LOADING_DATA, 
    ERROR,
    SET_SEARCHED_TEXT} from "../actionTypes/site";

const initialState = {
    data: {},
    isLoading: false,
    isLoaded: false,
    error: false,
    searchedText: '',
}

const SiteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SITE_FETCH_SUCCESS:
            return {
                ...state, data: action.payload, isLoaded: true
            };
        case LOADING_DATA:
            return {
                ...state, isLoading: action.payload
            };
        case ERROR:
            return {
                ...state, error: action.payload
            };
        case SET_SEARCHED_TEXT:
            return {
                ...state, searchedText: action.text
            };
        default:
            return state
    }
}

export default SiteReducer;