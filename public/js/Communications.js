function Communications(){
    this.init();
}
Communications.prototype = {
    init:function(){},
    connect: function(){
        return new Promise(function(resolve, reject){
            //if(communications.socket != undefined)
              //  communications.socket.io._reconnection =true;

            communications.socket = io.connect('http://localhost:80/',
                {reconnection: false});
            setTimeout( function(){
                if(communications.socket.connected){
                    communications.setupconnection();
                    resolve();
                }else{
                    //addmsg('Connection Timed Out! :(')
                    communications.socket.io._reconnection =false;
                    reject();
                }
            }, 1000 );
        });
    },
    setupconnection:function(){
    },
}; // end Communications
