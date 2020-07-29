import {SITE_FETCH_SUCCESS, LOADING_DATA, ERROR} from "../actionTypes/site";

const initialState = {
    data: {},
    isLoading: false,
    isLoaded: false,
    error: false
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
                ...state,error: action.payload
            };
        default:
            return state
    }
}

export default SiteReducer;