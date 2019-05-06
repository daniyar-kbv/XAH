
import * as actionTypes from '../constants/actionTypes';
import * as commentApi from '../api/commentApi';

export const getComments = () => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_COMMENTS_STARTED
  })

  commentApi
    .getComments()
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const comments = JSON.parse(value);
              dispatch({
                type: actionTypes.ACTION_GET_COMMENTS_SUCCESS,
                comments,
              });
            }
          );
      }
    )

}

export const createComment = (data) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_CREATE_COMMENT_STARTED
  })

  commentApi
    .createComment(data)
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              // console.log(responseObject);
              dispatch({
                type: actionTypes.ACTION_CREATE_COMMENT_SUCCESS,
                comment: responseObject,
                comments: getState().comment.comments
              });
            }
          );
      }
    )

}
