import * as urls from '../constants/urls';

export const getUser = (url) => (
    fetch(
        urls.USER_URL + url,
        {
            method: 'GET',
        }
    )
  )