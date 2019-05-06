import * as urls from '../constants/urls';

export const getComments = () => (
    fetch(
        urls.COMMENT_URL + '5ccb39fd7aa86838c7ad3882',
        {
        method: 'GET',
        }
    )
)

export function createComment(data = {}) {
    return fetch(urls.COMMENT_URL + '5ccb39fd7aa86838c7ad3882', {
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
  