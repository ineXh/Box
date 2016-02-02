var enums = require("./enums.js");
module.exports = exports = webClient;

function webClient(io, server){

    io.on('connection', Main); // end io connection callback

    return this;
} // end webClient

function Main(socket){
    var client = {socket: socket,
                room: null}
    onConnect();

    function onConnect(){
        console.log('A webClient has connected.');
        socket.join('Global Chat')
        client.room = 'Global Chat';
    }

} // end Main

