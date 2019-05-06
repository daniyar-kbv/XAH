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
        );
}

// export const createArticle = (data) => (dispatch, getState) => {

//     dispatch({
//       type: actionTypes.ACTION_CREATE_ARTICLE_STARTED
//     })
    
//     articleApi
//         .createArticle(data)
//         .then(
//             response => {
//                 response
//                     .text()
//                     .then(
//                         value => {
//                             const responseObject = JSON.parse(value);
//                             console.log(responseObject);
//                             dispatch({
//                                 type: actionTypes.ACTION_CREATE_ARTICLE_SUCCESS,
//                                 article: responseObject,
//                                 articles: getState().article.articles
//                             });
//                         }
//                     );
//             }
//         );
// }