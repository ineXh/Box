var enums = require("./enums.js");
module.exports = exports = webClient;

function webClient(io, server){

    io.on('connection', Main); // end io connection callback

    return this;
} // end webClient

function Main(socket){
    var client = {socket: socket,
                room: ''}
    var main = this;
    onConnect.call(this);
    addListeners();

    function addListeners(){
        socket.on('move', onMove.bind(main));
    }
    function onConnect(){
        console.log('A webClient has connected.');
        client.room = 'Global';
        socket.join(client.room)
    }
} // end Main


function onMove(){
    console.log('onMove');
}


