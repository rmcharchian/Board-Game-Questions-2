var express = require('express');
var app = express();

//var heroes = require('./routes/heroes');
//var powers = require('./routes/powers');

var port = 5000;

app.use(express.static('public'));

//app.use('/heroes', heroes);
//app.use('/powers', powers);

app.listen(port, function() {
    console.log('Server is running on port:', port);
});