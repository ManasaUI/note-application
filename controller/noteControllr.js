Note = require('./../model/noteModel.js');


var noteCntrl = {
    getNotes: function(req, res){
        Note.getNotes(function(err, notes){
            if(err){
                throw err;
            }
            res.json(notes);
        });
    },
    postNote: function(req, res){
        var note = req.body;
        Note.addNote(note, function(err, note){
            if(err){
                throw err;
            }
            res.json(note);
        });
    },
    deleteNote: function(req, res){
        Note.removeNote(req.params._id, function(err, note){
            if(err){
                throw err;
            }
            res.json(note);
        });
    },
    putNote: function(req, res){
        var note = req.body;
        note.lastupdatedOn = Date.now(); 
        Note.updateNote(req.params._id, note, {}, function(err, note){
            if(err){
                throw err;
            }
            res.json(note);
        });
    },
    getNote: function(req, res){
        Note.getSinglenote(req.params._id, function(err, note){
            if(err){
                throw err;
            }
            res.json(note);
        });
    }
}


module.exports = noteCntrl;