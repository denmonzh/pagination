import {SUCCESS_GET_DATA, BEING_GET_DATA, ERROR_GET_DATA} from "../actions/types";

const initialState = {
    items: [],
    loading: false,
    error: null
};


export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case BEING_GET_DATA:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SUCCESS_GET_DATA:
            return {
                ...state,
                items: action.payload.users,
                loading: false,
            };
        case ERROR_GET_DATA:
            return {
                ...state,
                items: [],
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}