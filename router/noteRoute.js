var noteController = require('./../controller/noteControllr.js');

//setting up routes
module.exports = function(app){
    app.get('/api/notes', noteController.getNotes);
    app.post('/api/notes', noteController.postNote);
    app.put('/api/notes/:_id', noteController.putNote);
    app.delete('/api/notes/:_id', noteController.deleteNote);
    app.get('/api/notes/:_id', noteController.getNote)
}