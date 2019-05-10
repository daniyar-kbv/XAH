import * as actionTypes from '../constants/actionTypes';
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
        )

}

export const getArticle = (articleId) => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_ARTICLE_STARTED
    })

    articleApi
        .getArticle(articleId)
        .then(
            response => {
                response
                    .text()
                    .then(
                        value => {
                            const article = JSON.parse(value);
                            dispatch({
                                type: actionTypes.ACTION_GET_ARTICLE_SUCCESS,
                                article,
                            });
                        }
                    );
            }
        )
}

export const getArticlesByCat = (categoryId) => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_ARTICLES_CAT_STARTED
    })

    articleApi
        .getArticlesByCat(categoryId)
        .then(
            response => {
                response
                    .text()
                    .then(
                        value => {
                            const articles = JSON.parse(value);
                            dispatch({
                                type: actionTypes.ACTION_GET_ARTICLES_CAT_SUCCESS,
                                articles,
                            });
                        }
                    );
            }
        )

}

export const createArticle = (data, token) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.ACTION_CREATE_ARTICLE_STARTED
    });

    articleApi.createArticle({
        title: data.title,
        body: data.body,
        iamgeUrl: data.iamgeUrl,
        category: data.category
    }, token).then(data => {
        console.log(JSON.stringify(data))
        const article = JSON.parse(data);
        dispatch({
            type: actionTypes.ACTION_CREATE_ARTICLE_SUCCESS,
            article,
        });
    }) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
};
