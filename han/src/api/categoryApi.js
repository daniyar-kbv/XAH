import * as urls from '../constants/urls';

export const getCategories = () => (
    fetch(
        urls.CATEGORY_URL,
        {
        method: 'GET',
        }
    )
)