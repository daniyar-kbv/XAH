import * as urls from '../constants/urls';

export const getComments = (articleId) => (
    fetch(
        urls.COMMENT_URL + articleId,
        {
        method: 'GET',
        }
    )
)

export function createComment(data = {}, articleId, token) {
    return fetch(urls.COMMENT_URL + articleId, {
        method: "POST",
        // cache: "no-cache",
        // credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "JWT " + token
        },
        // redirect: "follow",
        // referrer: "no-referrer",
        body: JSON.stringify(data),
    }).then(response => response.json());
}
  