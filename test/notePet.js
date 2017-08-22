var should = require('should');
var supertest = require('supertest');
var server = supertest.agent('http://localhost:3020');

describe('Testing noteAPI', function(){
    let noteID;

    before(function(done){
        done();
    });

    after(function(done){
        done();
    });

    it('Testing - home page', function(done){
        server
        .get('/')
        .end(function(err, res){
            res.status.should.be.equal(200);
            done();
        })
    });

    it('testing wrong home page', function(done){
        server
        .get('/api/note')
        .end(function(err, res){
            res.status.should.be.equal(404);
            done();
        })
    });

    it('Test - Posting notes', function(done){
        server
        .post('/api/notes')
        .set('Content-Type','application/json')
        .send({"title":"Notes","description":"newNote","status":true})
        .expect(200)
        .end(function(err, res){
            noteID = res.body._id;
            res.body._id.should.be.GUID;
            res.body.title.should.be.equal('Notes');
            res.body.description.should.be.equal('newNote');
            res.body.status.should.be.equal(true);
            res.body.lastupdatedOn.should.be.a.Date;
            res.body.createdOn.should.be.a.Date;   
            done();
        })
    });

    it('Test - owerwrite notes', function(done){
        server
        .put('/api/notes/'+noteID)
        .set('Content-Type', 'application/json')
        .send({"description":"updated Notes"})
        .end(function(err, res){
            res.body.should.be.Object;
            done();
        })
    });

    it('Test - listing notes', function(done){
        server
        .get('/api/notes/'+noteID)
        .expect(200)
        .end(function(err, res){
            res.body._id.should.be.GUID;
            res.body.title.should.be.equal('Notes');
            res.body.description.should.be.equal('updated Notes');
            res.body.status.should.be.equal(true);
            res.body.lastupdatedOn.should.be.a.Date;
            res.body.createdOn.should.be.a.Date;  
            done();
        })
    });

    it('Test - deleting notes', function(done){
        server
        .delete('/api/notes/'+noteID)
        .expect(204)
        .end(function(err, res){
            res.body.should.be.Empty;
            done();
        })
    });

});