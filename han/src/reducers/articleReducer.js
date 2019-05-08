import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const articles = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ACTION_GET_ARTICLES_SUCCESS:
            return action.articles;
        case actionTypes.ACTION_CREATE_ARTICLE_SUCCESS:
            return [...action.articles, action.article];
        case actionTypes.ACTION_GET_ARTICLES_STARTED:
        case actionTypes.ACTION_GET_ARTICLES_FAILED:
            return [];
        default:
            return state;
    }
}

const firstBusinessArticle = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ACTION_GET_ARTICLES_SUCCESS:
            return action.articles[0];
        default:
            return state;
    }
}

// const firstAutoArticle = (state = {}, action) => {
//     switch (action.type) {
//         case actionTypes.ACTION_GET_ARTICLES_SUCCESS:
//             return action.articles[1];
//         default:
//             return state;
//     }
// }

// const firstSportArticle = (state = {}, action) => {
//     switch (action.type) {
//         case actionTypes.ACTION_GET_ARTICLES_SUCCESS:
//             return action.articles[2];
//         default:
//             return state;
//     }
// }

const article = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ACTION_GET_ARTICLE_SUCCESS:
            return action.article;
        default:
            return state;
    }
}

const articleReducer = combineReducers({
    articles,
    firstBusinessArticle,
    article,
    // firstAutoArticle,
    // firstSportArticle
});

export default articleReducer;