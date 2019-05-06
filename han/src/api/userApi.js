import * as urls from '../constants/urls';

export const getUser = (url) => (
    fetch(
        urls.USER_URL + url,
        {
            method: 'GET',
        }
    )
)

export const login = (data)  => (
    fetch("http://localhost:8000/login", {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data),
    })
    .then(response => {
        response.json();
    })
)
  