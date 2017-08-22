var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    status:{
        type: Boolean,
        required: false
    },
    createdOn:{
        type: Date,
        default: Date.now
    },
    lastupdatedOn:{
        type: Date,
        default: Date.now
    }
});

//creting model and making model to available out side
var Note = module.exports = mongoose.model('Note', noteSchema);

//retriving all notes.
module.exports.getNotes = function(callback, limit){
    Note.find(callback).limit(limit);
}

//adding notes.
module.exports.addNote = function(note, callback){
    Note.create(note, callback);
}

//removing note with ID.
module.exports.removeNote = function(id, callback){
    var query = { _id: id };
    Note.remove(query, callback);
}

//updating notes with ID.
module.exports.updateNote = function(id, note, option, callback){
    Note.findByIdAndUpdate({_id:id}, note, option, callback);
}

//retriving single note.
module.exports.getSinglenote = function(id, callback){
    Note.findById({ _id: id }, callback);
}