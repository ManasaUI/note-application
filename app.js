var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/noteConfig.js');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


router = require('./router/noteRoute.js')(app);

//connect to mongoose
mongoose.connect(config.db, {
    useMongoClient: true,
})

//database object for connection
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('please use /api/notes to access the application');
});

app.listen(config.port);
console.log('I am listening at port 3020 port..!!');