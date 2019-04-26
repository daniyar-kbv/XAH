import {combineReducers} from "redux";
import * as actionTypes from '../constants/actionTypes'

const articles = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ACTION_GET_ARTICLES_SUCCESS:
            return action.articles;
        case actionTypes.ACTION_GET_ARTICLES_STARTED:
        default:
            return state;
    }
};

const article_post = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ACTION_POST_ARTICLES_SUCCESS:
            return action.article;
        case actionTypes.ACTION_GET_ARTICLES_STARTED:
            return {};
        default:
            return state
    }
}

const articleReducer = combineReducers({
    articles,
    article_post
});

export default articleReducer;
