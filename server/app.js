var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//var heroes = require('./routes/heroes');
//var powers = require('./routes/powers');

var indexRouter = require('./routes/questions.router.js')

var port = 5000;

//Body parser middleware
//app.use(bodyParser.json());
//app.use(bodyPaser.urlencoded({extended: true}));

app.use(express.static('./public'));

app.use('/')

//app.use('/heroes', heroes);
//app.use('/powers', powers);

app.listen(port, function() {
    console.log('Server is running on port:', port);
});