import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const comments = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_COMMENTS_SUCCESS:
      return action.comments;
    case actionTypes.ACTION_CREATE_COMMENT_SUCCESS:
      return [...action.comments, action.comment];
    case actionTypes.ACTION_GET_COMMENTS_STARTED:
    case actionTypes.ACTION_GET_COMMENTS_FAILED:
      return [];
    default:
      return state;
  }
};

const comment = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_CREATE_COMMENT_SUCCESS:
      return action.comment;
    case actionTypes.ACTION_CREATE_COMMENT_STARTED:
      return {};
    default:
      return state;
  }
};

const commentReducer = combineReducers({
  comments,
  comment
});

export default commentReducer;
