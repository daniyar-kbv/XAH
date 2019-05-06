import * as actionTypes from '../constants/actionTypes';
import * as userApi from '../api/userApi';

export const login = (data) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.ACTION_LOGIN_STARTED
    });

    userApi.login({
        username: data.username,
        password: data.password
    }).then(response => {
        response.text().then(
            value => {
                const authres = JSON.parse(value);
                dispatch({
                    type: actionTypes.ACTION_LOGIN_SUCCESS,
                    authres
                })
            }
        )
    })
    .catch(error => console.error(error));
};

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