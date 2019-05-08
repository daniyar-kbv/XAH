import * as urls from '../constants/urls';

export const getUser = (url) => (
    fetch(
        urls.USER_URL + url,
        {
            method: 'GET',
        }
    )
)

export const login = (user) => (
    fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            // Accept: 'application/json',
        },
        body: JSON.stringify(user)
    }).then(resp => resp.json())
)


export const register = (user) => (
    fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(resp => resp.json())
)