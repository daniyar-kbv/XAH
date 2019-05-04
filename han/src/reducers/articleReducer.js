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

const articleReducer = combineReducers({
    articles,
});

export default articleReducer;