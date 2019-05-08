import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_CREATE_USER_SUCCESS:
      return action.user;
    case actionTypes.ACTION_CREATE_USER_STARTED:
      return {};
    default:
      return state;
  }
};

const initialState = {
    currentUser: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}
        default:
            return state;
    }
}

const login = (state = {}, action) => {
    switch (action.type) {
      case actionTypes.ACTION_LOGIN_SUCCESS:
        return action.authres;
      case actionTypes.ACTION_LOGIN_STARTED:
        return {};
      default:
        return state;
    }
  };

const userReducer = combineReducers({
    user,
    login,
    reducer
});
  
export default userReducer;