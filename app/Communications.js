module.exports = exports = Communications;

// //////////////////////

function Communications(app, server){
    //this.http = require('http').Server(app);
    this.io = require('socket.io')(server);

    var Server = require('./Server.js');
    this.server = new Server(this.io)
    this.webclient = require('./webClient.js')(this.io, this.server);
    return this;
} // end Communication
