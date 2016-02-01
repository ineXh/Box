var Engine = (function(global) {
    window.scrollTo(0,1);
	startTime = Date.now();
	width 	= window.innerWidth;
	height 	= window.innerHeight;

	dim = (width < height) ? width : height;
	big_dim = (width < height) ? height : width;
    

	animate();
})(this);


function update(){
    //console.log('update')
	 var now = Date.now(),
         dt  = (now - lastTime),
         t   = (now - startTime);
    time = {t:t, dt: dt};
    lastTime = now;
    
}

function animate() {
	update();    
}
