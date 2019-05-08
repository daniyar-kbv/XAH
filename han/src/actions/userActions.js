import * as actionTypes from '../constants/actionTypes';
import * as userApi from '../api/userApi';

// export const login = (data) => (dispatch, getState) => {
//     dispatch({
//         type: actionTypes.ACTION_LOGIN_STARTED
//     });

//     userApi.login({
//         username: data.username,
//         password: data.password
//     }).then(response => {
//         response.text().then(
//             value => {
//                 const authres = JSON.parse(value);
//                 dispatch({
//                     type: actionTypes.ACTION_LOGIN_SUCCESS,
//                     authres
//                 })
//             }
//         )
//     })
//     .catch(error => console.error(error));
// };

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

export const userLoginFetch = user => {
    return dispatch => {
        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // Accept: 'application/json',
            },
            body: JSON.stringify(user)
            })
            .then(resp => resp.json())
            .then(data => {
            if (data.message) {
                console.log(data.message)
            } else {
                localStorage.setItem("JWT", data.token)
                dispatch(loginUser(data.user))
            }
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})