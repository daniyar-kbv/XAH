export const getComments = () => (
    fetch(
      'http://localhost:8000/comments/5ccb39fd7aa86838c7ad3882',
      {
        method: 'GET',
      }
    )
  )