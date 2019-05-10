import * as urls from '../constants/urls';

export const getArticles = () => (
    fetch(
        urls.ARTICLE_URL,
        {
        method: 'GET',
        }
    )
)

export const getArticle = (articleId) => (
    fetch(
        urls.ARTICLE_URL + articleId,
        {
        method: 'GET',
        }
    )
)

export const getArticlesByCat = (categoryId) => (
    fetch(
        urls.ARTICLE_URL + 'cat/' + categoryId,
        {
        method: 'GET',
        }
    )
)

export function createArticle(data = {}, token) {
    return fetch(urls.ARTICLE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "JWT " + token
        },
        body: JSON.stringify(data),
    }).then(response => response.json());
}