module.exports = exports = Server;

function Server(io){
    this.io = io;
    this.rooms = [];
    this.init();
} // end Server

Server.prototype = {
    init: function(){
    },
} // end Server
