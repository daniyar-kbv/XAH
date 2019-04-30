module.exports = (app) => {
    const comment_like = require('../controllers/comment_like.controller.js');

    // Create a new Note
    app.post('/comment_like', comment_like.create);

    // Retrieve all Notes
    app.get('/comment_like', comment_like.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/comment_like/:comment_likesId', comment_like.delete);
}