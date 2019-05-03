import * as actionTypes from '../actions/actionTypes';
import * as articleApi from '../api/articleApi';

export const getArticles = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_ARTICLES_STARTED
    })

    articleApi
        .getArticles()
        .then(
            response => {
                response
                    .text()
                    .then(
                        value => {
                            const articles = JSON.parse(value);
                            dispatch({
                                type: actionTypes.ACTION_GET_ARTICLES_SUCCESS,
                                articles,
                            });
                        }
                    );
            }
        );
}