function Device(){
  this.init();
}
Device.prototype = {
    init: function(){
        var device = this;
        if (window.DeviceMotionEvent) {
          console.log("DeviceMotionEvent supported");
          window.addEventListener('devicemotion', device.deviceMotionHandler.bind(device), true);
        }
        if (window.DeviceOrientationEvent) {
            console.log("DeviceOrientationEvent supported");
            window.addEventListener('deviceorientation', device.deviceOrientationHandler.bind(device), true);
        }

        // Material // MeshLambertMaterial //MeshBasicMaterial
        this.material = new THREE.MeshBasicMaterial({
            color: 0xAA0000 } );
        this.geometry = new THREE.BoxGeometry( 20, 20, 20 );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        scene.add( this.mesh );

        this.pos = new THREE.Vector3(0, 50, 0);
        this.vel = new THREE.Vector3(0, 0, 0);
        this.accel = new THREE.Vector3(0, 0, 0);
    },
    update: function(){
        this.vel.add(this.accel);
        this.vel.multiplyScalar(damping);
        this.pos.add(this.vel);
        this.accel.multiplyScalar(0);

        if(this.pos.x < -200) this.pos.x = -200;
        if(this.pos.x > 200) this.pos.x = 200;
        if(this.pos.y < -200) this.pos.y = -200;
        if(this.pos.y > 200) this.pos.y = 200;
        if(this.pos.z < 0) this.pos.z = 0;
        if(this.pos.z > 200) this.pos.z = 200;

        this.mesh.position.x = this.pos.x;
        this.mesh.position.y = this.pos.y;
        this.mesh.position.z = this.pos.z;
    },
    deviceOrientationHandler : function(eventData){
        /*console.log('(' + eventData.alpha + ', '
                        + eventData.beta + ', '
                        + eventData.gamma + ')');*/
        this.accel.x = eventData.alpha;
        this.accel.y = eventData.beta;
        this.accel.z = eventData.gamma;
    },
    deviceMotionHandler: function(eventData) {
        //console.log(eventData)
        //var acceleration = eventData.acceleration;
        //console.log('acceleration')
        //console.log(acceleration)
        acceleration = eventData.accelerationIncludingGravity;
        //console.log(acceleration)
        /*console.log('(' + acceleration.x + ', '
                        + acceleration.y + ', '
                        + acceleration.z + ')');*/

        this.accel.x = acceleration.x / 20;
        this.accel.y = (acceleration.y)/ 20;
        this.accel.z = (acceleration.z) / 20; // - 9.8
        

        /*var rotation = eventData.rotationRate;
        console.log('rotation')
        console.log(rotation)*/
    }
} // end Device



/* window.addEventListener("MozOrientation", function(e) {
            i.push("MozOrientation"),
            t.x = e.x - n.x,
            t.y = e.y - n.y,
            t.z = e.z - n.z
        }, !0),
        window.addEventListener("devicemotion", function(e) {
            i.push("devicemotion"),
            t.x = e.accelerationIncludingGravity.x - n.x,
            t.y = e.accelerationIncludingGravity.y - n.y,
            t.z = e.accelerationIncludingGravity.z - n.z
        }, !0),
        window.addEventListener("deviceorientation", function(e) {
            i.push("deviceorientation"),
            t.alpha = e.alpha - n.alpha,
            t.beta = e.beta - n.beta,
            t.gamma = e.gamma - n.gamma
        }, !0)*/

