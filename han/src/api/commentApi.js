import * as urls from '../constants/urls';

export const getComments = (articleId) => (
    fetch(
        urls.COMMENT_URL + articleId,
        {
        method: 'GET',
        }
    )
)

export function createComment(data = {}, articleId) {
    return fetch(urls.COMMENT_URL + articleId, {
        method: "POST",
        // cache: "no-cache",
        // credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        // redirect: "follow",
        // referrer: "no-referrer",
        body: JSON.stringify(data),
    }).then(response => response.json());
}
  