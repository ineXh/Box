// Modules
var express = require('express');
var app = express();

var port =  process.env.PORT || 80;

// ////////////
// Environments
// ////////////

// ///////////////////
// Serve Request Files
// ///////////////////
//app.use(express.static('source'));
app.use(express.static('public'));


// routes ==================================================

var server = app.listen(port, function(){
    console.log('listening on *:' + port);
})
var communications = require('./app/Communications.js')(app, server);

// start app
exports = module.exports = app;
