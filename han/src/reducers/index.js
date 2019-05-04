import { combineReducers } from "redux";
import commentReducer from './commentReducer';
import articleReducer from './articleReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    comment: commentReducer,
    article: articleReducer,
    user: userReducer
});

export default rootReducer
