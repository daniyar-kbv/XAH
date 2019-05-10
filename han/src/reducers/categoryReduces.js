import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const categories = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ACTION_GET_CATEGORIES_SUCCESS:
            return action.categories;
        case actionTypes.ACTION_GET_CATEGORIES_STARTED:
        case actionTypes.ACTION_GET_CATEGORIES_FAILED:
            return [];
        default:
            return state;
    }
}


const categoryReducer = combineReducers({
    categories
});

export default categoryReducer;