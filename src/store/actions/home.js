import {LOADING_DATA} from "../actionTypes/user"

export const loading = (boolean) => {
    return {
        type: LOADING_DATA,
        payload: boolean
    }
}