import {LOADING_DATA} from "../actionTypes/site"

export const loading = (boolean) => {
    return {
        type: LOADING_DATA,
        payload: boolean
    }
}