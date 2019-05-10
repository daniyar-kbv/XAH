
import * as actionTypes from '../constants/actionTypes';
import * as commentApi from '../api/commentApi';

export const getComments = (articleId) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_COMMENTS_STARTED
  })

  commentApi
    .getComments(articleId)
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

export const createComment = (data, articleId, token) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.ACTION_CREATE_COMMENT_STARTED
    });

    commentApi.createComment({
        body: data.body
    }, articleId, token).then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
};
