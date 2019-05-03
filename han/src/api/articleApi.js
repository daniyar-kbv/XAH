
export const getArticles = () => {
    fetch(
        'localhost:8000/articles',
        {
            method: 'GET',
        }
    )
}

