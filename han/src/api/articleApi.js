import ARTICLE_URL from '../constants/urls';

// GET
export const getArticles = () => {
    fetch(
        ARTICLE_URL,
        {
            method: 'GET',
        }
    )
}

// POST
export const createArticle = (data) => {
    fetch(
        ARTICLE_URL,
        {
            method: 'POST',
            body: JSON.stringify({
                title: data.title,
                body: data.body,
                imageUrl: data.imageUrl,
                category: data.category
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8;"
            }
        }
    )
}