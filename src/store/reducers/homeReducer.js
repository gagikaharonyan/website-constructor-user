import {GET_USER,LOADING_DATA,ERROR} from "../actionTypes/site";

const initialState = {
    user: {},
    isLoading: false,
    error: false
}

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state, user: {...action.payload}
            };
        case LOADING_DATA:
            return {
                ...state,isLoading:action.payload
            };
        case ERROR:
            return {
                ...state,error:action.payload
            };
        default:
            return state
    }
}

export default HomeReducer;