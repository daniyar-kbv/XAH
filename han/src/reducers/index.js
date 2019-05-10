import { combineReducers } from "redux";
import commentReducer from './commentReducer';
import articleReducer from './articleReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReduces'

const rootReducer = combineReducers({
    comment: commentReducer,
    article: articleReducer,
    user: userReducer,
    category: categoryReducer
});

export default rootReducer
