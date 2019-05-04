import * as actionTypes from '../constants/actionTypes';
import * as userApi from '../api/userApi';

export const getUser = (url) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_USER_STARTED
  })

  userApi
    .getUser(url)
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const user = JSON.parse(value);
              dispatch({
                type: actionTypes.ACTION_GET_USER_SUCCESS,
                user,
              });
            }
          );
      }
    )

}