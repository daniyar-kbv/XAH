import { combineReducers } from "redux";
import commentReducer from './commentReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
    comment: commentReducer,
    article: articleReducer
});

export default rootReducer
